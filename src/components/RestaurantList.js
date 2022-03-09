import React from "react";
import axios from "axios";

// let key = "AhT8eNDICOS7i5M8bcAYgoDroJXx0rZ4tc1rNdOCA64wPzH1HkRVnx3eWTukcG-4";
// let location = "39.1819522,-84.2068014,5000";
// let bingUrl = (query, location, key) =>
//   `https://dev.virtualearth.net/REST/v1/LocalSearch/?query=${query}&userLocation=${location}&key=${key}`;

// let url = bingUrl("pizza", location, key);
// let url =
//   "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=pizza&userLocation=39.1819522,-84.2068014,5000&key=AhT8eNDICOS7i5M8bcAYgoDroJXx0rZ4tc1rNdOCA64wPzH1HkRVnx3eWTukcG-4";

export default class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalRestaurants: [] };
  }
  componentDidMount() {
    axios
      .get(
        "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=pizza&userLocation=39.1819522,-84.2068014,5000&key=AhT8eNDICOS7i5M8bcAYgoDroJXx0rZ4tc1rNdOCA64wPzH1HkRVnx3eWTukcG-4"
      )
      .then((res) => {
        let restaurants = res.data.resourceSets[0].resources;
        this.setState({ totalRestaurants: restaurants });
      });
  }

  render() {
    return (
      <div id="restList">
        {this.state.totalRestaurants.map((restaurant) => (
          <h5 key={restaurant.point}>
            <a href={restaurant.Website}>{restaurant.name}</a> --- {" "}
            {restaurant.PhoneNumber}<br/>{restaurant.Address.formattedAddress}
          </h5>
        ))}
      </div>
    );
  }
}
