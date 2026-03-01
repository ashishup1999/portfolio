import mandala from "./assets/mandala.svg";
import { SKILLS_LIST } from "./Constants";

function getPolygonVertices(height: number, sides: number) {
  const center = height / 2;
  const radius = height / 2;

  // Rotation offset so flat side is on top (parallel to square's side)
  // For even-sided polygons: rotate by 90 + (180/sides)
  // This ensures a flat edge is always at the top
  const rotationOffset = 90 + 180 / sides;

  const vertices = [];

  for (let i = 0; i < sides; i++) {
    const angleDeg = rotationOffset + (360 / sides) * i;
    const angleRad = (angleDeg * Math.PI) / 180;

    vertices.push({
      left: center + radius * Math.cos(angleRad),
      top: center - radius * Math.sin(angleRad),
    });
  }

  return vertices;
}

const SkillPill = ({
  top,
  left,
  imgUrl,
  isSpinCW,
  initDeg = 0,
}: {
  top: number;
  left: number;
  imgUrl: string;
  isSpinCW?: boolean;
  initDeg?: number;
}) => {
  return (
    <div className={`glass skill-pill`} style={{ top, left }}>
      <img
        src={imgUrl}
        alt={imgUrl.split("/")[0] || ""}
        style={{
          animationDirection: isSpinCW ? "reverse" : "normal",
          rotate: `${initDeg}deg`,
        }}
      />
    </div>
  );
};

const SkillBox = ({
  skills,
  len,
  initDeg = 0,
  isSpinCW = true,
}: {
  skills: string[];
  len: number;
  initDeg?: number;
  isSpinCW?: boolean;
}) => {
  const ordinates = getPolygonVertices(len, skills.length);
  return (
    <div
      className={`skills-wrap spin-${isSpinCW ? "clock" : "anti-clock"}`}
      style={{
        width: len,
        height: len,
        borderRadius: len,
        rotate: `${initDeg}deg`,
      }}
    >
      {ordinates.map((value, idx) => {
        return (
          <SkillPill
            imgUrl={skills[idx]}
            isSpinCW={isSpinCW}
            initDeg={initDeg * -1}
            {...value}
          />
        );
      })}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skill-sec">
      <div className="sec-title glass">
        <p className="glass-text">Technical Skills</p>
      </div>
      <div className="skills">
        <img
          src={mandala}
          className="spin-clock"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "min(600px, 100%)",
            height: "min(600px, 100%)",
            backgroundImage: `url(${mandala})`,
            backgroundPosition: "center",
            backgroundSize: "contain", // Adjust as needed
            backgroundRepeat: "no-repeat", // Adjust as needed
          }}
        />
        <SkillBox
          skills={SKILLS_LIST.map((obj) => obj.url).splice(0, 8)}
          len={Math.min(650, window.innerWidth * 0.75)}
        />
        <SkillBox
          skills={SKILLS_LIST.map((obj) => obj.url).splice(16, 8)}
          len={Math.min(525, window.innerWidth * 0.55)}
          initDeg={22.5}
        />
        <SkillBox
          skills={SKILLS_LIST.map((obj) => obj.url).splice(8, 8)}
          len={Math.min(300, window.innerWidth * 0.3)}
          initDeg={22.5}
          isSpinCW={false}
        />
        <div className="glass skill-pill-center">
          <img
            src={SKILLS_LIST.at(-1)?.url}
            alt={SKILLS_LIST.at(-1)?.url.split("/")[0] || ""}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
