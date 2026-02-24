import { useEffect, useState } from "react";
import { getClasses } from "../api/classService";
import ClassCard from "../components/ClassCard";

function Classes() {
  const [classes, setClass] = useState([]);
  useEffect(() => {
    const fetchClass = async () => {
      try {
        const data = await getClasses();
        setClass(data);
      } catch (error) {}
    };
    fetchClass();
  }, []);

  return (
    <section className="class-container">
      {classes.map((c) => {
        return <ClassCard key={c.id} classData={c} />;
      })}
    </section>
  );
}

export default Classes;
