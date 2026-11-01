import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import leetcode from "../../assets/leetcode.svg";
import { NAV_ITEMS, SOCIAL_LINKS } from "../../Constants";

const SOCIALS = [
  { href: SOCIAL_LINKS.linkedin, icon: linkedin, label: "LinkedIn" },
  { href: SOCIAL_LINKS.github, icon: github, label: "GitHub" },
  { href: SOCIAL_LINKS.leetcode, icon: leetcode, label: "LeetCode" },
];

const Brand = () => (
  <NavLink to="/" className="brand" aria-label="Ashish Upadhyay, home">
    <strong>Ashish Upadhyay</strong>
    <small className="mono">Software developer</small>
  </NavLink>
);

type Theme = "light" | "dark";

const THEME_COLORS: Record<Theme, string> = {
  light: "#fdf6e3",
  dark: "#002b36",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLORS[theme]);
  }, [theme]);

  const next = theme === "dark" ? "light" : "dark";
  const choose = () => {
    setTheme(next);
    try {
      // Only an explicit choice is saved, so the default can still change later.
      localStorage.setItem("theme", next);
    } catch {
      // storage unavailable (private mode); the choice just won't persist
    }
  };
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={choose}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      <svg
        className="icon-moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg
        className="icon-sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
};

const Header = () => (
  <header className="site-header">
    <div className="header-inner">
      <Brand />
      <nav className="header-nav" aria-label="Primary">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="header-actions">
        <a
          className="btn btn-primary btn-sm"
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          Let&apos;s Connect &rarr;
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <ThemeToggle />
        <NavLink to="/resume" className="header-avatar" aria-label="Resume">
          <img src={avatar} alt="" />
        </NavLink>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <NavLink to="/" className="brand" aria-label="Ashish Upadhyay, home">
          <strong>Ashish Upadhyay</strong>
        </NavLink>
        <p className="foot-note">
          Software engineer building full-stack products with an AI-native
          workflow. Based in Bengaluru.
        </p>
      </div>
      <nav className="footer-nav" aria-label="Footer">
        <span className="label">Explore</span>
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="footer-connect">
        <span className="label">Connect</span>
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <span className="social-icon">
              <img src={s.icon} alt="" width={16} height={16} />
            </span>
            {s.label}
            <span className="sr-only"> (opens in a new tab)</span>
            <span className="social-arrow" aria-hidden="true">
              &#8599;
            </span>
          </a>
        ))}
      </div>
    </div>
    <div className="footer-mark" aria-hidden="true">
      Ashish Upadhyay
    </div>
    <div className="footer-base">
      <span>&copy; {new Date().getFullYear()} Ashish Upadhyay</span>
      <button
        type="button"
        className="to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top &uarr;
      </button>
    </div>
  </footer>
);

const TabBar = () => (
  <nav className="tab-bar" aria-label="Primary mobile">
    {NAV_ITEMS.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        end={item.end}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {item.label}
      </NavLink>
    ))}
  </nav>
);

const AppShell = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <TabBar />
    </>
  );
};

export default AppShell;
