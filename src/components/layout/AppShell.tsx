import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/logo.svg";
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
    <small className="mono">SOFTWARE DEVELOPER</small>
  </NavLink>
);

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
        </a>
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
          <img src={logo} alt="" className="brand-logo" />
          <strong>Ashish Upadhyay</strong>
        </NavLink>
        <p className="foot-note">
          Software engineer building full-stack products with an AI-native
          workflow. Based in Bengaluru.
        </p>
        <span className="status-badge mono">
          <i className="dot dot-cyan pulse" />
          OPEN TO NEW ROLES
        </span>
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
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <TabBar />
    </>
  );
};

export default AppShell;
