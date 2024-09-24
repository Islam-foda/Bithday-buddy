import React from "react";
import Card from "./Card.jsx";
export default function Cards(props) {
  const cards = props.data.map((person, index) => {
    return (
     <Card key={index + 1} person={person} />
    );
  });
 
  return (
    <>
      {cards}
    </>
  );
}
