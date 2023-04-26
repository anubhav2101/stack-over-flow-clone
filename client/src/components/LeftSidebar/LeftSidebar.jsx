import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.png";

const LeftSidebar = () => {
  return (
    <div className="Left-sidebar">
      <nav className="side-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "side-nav-links active" : "side-nav-links"
          }
        >
          <p>Home</p>
        </NavLink>

        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>

          <NavLink
            to="/Questions"
            className={({ isActive }) =>
              isActive ? "side-nav-links active" : "side-nav-links"
            }
          >
            <img src={Globe} alt="Globe-Icon" className="globe-img" />
            <p style={{ paddingLeft: "10px" }}>Questions</p>
          </NavLink>

          <NavLink
            to="/Tags"
            className={({ isActive }) =>
              isActive ? "side-nav-links active" : "side-nav-links"
            }
          >
            <p style={{ paddingLeft: "23px" }}>Tags</p>
          </NavLink>

          <NavLink
            to="/User"
            className={({ isActive }) =>
              isActive ? "side-nav-links active" : "side-nav-links"
            }
          >
            <p style={{ paddingLeft: "23px" }}>User</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
