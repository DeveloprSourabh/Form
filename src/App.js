import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const { value, name } = event.target;

    setFullName((preValue) => {
      // console.log(prevalue)
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "email") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          phone: preValue.phone,
        };
      } else if (name === "phone") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone: value,
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
          <p>{fullName.email}</p>
          <p>{fullName.phone}</p>

          <input
            onChange={inputEvent}
            name="fName"
            type="text"
            placeholder="Enter Your First Name"
            value={fullName.fname}
          />
          <br />
          <input
            onChange={inputEvent}
            name="lName"
            type="text"
            placeholder="Enter Your Last Name"
            value={fullName.lname}
          />
          <input
            onChange={inputEvent}
            name="email"
            type="email"
            placeholder="Enter Your Email Adress"
            value={fullName.email}
          />

          <input
            onChange={inputEvent}
            name="phone"
            type="number"
            placeholder="Enter Your Mobile Number"
            value={fullName.phone}
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
