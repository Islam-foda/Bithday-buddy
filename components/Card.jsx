import React from "react";

export default function Card(props) {
  return (
  <>
   <div className="card">
        <img className="image" src={props.person.image} alt="" />
        <div className="info">
          <h3>{props.person.name}</h3>
          <p>{props.person.age}</p>
        </div>
      </div>
  </>)
}
