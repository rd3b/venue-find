import { PropsWithChildren } from "react";

type SectionHeadingProps = PropsWithChildren<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
}>;

export default function SectionHeading({ eyebrow, title, subtitle, children }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div className="text-xs tracking-[0.2em] uppercase text-black/60">{eyebrow}</div>
      )}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-black">{title}</h2>
      {subtitle && <p className="mt-3 text-black/70">{subtitle}</p>}
      {children}
    </div>
  );
}


