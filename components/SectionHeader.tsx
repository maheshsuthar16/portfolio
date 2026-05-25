import { ReactNode } from "react";

type SectionHeaderProps = {
  kicker: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeader({ kicker, title, children }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      <p className="mb-3 font-display text-xs uppercase tracking-[0.36em] text-frost/75">{kicker}</p>
      <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      {children ? <div className="mt-5 text-base leading-8 text-steel md:text-lg">{children}</div> : null}
    </div>
  );
}
