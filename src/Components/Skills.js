import "./Skills.css";
import { motion } from "framer-motion";
import { fadein } from "../variants";

const Skills = () => {
  const data = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
      title: "HTML",
      level: "80%",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/16183/16183567.png ",
      title: "CSS",
      level: "80%",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png ",
      title: "Javascript",
      level: "65%",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png ",
      title: "React",
      level: "65%",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png ",
      title: "Linux",
      level: "50%",
    },
    {
      image:
        "https://www.opsmx.com/blog/wp-content/uploads/2022/03/Standard-DevOps-CICD-1024x483.png",
      title: "CI/CD",
      level: "50%",
    },
    {
      image: "   https://cdn-icons-png.flaticon.com/512/919/919853.png ",
      title: "Docker",
      level: "50%",
    },
    {
      image: "   https://cdn-icons-png.flaticon.com/512/5968/5968282.png ",
      title: "Java",
      level: "50%",
    },
  ];
  return (
    <motion.div
      variants={fadein("up", 0.2)}
      initial="hidden"
      exit="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="skill_container"
    >
      <div className="skills_title">Skills</div>
      <div className="items">
        {data.map((item, key) => (
          <motion.div
            variants={fadein("left", 0.2)}
            initial="hidden"
            exit="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="items_container"
            id={key}
          >
            <div className="item_image">
              {" "}
              <img src={item.image} alt="" />
            </div>
            <div className="item_title">{item.title}</div>
            <br />
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${item.level}` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default Skills;
