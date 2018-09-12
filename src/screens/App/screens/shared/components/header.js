import React from "react";
import { Link } from "react-router";
import BeforeLogin from "./mainNav";
import AfterLogin from "./AfterLogin.js";

var MyHeader = React.createClass({
  getInitialState: function() {
    return { email: "" };
  },
  componentDidMount: function() {},
  componentWillMount: function() {},
  componentWillUnmount: function() {},
  // mobile menu

  render: function() {
    var email = localStorage.getItem("email");
    var user = localStorage.getItem("user");
    return (
      <div className="header-container">
        <Link to="/">
          <img src="images/talogo.png" alt="Techaspect logo" title="logo img" />
          <span className="heading">
            Class<span className="highlight">ifieds</span>
          </span>
        </Link>
        <button id="mobile-menu-button" className="navbar-toggle" type="button">
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        {email ? <AfterLogin name={user} /> : <BeforeLogin />}
      </div>
    );
  }
});

export default MyHeader;
