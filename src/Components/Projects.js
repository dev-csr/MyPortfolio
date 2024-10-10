import "./Projects.css";
import bankist from "./banklist.png";
import Merch from "./merch.png";
import Forkify from "./forkify.png";
import DisneyClone from "./DisneyClone.png";
import { motion } from "framer-motion";
import { fadein } from "../variants";

const Projects = ({ Projects_change }) => {
  return (
    <motion.div
      id="projects"
      variants={fadein("up", 0.2)}
      initial="hidden"
      exit="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className={`projects_container ${Projects_change}`}
    >
      <h2>Projects</h2>
      <div className="Projects">
        <motion.div
          variants={fadein("left", 0.2)}
          initial="hidden"
          exit="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="Project_img"
        >
          <img className="project_images" src={bankist} alt="bankist" />
          <a
            className="project_links"
            href="https://bankist-csrdev.netlify.app/"
          >
            {" "}
            Bankist{" "}
          </a>
        </motion.div>
        <motion.div
          variants={fadein("left", 0.2)}
          initial="hidden"
          exit="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="Project_img"
        >
          <img className="project_images" src={Merch} alt="bankist" />
          <a className="project_links" href="https://my-app-3391.web.app/">
            {" "}
            Merchandise{" "}
          </a>
        </motion.div>
        <motion.div
          variants={fadein("left", 0.2)}
          initial="hidden"
          exit="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="Project_img"
        >
          <img className="project_images" src={Forkify} alt="bankist" />
          <a
            className="project_links"
            href="https://forkify-csrdev.netlify.app/"
          >
            {" "}
            Forkify{" "}
          </a>
        </motion.div>
        <motion.div
          variants={fadein("left", 0.2)}
          initial="hidden"
          exit="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="Project_img"
        >
          <img className="project_images" src={DisneyClone} alt="bankist" />
          <a
            className="project_links"
            href="https://disney-clone-85c97.web.app/"
          >
            {" "}
            Disney Clone{" "}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Projects;
