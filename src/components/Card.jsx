import React from "react";
import { content } from "../constants";

const Card = () => {
  return (
    <div className="container">
      <div className={`card`}>
        {content.map((content) => (
          <div
            key={content.id}
            className={`content ${
              content.id === 1 ? "satu" : content.id === 2 ? "dua" : "tiga"
            }`}
          >
            <img src={content.img} alt="cars" />
            <div className="text">
              <h1>{content.title}</h1>
              <p>{content.description}</p>
            </div>
            <div className="button">
              <button>Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
