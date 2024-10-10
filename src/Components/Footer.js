import "./Footer.css";
import Aboutme from "./Aboutme";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";

const Footer = () => {
  return (
    <div className="Footer_container">
      <div className="Footer_elements">
        <div>
          <Link href={Aboutme}>About Me</Link>
        </div>
        <div>
          <Link href={Projects}>Projects</Link>
        </div>
        <div>
          <Link href={Skills}>Skills</Link>
        </div>
        <div>
          <Link href={Contact}>Contact</Link>
        </div>
      </div>
      <div className="Footer_elements2">
        <div>
          <a href="http://www.linkedin.com/in/chilukuri-srikanth-reddy-3b2965127">
            Linkedin
          </a>
        </div>
        <div>
          <a href="https://github.com/dev-csr">Github</a>
        </div>
        <div>
          <a href="https://www.instagram.com/srikanthchilukuri01/">Instagram</a>
        </div>
        <div>Mail id: srikanthchilukuri01@gmail.com</div>
      </div>
      <div className="Footer_elements">
        <div>Resume</div>
      </div>
    </div>
  );
};

export default Footer;
