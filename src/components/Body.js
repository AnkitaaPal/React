import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [resListToDisplay, setResListToDisplay] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isTopRatedRestaurants, setIsTopRatedRestaurants] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setResListToDisplay(resList);
  }, [resList]);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResList(restaurants || []);
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = resList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setResListToDisplay(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            isTopRatedRestaurants
              ? setResListToDisplay(resList)
              : setResListToDisplay(
                  resList.filter((res) => res.info.avgRating > 4.2),
                );

            setIsTopRatedRestaurants(!isTopRatedRestaurants);
          }}
        >
          {isTopRatedRestaurants
            ? "Show All Restaurants"
            : "Top Rated Restaurants"}
        </button>
      </div>
      <div className="res-container">
        {resListToDisplay?.map((resObj) => {
          return <RestaurantCard key={resObj.info.id} resData={resObj.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
