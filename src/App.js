import "./App.css";
import React, { useState, useEffect } from "react";
import List from "./components/List";
import axios from "axios";
import Input from './components/Input'

function App() {
  const [restaurants, setRestaurants] = useState([]);
  // const [input, setInput] = useState();

  const url =
    "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=pizza&userLocation=39.1819522,-84.2068014,5000&key=AhT8eNDICOS7i5M8bcAYgoDroJXx0rZ4tc1rNdOCA64wPzH1HkRVnx3eWTukcG-4";
  useEffect(() => {
    axios.get(url).then((res) => {
      const rests = res.data.resourceSets[0].resources;
      setRestaurants(rests);
    });
  }, []);
  return (
    <div className="App">
      <Input />
      <List restaurants={restaurants} />
    </div>
  );
}

export default App;
