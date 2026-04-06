import { useState, useEffect } from "react";
const RestaurantMenu = () => {
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9566294&lng=77.70468230000002&restaurantId=10866&catalog_qa=undefined&submitAction=ENTER",
    );
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="menu">
      <h1>Name of Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>French Fries</li>
        <li>Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
