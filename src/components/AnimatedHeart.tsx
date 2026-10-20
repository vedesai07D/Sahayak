import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Heart icon for like / save buttons: filled when active, and it "pops"
 * (see .heart-pop in styles.css) whenever `active` changes after mount.
 */
export function AnimatedHeart({ active, className }: { active: boolean; className?: string }) {
  const prev = useRef(active);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    if (prev.current === active) return;
    prev.current = active;
    setPop(true);
    const id = window.setTimeout(() => setPop(false), 500);
    return () => window.clearTimeout(id);
  }, [active]);

  return (
    <Heart
      aria-hidden="true"
      className={cn(active && "fill-current", pop && "heart-pop", className)}
    />
  );
}
