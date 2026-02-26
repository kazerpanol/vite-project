import { useEffect, useState } from "react";
import { getClasses, getMonsters } from "../api/classService";
import ClassCard from "../components/ClassCard";
import { Backdrop, CircularProgress } from "@mui/material";
import Monster from "./Monster";
import AddMonster from "./AddMonster";

function Classes() {
  const [classes, setClass] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClass = async () => {
      try {
        const data = await getClasses();
        console.log(data);
        setClass(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchClass();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <div>
          <section className="class-container">
            {classes.map((c) => {
              return <ClassCard key={c.id} classData={c} />;
            })}
          </section>
          <Monster />
          <AddMonster />
        </div>
      )}
    </div>
  );
}

export default Classes;
