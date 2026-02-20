import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dialog from "./Dialog";

function App() {
  const [user, setUser] = useState();

  const login = () => {
    setUser({ name: "Kazer pogi" });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          Welcome {user.name}
          <button onClick={logout}>Log out</button>
        </div>
      ) : (
        <div>
          <button onClick={login}>login</button>
        </div>
      )}
    </div>
  );
}

export default App;
