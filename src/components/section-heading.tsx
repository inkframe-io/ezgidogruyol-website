import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  /** Two-digit index, e.g. "02". */
  index: string;
  /** Short label, shown uppercased in the monospace eyebrow. */
  label: string;
  /** Large heading text. */
  title: string;
  /** id applied to the <h2> so the <section> can aria-labelledby it. */
  id: string;
};

export function SectionHeading({ index, label, title, id }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10">
      <p className="font-mono text-xs tracking-widest text-muted uppercase">
        <span className="text-accent-pink">{index}</span>
        <span aria-hidden="true"> — </span>
        {label}
      </p>
      <h2
        id={id}
        className="mt-3 text-3xl font-bold tracking-tight text-fg sm:text-4xl"
      >
        {title}
      </h2>
    </Reveal>
  );
}
