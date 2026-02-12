import React from "react";

function Item({ id, name, key, remove }) {
  return (
    <>
      <h1>{name}</h1>
      {console.log(name)}
      <button onClick={() => remove(id)}>Remove</button>
    </>
  );
}

export default Item;
