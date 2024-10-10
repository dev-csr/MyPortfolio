import "./Footer.css";

const Footer = ({ Footer_change }) => {
  return (
    <div className={`Footer_container ${Footer_change}`}>
      <div className="Footer_elements">
        <div>
          <a className={`Footer_as ${Footer_change}`} href="#about">
            About Me
          </a>
        </div>
        <div>
          <a className={`Footer_as ${Footer_change}`} href="#projects">
            Projects
          </a>
        </div>
        <div>
          <a className={`Footer_as ${Footer_change}`} href="#skills">
            Skills
          </a>
        </div>
        <div>
          <a className={`Footer_as ${Footer_change}`} href="#contact">
            Contact
          </a>
        </div>
      </div>
      <div className="Footer_elements2">
        <div>
          <a
            className={`Footer_as ${Footer_change}`}
            href="http://www.aedin.com/in/chilukuri-srikanth-reddy-3b2965127"
          >
            Linkedin
          </a>
        </div>
        <div>
          <a
            className={`Footer_as ${Footer_change}`}
            href="https://github.com/dev-csr"
          >
            Github
          </a>
        </div>
        <div>
          <a
            className={`Footer_as ${Footer_change}`}
            href="https://www.instagram.com/srikanthchilukuri01/"
          >
            Instagram
          </a>
        </div>
        <div>
          <a
            className={`Footer_as ${Footer_change}`}
            href="mailto:srikanthchilukuri01@gmail.com"
          >
            Email me
          </a>
        </div>
      </div>
      <div className="Footer_elements">
        <div className={`Resume ${Footer_change}`}>
          <a
            className={`Footer_as ${Footer_change}`}
            href="https://drive.google.com/file/d/1BS_DiyzoRmacvATWexvsDyoebU8inWBq/view?usp=drive_link"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
