import "../styles/ClassCard.css";

function ClassCard({ classData }) {
  const { id, className, classExercises } = classData;
  return (
    <div className="class-card">
      <h5 className="class-name">{className}</h5>
    </div>
  );
}

export default ClassCard;
