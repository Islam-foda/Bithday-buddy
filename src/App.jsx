import React from "react";
import data from "../src/data.js";

import Cards from "../components/Cards.jsx";
import Clear from "../components/Clear";

export default function App() {
  return (
    <main>
      <div className="App">
        <h1 className="title">{data.length} Birthday Today</h1>
        <Cards data={data} />
        <Clear />
      </div>
    </main>
  );
}
