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
    <header className=" -header">
      <div
        className="LI-profile-badge"
        data-version="v1"
        data-size="medium"
        data-locale="en_US"
        data-type="vertical"
        data-theme="dark"
        data-vanity="danieljcampbell1"
      ></div>
    </header>
  );
};
