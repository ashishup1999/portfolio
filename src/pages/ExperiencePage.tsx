import type { CSSProperties } from "react";
import { Button, Card, Chip, CtaBanner } from "../components/ui";
import {
  CERTIFICATIONS,
  EDUCATION,
  Experiences,
  SOCIAL_LINKS,
  YEARS_EXPERIENCE,
} from "../Constants";

const logos = import.meta.glob("../assets/exps/*.svg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const monthIndex = (label: string) => {
  const [mon, year] = label.trim().split(" ");
  return Number(year) * 12 + MONTHS.indexOf(mon);
};

// "Feb 2026 - Present" -> { start: "Feb 2026", length: "8 mos" }
const spanOf = (duration: string) => {
  const [start, end] = duration.split(" - ");
  const now = new Date();
  const endIdx =
    end.trim() === "Present"
      ? now.getFullYear() * 12 + now.getMonth()
      : monthIndex(end);
  const months = Math.max(1, endIdx - monthIndex(start) + 1);
  const yrs = Math.floor(months / 12);
  const mos = months % 12;
  const length = [
    yrs ? `${yrs} yr${yrs > 1 ? "s" : ""}` : "",
    mos ? `${mos} mo${mos > 1 ? "s" : ""}` : "",
  ]
    .filter(Boolean)
    .join(" ");
  return { start: start.trim(), length };
};

const ExperiencePage = () => (
  <div className="page">
    <section className="career-head">
      <span className="eyebrow mono">
        <i className="dot" />
        CAREER
      </span>
      <h1 className="h1 h1-md">
        From research intern to <span className="grad-indigo">full-stack</span>{" "}
        owner.
      </h1>
      <p className="lead">
        {YEARS_EXPERIENCE} years across fintech and event tech, growing from
        frontend developer to a full-stack engineer shipping with an AI-native
        workflow.
      </p>
      <ol className="career-path" aria-label="Career path">
        {[...Experiences].reverse().map((exp) => {
          const { start, length } = spanOf(exp.duration);
          return (
            <li key={exp.img} style={{ "--brand": exp.color } as CSSProperties}>
              <span className="path-when mono">
                {start} <i>{length}</i>
              </span>
              <button
                type="button"
                className="path-node"
                onClick={() =>
                  document
                    .getElementById(`role-${exp.img}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                <img
                  src={logos[`../assets/exps/${exp.img}.svg`]}
                  alt=""
                  className="path-logo"
                />
                <span className="path-text">
                  <strong>{exp.company}</strong>
                  <span>{exp.role}</span>
                  <span>{exp.loc}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </section>

    <section className="timeline">
      {Experiences.map((exp) => (
        <article
          key={exp.img}
          id={`role-${exp.img}`}
          className="role"
          style={{ "--brand": exp.color } as CSSProperties}
        >
          <aside className="role-rail">
            {exp.duration.endsWith("Present") && (
              <Chip tone="orange">CURRENT ROLE</Chip>
            )}
            <span className="role-period mono">{exp.duration}</span>
            <span className="role-length mono">
              {spanOf(exp.duration).length}
            </span>
            <span className="role-loc">{exp.loc}</span>
          </aside>
          <Card className="exp-card">
            <header className="exp-head">
              <img
                src={logos[`../assets/exps/${exp.img}.svg`]}
                alt={`${exp.company} logo`}
                className="exp-logo"
              />
              <div>
                <h3>{exp.role}</h3>
                <p className="exp-company">{exp.company}</p>
              </div>
            </header>
            <p className="exp-summary">{exp.summary}</p>
            <div className="chip-wrap">
              {exp.highlights.map((h) => (
                <span key={h} className="brand-chip">
                  {h}
                </span>
              ))}
            </div>
            <ul className="exp-bullets">
              {exp.desc.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div className="chip-wrap">
              {exp.tech.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </Card>
        </article>
      ))}
    </section>

    <section className="grid-2">
      <Card className="edu-card">
        <span className="label">Education</span>
        <h3>{EDUCATION.school}</h3>
        <p>{EDUCATION.degree}</p>
        <p className="mono sub">
          {EDUCATION.period} | {EDUCATION.gpa}
        </p>
      </Card>
      <Card className="edu-card">
        <span className="label">Certifications</span>
        <div className="chip-wrap">
          {CERTIFICATIONS.map((c) => (
            <Chip key={c} tone="cyan">
              {c}
            </Chip>
          ))}
        </div>
      </Card>
    </section>

    <CtaBanner
      eyebrow="COLLABORATION"
      title="Need a high-velocity"
      accent="engineer?"
      body="Let's talk about full-stack products, performance work or ML-backed features."
    >
      <Button href={SOCIAL_LINKS.linkedin}>Get in touch &rarr;</Button>
    </CtaBanner>
  </div>
);

export default ExperiencePage;
