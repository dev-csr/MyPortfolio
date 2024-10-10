// Page_Functionalities.js
import { useState } from "react";
import Header from "./Header";
import Title from "./Title";
import Aboutme from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const Page_Functionalities = () => {
  const [Current, setCurrent] = useState(
    "https://cdn.pixabay.com/video/2022/10/19/135658-764361528_large.mp4"
  );

  const firstUrl =
    "https://cdn.pixabay.com/video/2022/10/19/135658-764361528_large.mp4";
  const secondUrl =
    "https://cdn.pixabay.com/video/2020/01/25/31569-387675206_large.mp4";

  const handleClick = () => {
    setCurrent((prevUrl) => (prevUrl === firstUrl ? secondUrl : firstUrl));
  };

  const dayNightToggle = (
    <div className="day_night" onClick={handleClick}>
      {Current === firstUrl ? (
        <img src="/brightness.png" alt="sun" className="sun" />
      ) : (
        <img src="/moon.png" alt="moon" className="moon" />
      )}
    </div>
  );

  return (
    <div>
      <Header
        Change={Current === firstUrl ? "day" : "night"}
        toggle={dayNightToggle}
      />
      <Title Current={Current} />
      <Aboutme About_change={Current === firstUrl ? "day" : "night"} />
      <Skills Skills_change={Current === firstUrl ? "day" : "night"} />
      <Contact Contact_change={Current === firstUrl ? "day" : "night"} />
      <Footer Footer_change={Current === firstUrl ? "day" : "night"} />
    </div>
  );
};

export default Page_Functionalities;
