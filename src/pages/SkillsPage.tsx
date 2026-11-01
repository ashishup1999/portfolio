import type { CSSProperties } from "react";
import { usePageMeta } from "../components/layout/usePageMeta";
import { Button, CtaBanner } from "../components/ui";
import { AI_CLUSTERS, SKILL_GROUPS, SOCIAL_LINKS } from "../Constants";

const icons = import.meta.glob("../assets/skills/*.svg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const SkillsPage = () => {
  usePageMeta("Skills | Ashish Upadhyay");
  return (
  <div className="page">
    <section className="skills-head">
      <span className="eyebrow mono">
        <i className="dot" />
        Skills
      </span>
      <h1 className="h1 h1-md">
        A <span className="grad-indigo">full-stack</span> toolkit, from prompt to
        production
      </h1>
      <p className="lead">
        The AI tooling I build with, and the languages, frameworks and tools I
        ship with every day.
      </p>
    </section>

    <section className="ai-hero">
      <div className="ai-hero-head">
        <span className="eyebrow mono">
          <i className="dot" />
          Working with AI
        </span>
        <h2 className="h2">How I plan, build and ship with AI</h2>
      </div>
      <div className="ai-clusters">
        {AI_CLUSTERS.map((c, i) => (
          <div key={c.title} className={`ai-cluster ai-c${i}`}>
            <h3>{c.title}</h3>
            <p className="mono sub">{c.note}</p>
            <ul className="chips">
              {c.skills.map((s) => (
                <li key={s.label} className="skill-chip">
                  {s.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="skill-bento">
      {SKILL_GROUPS.map((g) => (
        <div
          key={g.title}
          className="skill-tile"
          style={
            {
              "--brand": g.color,
              gridColumn: `span ${g.span}`,
            } as CSSProperties
          }
        >
          <header>
            <h3>{g.title}</h3>
            <p className="mono sub">{g.subtitle}</p>
          </header>
          <ul className="chips">
            {g.skills.map((s) => (
              <li key={s.label} className="skill-chip">
                {s.key && (
                  <span className="chip-icon">
                    <img
                      src={icons[`../assets/skills/${s.key}.svg`]}
                      alt=""
                      width={18}
                      height={18}
                    />
                  </span>
                )}
                {s.label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>

    <CtaBanner
      eyebrow="Say hello"
      title="Let's build something"
      accent="together."
      body="Happy to talk about full-stack products, performance work or ML-backed features."
      tags={["Full-stack", "Frontend-leaning", "Product-minded"]}
    >
      <Button href={SOCIAL_LINKS.linkedin}>Get in touch &rarr;</Button>
      <Button variant="ghost" to="/projects">
        See my projects
      </Button>
    </CtaBanner>
  </div>
);
};

export default SkillsPage;
