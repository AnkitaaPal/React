import React from "react";
import ReactDOM from "react-dom/client";
import { resData } from "../utils/resData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resData.map((resObj) => {
          return <RestaurantCard key={resObj.info.id} resData={resObj.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
