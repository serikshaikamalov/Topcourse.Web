import React from "react";
import { Link } from "react-router-dom";
import "./logo.scss";

const Logo = () => (
  <div className="logo">
    <Link to="/">
      {/* <img src="/frontends.svg" alt="Logo | Frontends.kz" /> */}
      <span className="logo-label">TopCourse</span>
    </Link>
  </div>
);
export default Logo;
