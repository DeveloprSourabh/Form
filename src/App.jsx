import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");

  const [lastName, setLastName] = useState();

  const [fullName, setFullName] = useState("");

  const [lastNameNew, setLastNameNew] = useState("");

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    setFullName(name);
    event.preventDefault();
    setLastNameNew(lastName);
  };

  const inputEventTwo = (event) => {
    setLastName(event.target.value);
  };

  return (
    <>
      <from>
        <div>
          <h1>Hello {fullName} {lastNameNew}</h1>
          <input
            onChange={inputEvent}
            type="text"
            placeholder="Enter Your Name"
            value={name}
          />
          <br />
          <input
            onChange={inputEventTwo}
            type="text"
            placeholder="Enter Your Lst Name"
            value={lastName}
          />

          <button type="submit" onClick={onSubmit}>
            Click Me
          </button>
        </div>
      </from>
    </>
  );
};

export default App;
