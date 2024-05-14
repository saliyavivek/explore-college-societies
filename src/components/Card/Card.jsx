import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <>
      <div className="card">
        <div className="card-title">
          <h1>{item.title}</h1>
          <p className="tagline">{item.tagline}</p>
        </div>
        <img src={`images/${item.coverImg}`} alt="image" />
        <div className="card-bottom">
          <p className="description">{item.description}</p>
          {item.facebook != "" && (
            <>
              See more at
              <a href={`${item.facebook}`} target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </>
          )}
          {item.instagram != "" && (
            <a href={`${item.instagram}`} target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          )}
        </div>
        <hr />
      </div>
    </>
  );
};

export default Card;
