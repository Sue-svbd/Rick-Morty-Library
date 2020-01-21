import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://rickandmortyapi.com/api/character/avatar/${props.monster.id}.jpeg`}
    ></img>
    <h2>{props.monster.name} </h2>

    <h3>Species: </h3>
    <p>{props.monster.species}</p>
    <h3>Location:</h3>
    <p> {props.monster.location.name}</p>
    <h3>Origin: </h3>
    <p>{props.monster.origin.name}</p>
  </div>
);
