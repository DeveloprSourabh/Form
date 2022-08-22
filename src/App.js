import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      // console.log(prevalue)
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
        };
      }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted 🥳");
  };

  return (
    <>
      <from>
        <div>
          <h1>
            Hello {fullName.fname} {fullName.lname}
          </h1>
          <input
            onChange={inputEvent}
            name="fName"
            type="text"
            placeholder="Enter Your Name"
            // value={fullName.fname}
          />
          <br />
          <input
            onChange={inputEvent}
            name="lName"
            type="text"
            placeholder="Enter Your Lst Name"
            // value={fullName.lName}
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
