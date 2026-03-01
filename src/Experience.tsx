import { Experiences } from "./Constants";
import Exp from "./Exp";

const Experience = () => {
  return (
    <div className="exp-sec">
      <div className="sec-title glass-dark-pill">
        <p className="glass-text">Work Experience</p>
      </div>
      <div className="exps">
        {Experiences.map((obj) => {
          return <Exp {...obj} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
