import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = () => {
  return (
    <>
      <div className="cards">
        <div className="item">
          <div className="image">
            <img src="" alt="" />
            <i className="fas fa-map-market-alt"></i>
            <label></label>
          </div>

          <div className="rate">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="details">
            <h2></h2>
            <div className="boarder"></div>
            <h3></h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
