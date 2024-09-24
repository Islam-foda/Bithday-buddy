import React from "react";
import cardsOfPeople from "../src/data.js";
import Cards from "../components/Cards.jsx";
import Clear from "../components/Clear";

export default function App() {

    const [data, setData] = React.useState(cardsOfPeople);
  const handleClear = () => {
    setData([]);
    console.log("data", data);
  };
  return (
    <main>
      <div className="App">
        <h1 className="title">{data.length ? data.length : "No"} Birthday Today</h1>
        <Cards data={data} />
        <Clear handleClear={handleClear} />
      </div>
    </main>
  );
}
