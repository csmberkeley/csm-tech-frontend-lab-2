import React, { useState } from "react";
import get from "../utils/api";
import Navbar from "./Navbar";
import Table from "./Table";

function Resources() {
  const classes = get("/courses");
  const [id, setID] = useState(1);

  return (
    <div>
      <Navbar classes={classes} onNavBarClick={setID} />
      <Table id={id} />
    </div>
  );
}

export default Resources;
