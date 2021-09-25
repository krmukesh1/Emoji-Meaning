import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "smile",
  "😂": "laughing",
  "😥": "sad",
  "😈": "angary",
  "❤": "love"
};
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
  return (
    <div className="App">
      <h1>Emoji Output</h1>
      <input onChange={emojiInputHandler} />
      <div id="ouput">{meaning}</div>
    </div>
  );
}
