import "../styles/ClassCard.css";

function ClassCard({ classData }) {
  const { id, className, classExercises } = classData;
  return (
    <div className="class-card">
      <div className="class-icon"></div>
      <h5 className="class-name">{className}</h5>
      {console.log(className)}
      <ul>
        {classExercises.map((e, i) => {
          return <li key={i}> {e}</li>;
        })}
      </ul>
    </div>
  );
}

export default ClassCard;
