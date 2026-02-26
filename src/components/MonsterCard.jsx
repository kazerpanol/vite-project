import React from "react";

function MonsterCard({ monsterData }) {
  const { monsterName } = monsterData;
  return (
    <div>
      <h1>{monsterName}</h1>
    </div>
  );
}

export default MonsterCard;
