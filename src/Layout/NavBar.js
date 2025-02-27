import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Simulated Training Solutions 3D Simulators
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="btn btn-outline-light" to="/addClient">
            {" "}
            Add a site{" "}
          </Link>
          <Link className="btn btn-outline-light mx-2" to="/">
            View Simulators
          </Link>
        </div>
      </nav>
    </div>
  );
}
