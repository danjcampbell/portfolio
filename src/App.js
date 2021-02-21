import dan from "./dan1.JPG";
import "./App.css";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <header className=" -header">
        <div
          className="LI-profile-badge"
          data-version="v1"
          data-size="medium"
          data-locale="en_US"
          data-type="vertical"
          data-theme="dark"
          data-vanity="danieljcampbell1"
        >
          <a
            className="LI-simple-link"
            href="https://www.linkedin.com/in/danieljcampbell1?trk=profile-badge"
          >
            Daniel Campbell
          </a>
        </div>
        <p className="paragraph">DanJCampbell.com is under Construction.</p>
      </header>
    </div>
  );
}

export default App;
