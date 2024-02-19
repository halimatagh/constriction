import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, name, id }) {
  return (
    <div className="menuItem">
      <Link to={`/menu/${id}`}>
        <div style={{ backgroundImage: `url(${image})` }}> </div>
      </Link>
      <h1> {name} </h1>
    </div>
  );
}

export default MenuItem;
