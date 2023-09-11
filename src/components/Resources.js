import React, { useState } from "react";
import get from "../utils/api";
import Navbar from "./Navbar";
import Table from "./Table";
import '../styles/resources.css'

function Resources() {
  const classes = get("/courses");
  const [id, setID] = useState(1);

  return (
    <div className="resourceContainer">
      <Navbar classes={classes} onNavBarClick={setID} id={id} />
      <Table id={id} />
    </div>
  );
}

export default Resources;
