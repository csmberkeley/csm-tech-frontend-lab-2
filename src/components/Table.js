import React from "react";
import get from "../utils/api";
import Row from "./Row";

function Table({ id }) {
  const data = get("/resources" + id);
  return (
    <div>
      <Row date="Date" topics="Topics" weekNum="" worksheet="Worksheet" />
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
