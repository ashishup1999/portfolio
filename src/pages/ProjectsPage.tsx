import { useState } from "react";
import { usePageMeta } from "../components/layout/usePageMeta";
import { Button, Card, Chip, CtaBanner } from "../components/ui";
import {
  PROJECT_FILTERS,
  PROJECTS,
  SOCIAL_LINKS,
  type ProjectCategory,
} from "../Constants";
import { ProjectArt } from "../components/ui/ProjectArt";
import elementStackShot from "../assets/projects/elementstack.jpg";

const featured = PROJECTS.find((p) => p.status === "active" && p.url);
const rest = PROJECTS.filter((p) => p !== featured);

type Project = (typeof PROJECTS)[number];

const ProjectCard = ({ project }: { project: Project }) => (
  <Card
    className={`project-card cat-${project.category}${project.features ? " wide" : ""}`}
  >
    <ProjectArt name={project.name} />
    <div className="project-body">
      <div className="project-top">
        <div className="project-title">
          <h3>{project.name}</h3>
          <span className="label">{project.tag}</span>
        </div>
        <span className="status-pill">Updated {project.updated}</span>
      </div>
      <p className="project-summary">{project.summary}</p>
      <p className="highlight">{project.highlight}</p>
      {project.features && (
        <ul className="feature-list">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      )}
      <div className="project-foot">
        <div className="chip-wrap">
          {project.techStack.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        {(project.url || project.repos) && (
          <div className="card-links">
            {project.url && (
              <a href={project.url} target="_blank" rel="noreferrer">
                Live site <span aria-hidden="true">&#8599;</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            {project.repos?.map((r) => (
              <a key={r.href} href={r.href} target="_blank" rel="noreferrer">
                {r.label} on GitHub <span aria-hidden="true">&#8599;</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  </Card>
);

const ProjectsPage = () => {
  usePageMeta("Projects | Ashish Upadhyay");
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const matches = (c: ProjectCategory) => filter === "all" || c === filter;
  const others = rest.filter((p) => matches(p.category));

  return (
    <div className="page">
      <section className="projects-head">
        <div>
          <span className="eyebrow mono">
            <i className="dot" />
            Projects
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
        <div className="filters" role="group" aria-label="Project filter">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
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
                <i className="dot" />
                {featured.status === "active" ? "In progress" : "Archived"}
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
                Earlier projects. The source for each is on GitHub, and each
                card shows the date of its last commit.
              </p>
            </div>
          </div>
          <div className="project-stack">
            {others
              .filter((p) => p.features)
              .map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
          </div>
          <div className="project-grid">
            {others
              .filter((p) => !p.features)
              .map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
          </div>
        </section>
      )}

      <CtaBanner
        eyebrow="Let's talk"
        title="Have an idea or a role in mind?"
        accent="Let's build it."
        body="I'm open to full-stack engineering roles and interesting product work."
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
