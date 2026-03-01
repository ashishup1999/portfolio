import { PROJECTS } from "./Constants";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="project-sec">
      <div className="sec-title glass-dark-pill">
        <p className="glass-text">Projects</p>
      </div>
      <div className="projects">
        {PROJECTS.map((obj, idx) => {
          return (
            <Project
              name={obj.name}
              desc={obj.desc}
              img={obj.img}
              reverseOrder={idx % 2 == 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
