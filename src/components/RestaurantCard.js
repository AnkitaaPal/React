import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRatingString} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla?.deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
