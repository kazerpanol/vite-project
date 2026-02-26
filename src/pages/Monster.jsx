import React from "react";
import { useEffect, useState } from "react";
import { getMonsters } from "../api/classService";
import MonsterCard from "../components/MonsterCard";
function Monster() {
  const [monsters, setMonster] = useState([]);

  <div>
    {useEffect(() => {
      const fetchMonster = async () => {
        const data = await getMonsters();
        setMonster(data);
        console.log(data);
      };
      fetchMonster();
    }, [])}
  </div>;

  return (
    <>
      {monsters.map((m) => {
        return <MonsterCard monsterData={m} key={m.id} />;
      })}
      ;
    </>
  );
}

export default Monster;
