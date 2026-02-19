import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  const handleClear = () => {
    setPeople([]);
  };

  return (
    <div>
      <h1>Employee</h1>
      {<List people={people} />}
      {console.log(people)}
      <button onClick={handleClear}>Clear All</button>
    </div>
  );
}

export default App;
