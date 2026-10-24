import { useState } from "react";
import { Button, Card, Chip, CtaBanner } from "../components/ui";
import {
  PROJECT_FILTERS,
  PROJECTS,
  SOCIAL_LINKS,
  type ProjectCategory,
} from "../Constants";
import elementStackShot from "../assets/projects/elementstack.jpg";

const featured = PROJECTS.find((p) => p.status === "active" && p.url);
const rest = PROJECTS.filter((p) => p !== featured);

const ProjectsPage = () => {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const matches = (c: ProjectCategory) => filter === "all" || c === filter;
  const others = rest.filter((p) => matches(p.category));

  return (
    <div className="page">
      <section className="projects-head">
        <div>
          <span className="eyebrow mono">
            <i className="dot" />
            PROJECTS
          </span>
          <h1 className="h1 h1-md">
            What I&apos;m <span className="grad-orange">building</span> and what
            I&apos;ve built
          </h1>
          <p className="lead">
            One project in active development, plus earlier full-stack and
            machine learning work.
          </p>
        </div>
        <div className="filters" role="tablist" aria-label="Project filter">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              className={filter === f.id ? "active mono" : "mono"}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {featured && matches(featured.category) && (
        <section className="featured">
          <div className="featured-copy">
            <div className="featured-meta">
              <Chip tone="orange">
                <i className="dot pulse" />
                {featured.status === "active" ? "IN PROGRESS" : "ARCHIVED"}
              </Chip>
              <span className="label">{featured.tag}</span>
            </div>
            <h2 className="h2">{featured.name}</h2>
            <p className="lead">{featured.summary}</p>
            <ul className="feature-list">
              {featured.features?.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="chip-wrap">
              {featured.techStack.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
            <div className="hero-actions">
              {featured.url && (
                <Button href={featured.url}>
                  Visit {featured.name} &rarr;
                </Button>
              )}
            </div>
          </div>
          <div className="featured-shot">
            <div className="browser-bar">
              <i />
              <i />
              <i />
              <span className="mono">elementstack.vercel.app</span>
            </div>
            <img src={elementStackShot} alt={`${featured.name} home page`} />
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="stack-gap">
          <div className="section-heading">
            <div>
              <h2 className="h2">Earlier work</h2>
              <p className="lead">
                These are older projects that are no longer maintained, so there
                are no live links.
              </p>
            </div>
          </div>
          <div className="grid-2">
            {others.map((p, i) => (
              <Card key={p.name} className="project-card">
                <div className="project-top">
                  <span className="project-index mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Chip tone="indigo">{p.tag}</Chip>
                  <span className="archived mono">Not maintained</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <p className="highlight">{p.highlight}</p>
                <div className="chip-wrap">
                  {p.techStack.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      <CtaBanner
        eyebrow="LET'S TALK"
        title="Have an idea or a role in mind?"
        accent="Let's build it."
        body="I'm open to full-stack and AI-native engineering roles and interesting product work."
      >
        <Button href={SOCIAL_LINKS.linkedin}>Get in touch &rarr;</Button>
        <Button variant="ghost" to="/experience">
          View Career Journey
        </Button>
      </CtaBanner>
    </div>
  );
};

export default ProjectsPage;
