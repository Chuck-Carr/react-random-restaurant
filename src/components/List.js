import React from "react";
import "./List.css"

const List = ({ restaurants }) => {
  const randomRestaurant =
    restaurants[Math.floor(Math.random() * restaurants.length)];

  return (
    <div className="list">
      {randomRestaurant && (
        <div>
          <a href={randomRestaurant.Website}>{randomRestaurant.name}</a>
          <br />
          {randomRestaurant.PhoneNumber}
          <br />
          {randomRestaurant.Address.formattedAddress}
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

export default List;
