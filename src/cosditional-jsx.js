import React from "react";
import "./styles.css";
var userName = "mukesh";
var userLogedIn = false;
export default function App() {
  function getUserMessage() {
    if (userLogedIn) {
      return userName;
    } else {
      return "user";
    }
  }
  return (
    <div className="App">
      <h1>Welcome {getUserMessage()}</h1>
    </div>
  );
}
