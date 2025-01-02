import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHome } from "@fortawesome/free-solid-svg-icons"; // Import icons
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");

  const isCreatePostPage = path[1] === "create-post";

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          SKR-AI
        </a>
        <div className="d-flex justify-content-between w-100">
              <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
            <div className="d-flex justify-content-between w-100">
              <li className="nav-item">
                <button
                  className="btn btn-primary d-flex align-items-center"
                  onClick={() =>
                    navigate(isCreatePostPage ? "/" : "/create-post")
                  }
                >
                  <FontAwesomeIcon
                    icon={isCreatePostPage ? faHome : faPlus}
                    className="me-2"
                  />
                  {isCreatePostPage ? "Explore" : "Generate Post"}
                </button>
              </li>
            </div>
          </ul>
        </div> </div>
      
      </div>
    </nav>
  );
}
