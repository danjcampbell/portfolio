import React, { useEffect } from "react";

export const Resume = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    document.body.appendChild(script);
    console.log("Loaded JS");
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="social">
      <div
        className="LI-profile-badge"
        data-version="v1"
        data-size="large"
        data-locale="en_US"
        data-type="vertical"
        data-theme="dark"
        data-vanity="danieljcampbell1"
      >
        <a
          class="LI-simple-link"
          href="https://www.linkedin.com/in/danieljcampbell1?trk=profile-badge"
        >
          Daniel Campbell
        </a>
      </div>
    <input type="file">upload</input>
    </div>
  );
};
