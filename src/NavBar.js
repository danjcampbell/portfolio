import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faHashtag,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="navBar">
      <Link to="#" className="menu-bars" onClick={() => setClicked(!clicked)}>
        <FontAwesomeIcon icon={faBars} />
      </Link>
      <nav className={clicked ? "navigation active" : "navigation"}>
        <ul className="nav-menu">
          <Link to="#" onClick={() => setClicked(false)}>
            <li className="navLink">
              <FontAwesomeIcon style={{ float: "left" }} icon={faTimes} />
            </li>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li className="navLink">
              <FontAwesomeIcon style={{ float: "left" }} icon={faHome} /> Home
            </li>
          </Link>
          <Link to={"/resume"} style={{ textDecoration: "none" }}>
            <li className="navLink">
              <FontAwesomeIcon style={{ float: "left" }} icon={faHashtag} />
              <span>Social Media</span>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
