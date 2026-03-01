import NavLink from "./NavLink";
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import leetcode from "./assets/leetcode.svg";
import { RESUME_LINK, SOCIAL_LINKS } from "./Constants";

const Header = () => {
  const onCLickLink = (cls: string) => {
    const ele = document.querySelector(`.${cls}`);
    if (ele) {
      ele.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="glass-dark-pill header">
      <p id="logo-title">Ashish Upadhyay</p>
      <nav>
        <NavLink name="About" onClick={() => onCLickLink("about")} />
        <NavLink name="Skills" onClick={() => onCLickLink("skill-sec")} />
        <NavLink name="Projects" onClick={() => onCLickLink("project-sec")} />
        <NavLink name="Experience" onClick={() => onCLickLink("exp-sec")} />
        <NavLink
          name="Resume"
          isDivided={false}
          onClick={() => window.open(RESUME_LINK, "_blank")}
        />
      </nav>
      <div className="social">
        <img
          src={linkedin}
          alt=""
          onClick={() => window.open(SOCIAL_LINKS.linkedin, "_blank")}
        />
        <img
          src={github}
          alt=""
          onClick={() => window.open(SOCIAL_LINKS.github, "_blank")}
        />
        <img
          src={leetcode}
          alt=""
          onClick={() => window.open(SOCIAL_LINKS.leetcode, "_blank")}
        />
      </div>
    </div>
  );
};

export default Header;
