import React from "react";
import "./CardOne.css";

const CardOne = ({ item }) => {
  return (
    <div className="card-one">
      <img src={`images/${item.coverImg}`} alt="image" />
      <div className="card-one-details">
        <h1 className="card-one-title">
          <a href={item.facebook ? item.facebook : ""} target="_blank">
            {item.title}
          </a>
        </h1>
        <p className="card-one-tagline">{item.tagline}</p>
        <p className="card-one-description">{item.description}</p>
        <div className="card-one-links">
          {item.facebook != "" && (
            <>
              <span>See more at</span>
              <a href={item.facebook} target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </>
          )}
          {item.instagram != "" && (
            <a href={item.instagram} target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardOne;
