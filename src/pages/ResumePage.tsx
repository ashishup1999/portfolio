import { Button } from "../components/ui";
import { RESUME, SOCIAL_LINKS } from "../Constants";

type Role = (typeof RESUME.experience)[number];

const RoleBlock = ({ r }: { r: Role }) => (
  <div className="rs-item">
    <div className="rs-row">
      <p>
        <strong>{r.company}</strong> | {r.role}
      </p>
      <span>
        {r.period} | {r.location}
      </span>
    </div>
    <ul>
      {r.bullets.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  </div>
);

const ResumePage = () => (
  <div className="page">
    <section className="resume-head">
      <div className="resume-intro">
        <span className="eyebrow mono">
          <i className="dot" />
          RESUME
        </span>
        <h1 className="h1 h1-md">
          My <span className="grad-indigo">resume</span>
        </h1>
        <p className="lead">
          A one-page summary of my experience, skills and projects. Download it
          as a PDF to share.
        </p>
      </div>
      <div className="resume-actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => window.print()}
        >
          Download PDF
        </button>
        <Button variant="ghost" href={SOCIAL_LINKS.linkedin}>
          View LinkedIn
        </Button>
      </div>
    </section>
    <p className="print-hint mono">
      Tip: in the print dialog, choose &quot;Save as PDF&quot; as the
      destination.
    </p>

    <article className="resume-sheet" aria-label="Resume preview">
      <header className="rs-head">
        <h2>{RESUME.name}</h2>
        <p className="rs-title">{RESUME.title}</p>
        <p className="rs-contact">
          {RESUME.location} |{" "}
          <a href={SOCIAL_LINKS.linkedin}>LinkedIn</a> |{" "}
          <a href={SOCIAL_LINKS.github}>GitHub</a> |{" "}
          <a href={SOCIAL_LINKS.leetcode}>LeetCode</a>
        </p>
      </header>

      <section>
        <h3>Summary</h3>
        <p>{RESUME.summary}</p>
      </section>

      <section>
        <h3>AI &amp; Engineering Skills</h3>
        <ul className="rs-skills">
          {RESUME.skills.map((s) => (
            <li key={s.label}>
              <strong>{s.label}:</strong> {s.items}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Work Experience</h3>
        {RESUME.experience.map((r) => (
          <RoleBlock key={r.company} r={r} />
        ))}
      </section>

      <section>
        <h3>Internships</h3>
        {RESUME.internships.map((r) => (
          <RoleBlock key={r.company} r={r} />
        ))}
      </section>

      <section>
        <h3>Projects</h3>
        {RESUME.projects.map((p) => (
          <div key={p.name} className="rs-item">
            <p>
              <strong>{p.name}</strong> | {p.stack}
            </p>
            <ul>
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h3>Education</h3>
        <div className="rs-row">
          <p>
            <strong>{RESUME.education.school}</strong> |{" "}
            {RESUME.education.degree}
          </p>
          <span>
            {RESUME.education.period} | {RESUME.education.gpa}
          </span>
        </div>
      </section>

      <section>
        <h3>Certifications</h3>
        <p>{RESUME.certifications.join(" | ")}</p>
      </section>
    </article>
  </div>
);

export default ResumePage;
