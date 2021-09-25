import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "smile",
  "😂": "laughing",
  "😥": "sad",
  "😈": "angary",
  "❤": "love"
};

var emojis = Object.keys(emojiDictionary);
console.log(emojis);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    // console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    console.log(meaning);

    if (meaning === undefined) {
      meaning = "We Don't have a Meaning our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Output</h1>
      <input onChange={emojiInputHandler} />
      <div id="ouput">{meaning}</div>
      <h3>Emoji We know </h3>
      {emojis.map((item) => {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            key={item}
            style={{ cursor: "pointer", padding: "1rem", fontSize: "1.2rem" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
