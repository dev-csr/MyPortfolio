/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page_Functionalities from "./Page_Functionalities";
import Header from "./Header";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Page_Functionalities />
              </>
            }
          />
          <Route
            path="/About"
            element={
              <>
                <Page_Functionalities />
              </>
            }
          />
          <Route
            path="/Education"
            element={
              <>
                <Header />
              </>
            }
          />
          <Route
            path="/Projects"
            element={
              <>
                <Header />
              </>
            }
          />
          <Route
            path="/Skills"
            element={
              <>
                <Header />
              </>
            }
          />
          <Route
            path="/Contact"
            element={
              <>
                <Header />
              </>
            }
          />
          <Route
            path="/Resume"
            element={
              <>
                <Header />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
