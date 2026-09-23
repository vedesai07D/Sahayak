-- Sahayak Community — Supabase schema
-- Run this whole file in the Supabase SQL editor (Dashboard → SQL Editor → New query).
-- Designed around the existing CommunityPost/CommunityComment shapes:
--   posts (id, user_id, content, category, created_at, updated_at)
--   comments (id, post_id, user_id, content, created_at)
--   likes (id, post_id, user_id, created_at)
--   reports (id, post_id, user_id, reason, created_at)
--   profiles (id, display_name, created_at)

-- 1) Tables ---------------------------------------------------------------

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null default 'Anonymous',
  created_at timestamptz not null default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  -- references profiles (not auth.users directly) so the client can embed
  -- profiles via posts in a single PostgREST query
  user_id uuid not null references public.profiles (id) on delete cascade,
  content text not null check (char_length(content) between 1 and 2000),
  category text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  content text not null check (char_length(content) between 1 and 1000),
  created_at timestamptz not null default now()
);

create table if not exists public.likes (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (post_id, user_id) -- one like per user per post
);

create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  reason text,
  created_at timestamptz not null default now()
);

create index if not exists posts_created_at_idx on public.posts (created_at desc);
create index if not exists comments_post_id_idx on public.comments (post_id);
create index if not exists likes_post_id_idx on public.likes (post_id);

-- 2) Auto-create a profile row when a user signs up ------------------------

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(nullif(new.raw_user_meta_data ->> 'display_name', ''), split_part(coalesce(new.email, ''), '@', 1), 'Anonymous')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

-- 3) Row Level Security -----------------------------------------------------

alter table public.profiles enable row level security;
alter table public.posts enable row level security;
alter table public.comments enable row level security;
alter table public.likes enable row level security;
alter table public.reports enable row level security;

-- profiles: any signed-in user can read (needed to show author names);
-- each user manages only their own row.
create policy "profiles_select_authenticated" on public.profiles
  for select to authenticated using (true);
create policy "profiles_insert_own" on public.profiles
  for insert to authenticated with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles
  for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

-- posts: signed-in users read all; create as self; edit/delete only own.
create policy "posts_select_authenticated" on public.posts
  for select to authenticated using (true);
create policy "posts_insert_own" on public.posts
  for insert to authenticated with check (auth.uid() = user_id);
create policy "posts_update_own" on public.posts
  for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "posts_delete_own" on public.posts
  for delete to authenticated using (auth.uid() = user_id);

-- comments: signed-in users read all; create as self; delete only own.
create policy "comments_select_authenticated" on public.comments
  for select to authenticated using (true);
create policy "comments_insert_own" on public.comments
  for insert to authenticated with check (auth.uid() = user_id);
create policy "comments_delete_own" on public.comments
  for delete to authenticated using (auth.uid() = user_id);

-- likes: signed-in users read all (to show counts and own-like state);
-- like/unlike only as self.
create policy "likes_select_authenticated" on public.likes
  for select to authenticated using (true);
create policy "likes_insert_own" on public.likes
  for insert to authenticated with check (auth.uid() = user_id);
create policy "likes_delete_own" on public.likes
  for delete to authenticated using (auth.uid() = user_id);

-- reports: signed-in users can report as themselves; reports are not
-- publicly listable beyond that (kept simple — read own).
create policy "reports_select_own" on public.reports
  for select to authenticated using (auth.uid() = user_id);
create policy "reports_insert_own" on public.reports
  for insert to authenticated with check (auth.uid() = user_id);