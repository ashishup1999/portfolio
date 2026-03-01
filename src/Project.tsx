import { useEffect, useState } from "react";
import mac from "./assets/mac.svg";

const Project = ({
  name,
  desc,
  img,
  reverseOrder,
}: {
  name: string;
  desc: string;
  img?: string;
  reverseOrder: boolean;
}) => {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    (async () => {
      if (!img) return;
      const url = await import(`./assets/projects/${img}.svg`);
      setImgUrl(url?.default || "");
    })();
  }, [img]);

  return (
    <div
      className="project-wrap glass-text-pill"
      style={{ flexDirection: reverseOrder ? "row-reverse" : "row" }}
    >
      <div className="project-pic">
        <p className="project-name">{name}</p>
        <img src={img ? imgUrl : mac} alt="mac" />
      </div>
      <div className="project-desc">{desc}</div>
    </div>
  );
};

export default Project;
