import type { CSSProperties } from "react";
import { usePageMeta } from "../components/layout/usePageMeta";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import {
  Button,
  CodeWindow,
  CtaBanner,
  SectionHeading,
  StatTile,
} from "../components/ui";
import {
  ABOUT_DETAILS,
  CODE_SNIPPET,
  EXPLORE,
  HERO_STATS,
  NOW,
  PHILOSOPHY,
  SOCIAL_LINKS,
} from "../Constants";

const PHILOSOPHY_COLORS = ["#a5a6ff", "#ff9a52", "#4cd7f6"];

const AboutPage = () => {
  usePageMeta("Ashish Upadhyay | Software Engineer");
  return (
  <div className="page">
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow mono">
          <i className="dot" />
          Frontend &amp; full-stack engineer
        </span>
        <h1 className="h1">
          Building scalable products with an{" "}
          <span className="grad-orange">AI-native</span> workflow.
        </h1>
        <p className="lead">
          {ABOUT_DETAILS.text1}
          {ABOUT_DETAILS.text2.toLowerCase()} {ABOUT_DETAILS.short}
        </p>
        <div className="hero-actions">
          <Button to="/projects">Explore Projects &rarr;</Button>
          <Button variant="ghost" to="/resume">
            View Resume
          </Button>
        </div>
        <div className="stat-row">
          {HERO_STATS.map((s) => (
            <StatTile key={s.label} {...s} />
          ))}
        </div>
      </div>
      <div className="hero-art">
        <div className="avatar-card">
          <img src={avatar} alt="Ashish Upadhyay" />
        </div>
        <span className="float-chip fc-1 mono">Claude Code &amp; MCP</span>
        <span className="float-chip fc-2 mono">Next.js &amp; React</span>
        <span className="float-chip fc-3 mono">Node.js &amp; Go</span>
        <span className="float-chip fc-4 mono">AI Agents</span>
      </div>
    </section>

    <section className="now-row">
      <h2 className="sr-only">Right now</h2>
      {NOW.map((n) => {
        const inner = (
          <>
            <span className="label">{n.label}</span>
            <h3>{n.title}</h3>
            <p>{n.note}</p>
          </>
        );
        return n.href ? (
          <a
            key={n.label}
            className="now-tile now-link"
            href={n.href}
            target="_blank"
            rel="noreferrer"
          >
            {inner}
            <span className="sr-only"> (opens in a new tab)</span>
            <span className="now-arrow" aria-hidden="true">
              &#8599;
            </span>
          </a>
        ) : (
          <div key={n.label} className="now-tile">
            {inner}
          </div>
        );
      })}
    </section>

    <section className="stack-gap">
      <SectionHeading
        eyebrow="How I work"
        title="How I build"
        subtitle="Fast with AI, careful in review."
      />
      <div className="grid-3">
        {PHILOSOPHY.map((p, i) => (
          <div
            key={p.title}
            className="phil-tile"
            style={{ "--brand": PHILOSOPHY_COLORS[i] } as CSSProperties}
          >
            <span className="phil-num mono">0{i + 1}</span>
            <span className="phil-tag mono">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <span className="mono foot">{p.foot}</span>
          </div>
        ))}
      </div>
    </section>

    <CodeWindow
      title="a few notes about me"
      meta="background.json"
      code={CODE_SNIPPET}
    />

    <section className="stack-gap">
      <SectionHeading eyebrow="Look around" title="Find out more" />
      <div className="grid-3">
        {EXPLORE.map((e, i) => (
          <Link
            key={e.to}
            to={e.to}
            className="explore-tile"
            style={{ "--brand": e.color } as CSSProperties}
          >
            <span className="explore-num mono">0{i + 1}</span>
            <h3>{e.title}</h3>
            <p>{e.note}</p>
            <div className="explore-chips">
              {e.preview.map((p) => (
                <span key={p} className="explore-chip mono">
                  {p}
                </span>
              ))}
            </div>
            <span className="explore-go">
              Open {e.title.toLowerCase()}
              <i aria-hidden="true">&rarr;</i>
            </span>
          </Link>
        ))}
      </div>
    </section>

    <CtaBanner
      eyebrow="Open to new roles"
      title="Let's build something"
      accent="together."
      body="Full-stack and frontend-leaning roles, and product work where shipping end to end matters."
      tags={["Full-stack", "Frontend-leaning", "Product-minded"]}
    >
      <Button href={SOCIAL_LINKS.linkedin}>Get in touch &rarr;</Button>
      <Button variant="ghost" to="/resume">
        View resume
      </Button>
    </CtaBanner>
  </div>
);
};

export default AboutPage;
