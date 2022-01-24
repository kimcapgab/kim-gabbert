import { projects } from "../data";

export default function Projects() {
  return (
    <section id="project">
      <div>
        <img className="code" src="Code_a26769.png" alt="code" />
        <h1>APPS I'VE BUILT</h1>
        <div className="project_cards">
          {projects.map((project) => (
            <div key={project.id} className="buildapps_container">
              <h3> {project.title} </h3>
              <h4> {project.subtitle} </h4>
              <h4> {project.description} </h4>
              <a href={project.link} target="_blank" rel="noreferrer">
                <div className="buildapps">
                  <img
                    className="projectgif"
                    width="250px"
                    src={project.image}
                    alt="gallery"
                  />
                </div>
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                <img className="github" src="./github-logo.png" alt="GitHub" />
              </a>
              <a href={project.link} target="_blank" rel="noreferrer">
                <button>Visit Website</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
