import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const styles = {
  listFormat: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  listStyle: {
    listStyleType: "none",
  },
  linkStyle: {
    textDecoration: "none",
    color: "white",
    fontFamily: "cursive",
  },
};

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul style={styles.listFormat}>
          <li style={styles.listStyle}>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()} style={styles.linkStyle}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul style={styles.listFormat}>
          <li style={styles.listStyle}>
            <Link to="/signup" style={styles.linkStyle}>
              Signup
            </Link>
          </li>
          <li style={styles.listStyle}>
            <Link to="/login" style={styles.linkStyle}>
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/" style={styles.linkStyle}>
          My Bullet Journal
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
