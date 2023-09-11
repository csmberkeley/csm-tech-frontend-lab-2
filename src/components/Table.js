import React from "react";
import get from "../utils/api";
import Row from "./Row";

function Table({ id }) {
  const data = get("/resources" + id);
  return (
    <div className="listContainer">
      <div className="resourceWrapperHeader">
          <div className="small-col">Week</div>
          <div className="small-col">Date</div>
          <div className="large-col">Topics</div>
          <div className="large-col">Worksheet and Solutions</div>
      </div>
      {data.map((x) => {
        return (
          <Row
            key={x.id}
            date={x.date}
            topics={x.topics}
            weekNum={x.weekNum}
            worksheet={x.worksheet}
          />
        );
      })}
    </div>
  );
}

export default Table;
