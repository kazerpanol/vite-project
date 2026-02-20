import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const url = "https://api.github.com/users";

  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      {users?.map((user) => {
        const { id, login, avatar_url, html_url } = user;

        return (
          <li className="card" key={id}>
            <img className="avatar" src={avatar_url} />
            <div>
              <h5>{login}</h5>
              <a href={html_url}>Profile</a>
            </div>
          </li>
        );
      })}
    </section>
  );
}

export default App;
