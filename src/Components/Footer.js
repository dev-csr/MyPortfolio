import "./Footer.css";
import Aboutme from "./Aboutme";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";

const Footer = ({ Footer_change }) => {
  return (
    <div className={`Footer_container ${Footer_change}`}>
      <div className="Footer_elements">
        <div>
          <Link className={`Footer_links ${Footer_change}`} href={Aboutme}>
            About Me
          </Link>
        </div>
        <div>
          <Link className={`Footer_links ${Footer_change}`} href={Projects}>
            Projects
          </Link>
        </div>
        <div>
          <Link className={`Footer_links ${Footer_change}`} href={Skills}>
            Skills
          </Link>
        </div>
        <div>
          <Link className={`Footer_links ${Footer_change}`} href={Contact}>
            Contact
          </Link>
        </div>
      </div>
      <div className="Footer_elements2">
        <div>
          <a
            className={`Footer_links ${Footer_change}`}
            href="http://www.linkedin.com/in/chilukuri-srikanth-reddy-3b2965127"
          >
            Linkedin
          </a>
        </div>
        <div>
          <a
            className={`Footer_links ${Footer_change}`}
            href="https://github.com/dev-csr"
          >
            Github
          </a>
        </div>
        <div>
          <a
            className={`Footer_links ${Footer_change}`}
            href="https://www.instagram.com/srikanthchilukuri01/"
          >
            Instagram
          </a>
        </div>
        <div>
          <a
            className={`Footer_links ${Footer_change}`}
            href="mailto:srikanthchilukuri01@gmail.com"
          >
            email me
          </a>
        </div>
      </div>
      <div className="Footer_elements">
        <div className={`Resume ${Footer_change}`}>Resume</div>
      </div>
    </div>
  );
};

export default Footer;
