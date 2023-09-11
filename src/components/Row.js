function Row({ date, topics, weekNum, worksheet }) {
  return (
    <div className="rowContainer">
      <div>Week {weekNum}</div>
      <div>{date}</div>
      <div>{topics}</div>
      <div>{worksheet}</div>
      <br></br>
    </div>
  );
}

export default Row;
