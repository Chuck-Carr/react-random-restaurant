import "./App.css";
import React, { useState, useEffect } from "react";
import List from "./components/List";
import axios from "axios";
import Input from "./components/Input";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [input, setInput] = useState("");
  const [coords, setCoords] = useState("");

  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords = `${latitude},${longitude},5000`;
    setCoords(coords);
  });

  const queryToApp = (inputData) => {
    console.log(inputData);
    setInput(inputData);
  };

  const url = "https://dev.virtualearth.net/REST/v1/LocalSearch/";
  useEffect(() => {
    if (input) {
      axios
        .get(url, {
          params: {
            query: input,
            userLocation: coords,
            maxResults: 1,
            key:
              "AhT8eNDICOS7i5M8bcAYgoDroJXx0rZ4tc1rNdOCA64wPzH1HkRVnx3eWTukcG-4",
          },
        })
        .then((res) => {
          const rests = res.data.resourceSets[0].resources;
          setRestaurants(rests);
        });
    }
  }, [input]);

  return (
    <div className="App">
      <Input queryToApp={queryToApp} />
      <List restaurants={restaurants} />
    </div>
  );
}

export default App;

// "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=pizza&userLocation=39.1819522,-84.2068014,5000&key=AhT8eNDICOS7i5M8bcAYgoDroJXx0rZ4tc1rNdOCA64wPzH1HkRVnx3eWTukcG-4"
