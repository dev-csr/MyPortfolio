import "./About_me.css";
const Aboutme = () => {
  return (
    <div className="about">
      <div className="about_text">
        <h2>About Me</h2>
      </div>
      <div className="about_">
        <div className="introduction">Introduction:</div>
        <p className="about_para">
          Hey! I'm Chilukuri Srikanth Reddy, a frontend developer and I like to
          design and create. I love painting and drawing. Let's connect, meet
          and create something new together.
        </p>
      </div>
      <div className="about_">
        <div className="job">Job:</div>
        <p className="about_para">
          Currently working in Tata Consultancy services as a Linux system
          admin. I would like to pursue and thrive as a frontend developer.
        </p>
      </div>
      <div className="about_">
        <div className="skills">Skills:</div>
        <p className="about_para">
          Strong knowledge in HTML, CSS, Javascript, Diverse frameworks and
          tools, Devops(CI, CD, Docker), Linux.
        </p>
      </div>
      <div className="about_">
        <div className="goals">Goal:</div>
        <p className="about_para">
          My goal is to pursue and strive to improve myself and find happiness
          in life. That is the reason I choose frontend development. It is one
          of many professions which enable for me to create beautiful and
          creative websites.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
