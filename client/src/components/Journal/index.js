import React from "react";
import HTMLFlipBook from "react-pageflip";
import YearCalendar from "../YearCalendar";

const styles = {
  pageStyle: {
    border: "black solid 1px",
  },

  bookContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

function MyJournal(props) {
  return (
    <div>
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Collapsed content</h4>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
      <div style={styles.bookContainer}>
        <HTMLFlipBook
          width={500}
          height={700}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
        >
          <div className="demoPage">
            <YearCalendar />
          </div>
          <div className="demoPage">Page 2</div>
          <div className="demoPage">Page 3</div>
          <div className="demoPage">Page 4</div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default MyJournal;
