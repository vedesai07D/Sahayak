import { useState } from "react";
import { PhoneCall, ShieldAlert, UserPlus, Trash2 } from "lucide-react";
import { Chip, ElderButton, ElderInput, LargeCard, SectionHeader } from "@/components/elder";
import { useApp } from "@/lib/store";

/**
 * Shared emergency content used by the /emergency page and the Settings
 * emergency section. Order matters for the user: trusted family contacts
 * first (one tap to call someone they know), then official helplines,
 * then the first-aid checklists.
 */
export function EmergencyContent() {
  const { state, t, update } = useApp();
  const [showAddContact, setShowAddContact] = useState(false);
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = () => {
    if (!name.trim() || !phone.trim()) return;
    update((s) => ({
      contacts: [
        ...s.contacts,
        { id: `c-${Date.now()}`, name: name.trim(), relationship: relationship.trim(), phone: phone.trim() },
      ],
    }));
    setName("");
    setRelationship("");
    setPhone("");
    setShowAddContact(false);
  };

  const removeContact = (id: string) => {
    update((s) => ({ contacts: s.contacts.filter((c) => c.id !== id) }));
  };

  return (
    <div className="space-y-8">
      {/* Trusted family contacts first — the fastest help in a real emergency */}
      <section>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <SectionHeader title={t("trustedContacts")} emoji="👨‍👩‍👧" />
          <ElderButton
            size="md"
            variant="outline"
            onClick={() => setShowAddContact(!showAddContact)}
          >
            <UserPlus aria-hidden="true" /> {t("addEmergencyContact")}
          </ElderButton>
        </div>

        {showAddContact ? (
          <LargeCard className="mb-4 space-y-4 border-2 border-primary">
            <h3 className="text-xl font-bold">{t("addEmergencyContact")}</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <label className="grid min-w-0 gap-1">
                <span className="text-base font-semibold">{t("contactName")}</span>
                <ElderInput
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("contactName")}
                  autoComplete="name"
                />
              </label>
              <label className="grid min-w-0 gap-1">
                <span className="text-base font-semibold">{t("relationship")}</span>
                <ElderInput
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  placeholder={t("relationship")}
                />
              </label>
              <label className="grid min-w-0 gap-1">
                <span className="text-base font-semibold">{t("phoneNumber")}</span>
                <ElderInput
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t("phoneNumber")}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                />
              </label>
            </div>
            <div className="flex flex-wrap gap-3">
              <ElderButton onClick={addContact} disabled={!name.trim() || !phone.trim()}>
                {t("addContactBtn")}
              </ElderButton>
              <ElderButton variant="ghost" onClick={() => setShowAddContact(false)}>
                {t("cancel")}
              </ElderButton>
            </div>
          </LargeCard>
        ) : null}

        {state.contacts.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {state.contacts.map((c) => (
              <div key={c.id} className="card-surface flex flex-col justify-between gap-4 p-5">
                <div>
                  <p className="text-2xl font-bold">{c.name}</p>
                  {c.relationship ? (
                    <p className="text-base text-muted-foreground">{c.relationship}</p>
                  ) : null}
                  <p className="mt-1 text-lg font-medium tabular-nums">{c.phone}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${c.phone}`}
                    className="inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-lg font-bold text-primary-foreground shadow-lift hover:brightness-110 active:scale-[0.99]"
                  >
                    <PhoneCall className="size-6 shrink-0" aria-hidden="true" />
                    <span>{t("callContact")} {c.name}</span>
                  </a>
                  <ElderButton
                    size="md"
                    variant="outline"
                    aria-label={`Remove ${c.name}`}
                    onClick={() => removeContact(c.id)}
                  >
                    <Trash2 aria-hidden="true" />
                  </ElderButton>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <LargeCard>
            <p className="text-lg text-muted-foreground">{t("noContactsYet")}</p>
            <p className="mt-1 text-base text-muted-foreground">
              {t("trustedContactsSubtitle")}
            </p>
            <div className="mt-4">
              <ElderButton onClick={() => setShowAddContact(true)}>
                <UserPlus aria-hidden="true" /> {t("addEmergencyContact")}
              </ElderButton>
            </div>
          </LargeCard>
        )}
      </section>

      {/* Official helplines — clean rows, one icon per card, nothing misaligned */}
      <section>
        <SectionHeader title={t("emergencyHelplineTitle")} emoji="📞" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card-surface border-2 border-destructive bg-destructive-soft p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-2xl font-bold text-destructive">{t("emergency1930")}</h3>
              <Chip tone="success">{t("worksOfflineCall")}</Chip>
            </div>
            <p className="mt-2 text-lg leading-relaxed text-foreground">
              {t("emergency1930Desc")}
            </p>
            <div className="mt-4">
              <a
                href="tel:1930"
                className="inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-destructive px-6 text-xl font-bold text-destructive-foreground shadow-lift hover:brightness-110 active:scale-[0.99]"
              >
                <PhoneCall className="size-7 shrink-0" aria-hidden="true" />
                <span>{t("callNow")} (1930)</span>
              </a>
            </div>
          </div>

          <div className="card-surface border-2 border-primary p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-2xl font-bold text-primary">{t("emergency112")}</h3>
              <Chip tone="success">{t("worksOfflineCall")}</Chip>
            </div>
            <p className="mt-2 text-lg leading-relaxed text-foreground">
              {t("emergency112Desc")}
            </p>
            <div className="mt-4">
              <a
                href="tel:112"
                className="inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-primary px-6 text-xl font-bold text-primary-foreground shadow-lift hover:brightness-110 active:scale-[0.99]"
              >
                <PhoneCall className="size-7 shrink-0" aria-hidden="true" />
                <span>{t("callNow")} (112)</span>
              </a>
            </div>
          </div>

          <div className="card-surface p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-bold">{t("emergency14567")}</h3>
              <Chip tone="success">{t("worksOfflineCall")}</Chip>
            </div>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              {t("emergency14567Desc")}
            </p>
            <div className="mt-4">
              <a
                href="tel:14567"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border-2 border-border bg-card px-5 text-lg font-bold hover:bg-muted active:scale-[0.99]"
              >
                <PhoneCall className="size-6 shrink-0 text-primary" aria-hidden="true" />
                <span>{t("callNow")} (14567)</span>
              </a>
            </div>
          </div>

          <div className="card-surface p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-bold">{t("emergency108")}</h3>
              <Chip tone="success">{t("worksOfflineCall")}</Chip>
            </div>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              {t("emergency108Desc")}
            </p>
            <div className="mt-4">
              <a
                href="tel:108"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border-2 border-border bg-card px-5 text-lg font-bold hover:bg-muted active:scale-[0.99]"
              >
                <PhoneCall className="size-6 shrink-0 text-primary" aria-hidden="true" />
                <span>{t("callNow")} (108)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* First-aid checklists */}
      <section>
        <SectionHeader title={t("quickEmergencySteps")} emoji="⚡" />
        <div className="grid gap-4 md:grid-cols-2">
          <LargeCard className="space-y-3 border-2 border-warning bg-warning-soft">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <ShieldAlert className="size-6 shrink-0 text-warning" aria-hidden="true" />
              {t("moneyLostHeading")}
            </h3>
            <ol className="list-decimal space-y-2 pl-6 text-lg">
              <li>{t("moneyLostStep1")}</li>
              <li>{t("moneyLostStep2")}</li>
              <li>{t("moneyLostStep3")}</li>
            </ol>
          </LargeCard>

          <LargeCard className="space-y-3 border-2 border-destructive bg-destructive-soft">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <ShieldAlert className="size-6 shrink-0 text-destructive" aria-hidden="true" />
              {t("threatHeading")}
            </h3>
            <ol className="list-decimal space-y-2 pl-6 text-lg">
              <li>{t("threatStep1")}</li>
              <li>{t("threatStep2")}</li>
              <li>{t("threatStep3")}</li>
            </ol>
          </LargeCard>
        </div>
      </section>
    </div>
  );
}