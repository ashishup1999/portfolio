import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export const Card = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => <div className={`card ${className}`}>{children}</div>;

export const Chip = ({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "orange" | "cyan" | "indigo";
}) => <span className={`chip chip-${tone}`}>{children}</span>;

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) => (
  <div className="section-heading">
    <div>
      {eyebrow && (
        <span className="eyebrow">
          <i className="dot" />
          {eyebrow}
        </span>
      )}
      <h2 className="h2">{title}</h2>
      {subtitle && <p className="lead">{subtitle}</p>}
    </div>
    {children}
  </div>
);

export const StatTile = ({
  label,
  value,
  unit,
  note,
}: {
  label: string;
  value: string;
  unit?: string;
  note?: string;
}) => (
  <div className="stat-tile">
    <span className="label">{label}</span>
    <p className="stat-value">
      {value}
      {unit && <small>{unit}</small>}
    </p>
    {note && <span className="stat-note">{note}</span>}
  </div>
);

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  to?: string;
  href?: string;
};

export const Button = ({
  children,
  variant = "primary",
  to,
  href,
}: ButtonProps) => {
  const cls = `btn btn-${variant}`;
  if (to)
    return (
      <Link className={cls} to={to}>
        {children}
      </Link>
    );
  return (
    <a className={cls} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export const CtaBanner = ({
  eyebrow,
  title,
  accent,
  body,
  tags,
  children,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  body: string;
  tags?: string[];
  children: ReactNode;
}) => (
  <section className="cta-banner">
    <div className="cta-copy">
      {eyebrow && (
        <span className="eyebrow">
          <i className="dot pulse" />
          {eyebrow}
        </span>
      )}
      <h2 className="h2">
        {title} {accent && <span className="grad-orange">{accent}</span>}
      </h2>
      <p className="lead">{body}</p>
      {tags && (
        <div className="chip-wrap">
          {tags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      )}
    </div>
    <div className="cta-actions">{children}</div>
  </section>
);

const TOKEN =
  /("(?:[^"\\]|\\.)*")(\s*:)?|([{}[\],])|\b(true|false|null)\b|(-?\d+(?:\.\d+)?)/g;

// Minimal JSON-ish syntax highlighter: keys, strings, numbers, punctuation.
const highlight = (code: string): ReactNode[] => {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of code.matchAll(TOKEN)) {
    const at = m.index ?? 0;
    if (at > last) out.push(code.slice(last, at));
    const [full, str, colon, punct, lit, num] = m;
    if (str && colon) {
      out.push(
        <span key={i++} className="tok-key">
          {str}
        </span>,
        <span key={i++} className="tok-punct">
          {colon}
        </span>,
      );
    } else if (str) {
      out.push(
        <span key={i++} className="tok-str">
          {str}
        </span>,
      );
    } else if (punct) {
      out.push(
        <span key={i++} className="tok-punct">
          {punct}
        </span>,
      );
    } else if (lit || num) {
      out.push(
        <span key={i++} className="tok-num">
          {full}
        </span>,
      );
    }
    last = at + full.length;
  }
  if (last < code.length) out.push(code.slice(last));
  return out;
};

export const CodeWindow = ({
  title,
  code,
  meta,
}: {
  title: string;
  code: string;
  meta?: string;
}) => (
  <div className="code-window">
    <div className="code-bar">
      <span className="lights">
        <i />
        <i />
        <i />
      </span>
      <span className="mono code-title">{title}</span>
      {meta && <span className="mono code-meta">{meta}</span>}
    </div>
    <pre className="mono code-body">{highlight(code)}</pre>
  </div>
);
