import React from "react";
import "./App.css";

import MyHeader from "./MyHeader";

function App() {
  let name = "이하영";

  return (
    <div className="App">
      <MyHeader />
      <h2>안녕 리액트 {name}</h2>
      <b id="bold_text">React.js</b>
    </div>
  );
}

export default App;
