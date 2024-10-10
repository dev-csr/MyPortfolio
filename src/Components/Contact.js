import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { motion } from "framer-motion";
import { fadein } from "../variants";
import linkedin from "./linkedin-svgrepo-com (1).svg";
import github from "./github-142-svgrepo-com.svg";
const Contact = ({ Contact_change }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pyzlrmb",
        "template_rmjil9k",
        e.target,
        "OWXL0xIrEMFJpbNyq"
      )
      .then(
        (result) => {
          alert("Message has been sent successfully!");
        },
        (error) => {
          alert("Failed to send message, please try again");
        }
      );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className={`contact_style ${Contact_change}`}>
      <motion.div
        variants={fadein("right", 0.2)}
        initial="hidden"
        exit="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="contact-info"
      >
        <h1>Let's create together</h1>
        {windowWidth < 791 ? (
          <div className="emoji-middle">
            Connect with me <br /> {Contact_change === "day" ? "👇🏾" : "👇🏻"}
          </div>
        ) : (
          <div className="emoji-right">
            Connect with me {Contact_change === "day" ? "👉🏾" : "👉🏻"}
          </div>
        )}
        <br />
        <br />
        <div className="social_profiles">
          <div className={`linkedin_profile ${Contact_change}`}>
            <div className="heading">
              Linkedin <br />
              <a href="http://www.linkedin.com/in/chilukuri-srikanth-reddy-3b2965127">
                <img className="icons" src={linkedin} alt="LinkedIn" />
                click me
              </a>
            </div>
          </div>
          <div className={`github_profile ${Contact_change}`}>
            <div>Github</div>
            <a href="https://github.com/dev-csr">
              <img className="icons" src={github} alt="Github" />
              click me
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadein("left", 0.2)}
        initial="hidden"
        exit="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="contact_form"
      >
        <h2>Contact Me</h2>
        <motion.form
          variants={fadein("left", 0.2)}
          initial="hidden"
          exit="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          onSubmit={sendEmail}
        >
          <div className="form_elements">
            <label>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <br />
          <div className="form_elements">
            <label>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <br />
          <div className="form_elements">
            <label>Message:</label>
            <textarea
              className="message_imp"
              type="textbox"
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <br />
          <input
            className={`button ${Contact_change}`}
            type="submit"
            value="Send Message"
          />
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
