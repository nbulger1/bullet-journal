import React from "react";
import { Link } from "react-router-dom";

function HomeOptions() {
  return (
    <div>
      <Link to="/howto">How To</Link>
      <Link to="/myjournal">My Journal</Link>
      <Link to="/inspiration">Inspiration</Link>
    </div>
  );
}

export default HomeOptions;
