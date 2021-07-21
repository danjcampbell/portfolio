import dan from "./dan1.JPG";
import "./App.css";
import { Resume } from "./Resume.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from "./NavBar.js";
import { ThreeDModel } from "./ThreeDModel";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route
          exact={true}
          path="/"
          render={() => {
            return (
              <>
                <img className="homeImg" alt="homeImage" src={dan}></img>
                <h1>Daniel J. Campbell's Professional Portfolio</h1>
              </>
            );
          }}
        />
        <Route path="/resume" render={() => <Resume />} />
        <Route path="/3dModel" render={() => <ThreeDModel />} />
      </Router>
    </div>
  );
}

export default App;
