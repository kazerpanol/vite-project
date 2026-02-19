import React from "react";

function Person({ id, name, age, image }) {
  return (
    <div>
      <img src={image} alt={name} width="120" />
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

export default Person;
