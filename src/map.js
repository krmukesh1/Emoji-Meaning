import React from "react";
import "./styles.css";

const products = ["milk", "egg", "bread", "flowers"];
export default function App() {
  return (
    <div className="App">
      <h1>Print my ShoppingList</h1>
      <ul>
        {products.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
