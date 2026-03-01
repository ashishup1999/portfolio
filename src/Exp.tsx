import { useEffect, useState } from "react";

const Exp = ({
  img,
  role,
  duration,
  desc,
  loc,
}: {
  img: string;
  role: string;
  duration: string;
  desc: string[];
  loc: string;
}) => {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    (async () => {
      if (!img) return;
      const url = await import(`./assets/exps/${img}.svg`);
      setImgUrl(url?.default || "");
    })();
  }, [img]);

  return (
    <div className="exp-wrap glass">
      <div className="exp-img glass">
        <img src={imgUrl} alt={img} />
      </div>
      <div className="exp-head">
        <p className="exp-role">{role}</p>
        <div className="exp-more">
          <p className="exp-loc">{loc}</p>
          <p className="exp-duration">{duration}</p>
        </div>
      </div>
      <ul className="exp-desc">
        {desc.map((str) => {
          return <li>{str}</li>;
        })}
      </ul>
    </div>
  );
};

export default Exp;
