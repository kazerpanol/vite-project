function ClassCard({ className }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h3>{className}</h3>
      <div>{console.log(className)}</div>
    </div>
  );
}

export default ClassCard;
