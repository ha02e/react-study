import React from "react";
import Counter from "./Counter";
//import "./App.css";

import MyHeader from "./MyHeader";

function App() {
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };

  return (
    <div>
      <MyHeader />
      <Counter {...counterProps} />
    </div>
  );
}

export default App;
