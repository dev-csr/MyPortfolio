import "./App.css";

const App = ({ Current }) => {
  return (
    <div className="App">
      <div className="video_contain">
        <video src={Current} className="video" autoPlay loop muted></video>
        <div className="shadow"></div>
        <div className="overlay_name">
          <h1>Chilukuri Srikanth Reddy</h1>
          <h3>Full Stack Developer</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
