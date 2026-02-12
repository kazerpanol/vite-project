import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { itemsList } from "./data.jsx";
import Item from "./Item.jsx";

function App() {
  const [data, setData] = useState(itemsList);

  const removeItem = (id) => {
    setData((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearItems = () => {
    setData([]);
  };

  return (
    <>
      {data.map((item) => (
        <Item key={item.id} id={item.id} name={item.name} remove={removeItem} />
      ))}
      <button onClick={clearItems}>Clear</button>
    </>
  );
}

export default App;
