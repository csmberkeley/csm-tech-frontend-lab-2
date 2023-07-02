function Row({ date, topics, weekNum, worksheet }) {
  return (
    <div>
      <li>Week {weekNum}</li>
      <li>{date}</li>
      <li>{topics}</li>
      <li>{worksheet}</li>
      <br></br>
    </div>
  );
}

export default Row;
