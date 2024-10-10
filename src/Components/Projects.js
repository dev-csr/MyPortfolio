import "./Projects.css";
import bankist from "./banklist.png";

const Projects = ({ Projects_change }) => {
  return (
    <div id="projects" className={`projects_container ${Projects_change}`}>
      <div className="Projects">
        <div className="Project_img">
          <img className="project_images" src={bankist} alt="bankist" />
          <a
            className="project_links"
            href="https://bankist-csrdev.netlify.app/"
          >
            {" "}
            Bankist{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Projects;
