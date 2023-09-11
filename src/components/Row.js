function Row({ date, topics, weekNum, worksheet }) {
  return (
    <div className="rowContainer">
      <div className="small-col">Week {weekNum}</div>
      <div className="small-col">{date}</div>
      <div className="large-col">{topics}</div>
      <div className="large-col">{worksheet}</div>
      <br></br>
    </div>
  );
}

export default Row;
