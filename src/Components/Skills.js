import "./Skills.css";
import { motion } from "framer-motion";
import { fadein } from "../variants";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = ({ Skills_change }) => {
  const data = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
      title: "HTML",
      level: 80,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/16183/16183567.png",
      title: "CSS",
      level: 80,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      title: "Javascript",
      level: 65,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
      title: "React",
      level: 65,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png",
      title: "Linux",
      level: 50,
    },
    {
      image:
        "https://www.opsmx.com/blog/wp-content/uploads/2022/03/Standard-DevOps-CICD-1024x483.png",
      title: "CI/CD",
      level: 50,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
      title: "Docker",
      level: 50,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
      title: "Java",
      level: 50,
    },
  ];
  const data1 = [
    [
      { name: "productivity", level: 80 },
      { name: "Time management", level: 80 },
      { name: "Problem solving", level: 80 },
    ],
  ];

  return (
    <motion.div
      id="skills"
      variants={fadein("up", 0.2)}
      initial="hidden"
      exit="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className={`skill_container ${Skills_change}`}
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
            key={key}
          >
            <div className="item_image">
              <img
                className={`${Skills_change}`}
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="item_title">{item.title}</div>
            <br />
            <br />
            <motion.div
              variants={fadein("right", 0.2)}
              initial="hidden"
              exit="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={`progress-bar ${Skills_change}`}
            >
              {setTimeout(() => {}, 3000) && (
                <div
                  className={`progress ${Skills_change}`}
                  style={{
                    animation: `progressFill ${
                      item.level / 20
                    }s ease-in forwards`,
                    width: `${item.level}%`,
                  }}
                ></div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.div
        variants={fadein("right", 0.2)}
        initial="hidden"
        exit="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="skill_2"
      >
        {data1.map((row, rowIndex) => (
          <div className="softskills" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <div className="softskills-items" key={columnIndex}>
                <div className={`ss-item1 ${Skills_change}`}>{item.name}</div>
                <div className="ss-item2">
                  <CircularProgressbar
                    value={item.level}
                    text={`${item.level}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "butt",
                      textSize: "16px",
                      pathTransitionDuration: 0.5,
                      pathColor: `${
                        Skills_change === "day"
                          ? `rgba(238, 105, 10, ${item.level / 100})`
                          : `rgba(10, 30, 89, ${item.level / 100})`
                      }`,
                      textColor: `${
                        Skills_change === "day" ? `black` : `white`
                      }`,
                      trailColor: `${
                        Skills_change === "day" ? `white` : `rgb(54, 78, 117)`
                      }`,
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </div>
            ))}{" "}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
