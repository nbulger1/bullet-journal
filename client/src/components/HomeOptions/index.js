import React from "react";
import { Link } from "react-router-dom";
import journalImage from "/Users/natalie/Desktop/my-bullet-journal/bullet-journal-website/client/src/images/journal_photo.jpg";

const styles = {
  bubbleContainer: {
    backgroundImage: `url(${journalImage})`,
    overflow: "hidden",
    backgroundSize: "cover",
    minHeight: "100vh",
    position: "fixed",
    minWidth: "100vw",
    left: "0",
  },

  bubbleFormat: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  },

  linkBubbles: {
    backgroundColor: "var(--deeppurple)",
    textDecoration: "none",
    color: "black",
    borderRadius: "100%",
    height: "35%",
    width: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "10px 10px 10px",
  },

  linkStyle: {
    textDecoration: "none",
    color: "white",
    fontFamily: "cursive",
    fontSize: "200%",
  },
};

function HomeOptions() {
  return (
    <div style={styles.bubbleContainer}>
      <div style={styles.bubbleFormat}>
        <div style={styles.linkBubbles}>
          <Link to="/howto" style={styles.linkStyle}>
            How To
          </Link>
        </div>
        <div style={styles.linkBubbles}>
          <Link to="/myjournal" style={styles.linkStyle}>
            My Journal
          </Link>
        </div>
        <div style={styles.linkBubbles}>
          <Link to="/inspiration" style={styles.linkStyle}>
            Inspiration
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeOptions;
