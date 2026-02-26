import "../styles/ClassCard.css";

function ClassCard({ classData }) {
  const { id, className, classExercises, classImage, description } = classData;
  return (
    <div className="class-card">
      <img src={classImage} alt="logo" className="class-icon" />
      <h5 className="class-name">{className}</h5>
      <p>{description}</p>
      <ul>
        {classExercises.map((e, i) => {
          return <li key={i}> {e}</li>;
        })}
      </ul>
    </div>
  );
}

export default ClassCard;
