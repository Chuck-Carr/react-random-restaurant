import React, { useState } from "react";
import "./Input.css"

const Input = ({ queryToApp }) => {
  const [userQuery, setUserQuery] = useState("");
  const queryChangeHandler = (event) => {
    setUserQuery(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (userQuery.trim() === "") {
      alert("Please enter a food category.");
    } else {
      setUserQuery(userQuery);
      queryToApp(userQuery);
      setUserQuery("");
    }
  };
  return (
    <div className="input">
      <form onSubmit={submitHandler}>
        <input
          className="input-text"
          type="text"
          name="query"
          placeholder="Pizza..."
          value={userQuery}
          onChange={queryChangeHandler}
        ></input>
        <button className="input-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;
