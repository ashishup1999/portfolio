import { useEffect } from "react";
import profileImage from "./assets/profile.png";
import { ABOUT_DETAILS } from "./Constants";

function typewriter(element: HTMLParagraphElement | null, speed = 80) {
  if (!element) return "";
  console.log(element.textContent);
  const text = element.textContent;
  element.textContent = "";
  element.style.borderRight = "3px solid rgba(255,255,255,0.8)";

  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text[i] || "";
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      // stop cursor blink after done (optional)
      // element.style.borderRight = 'none';
    }
  }, speed);
}

const About = () => {
  useEffect(() => {
    typewriter(document.querySelector(".typewriter"));
  }, []);

  return (
    <div className="about glass-dark-pill">
      <div className="about-info">
        <p className="about-text1">{ABOUT_DETAILS.text1}</p>
        <span className="about-text2">
          <p className="typewriter glass-text">{ABOUT_DETAILS.text2}</p>
        </span>
        <p className="about-text3">{ABOUT_DETAILS.text3}</p>
      </div>
      <div className="profile-img">
        <img src={profileImage} alt="" />
      </div>
    </div>
  );
};

export default About;
