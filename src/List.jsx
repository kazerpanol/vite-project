import React from "react";
import Person from "./Person";

export default function List({ people }) {
  return (
    <>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </>
  );
}
