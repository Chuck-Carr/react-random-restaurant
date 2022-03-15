import React from "react";

const Input = () => {
    const text = (e) => {
        console.log(e.target.value)
    }
  const inputHandler = () => {
    console.log(text)
  }
  return (
    <div>
      <form onSubmit={inputHandler} >
        <input type="text" onChange={text}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;
