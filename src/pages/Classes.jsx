import { useEffect, useState } from "react";
import { getClasses } from "../api/classService";

function Classes() {
  const [classes, setClass] = useState([]);
  useEffect(() => {
    const fetchClass = async () => {
      try {
        const data = await getClasses();
        const res = data.json();
        setClass(res);
      } catch (error) {}
    };
    fetchClass();
  }, []);

  return <h1> List of Class</h1>;
}

export default Classes;
