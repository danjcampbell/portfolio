import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(!clicked);
  };

  return (
    <div className="navBarItems">
      <h1 className="navToggler" onClick={(e) => handleClick(e)}>
        <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
      </h1>
      <ul className={clicked ? "navigation-active" : "navigation-inactive"}>
        <Link to={"/"}>
          <li className="navLink">Home </li>
        </Link>
        <Link to={"/resume"}>
          {" "}
          <li className="navLink">Social Media </li>
        </Link>
      </ul>
    </div>
  );
};
