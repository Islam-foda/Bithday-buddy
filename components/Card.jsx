import React from "react";
import data from "../src/data.js";
export default function Card() {
  console.log(data);
  const cards = data.map((person) => {
    return (
      <div className="card">
        <img className="image" src={person.photo} alt="" />
        <div className="info">
          <h3>{person.name}</h3>
          <p>{person.birthday}</p>
        </div>
      </div>
    );
  });
  return <>{cards}</>;
}
