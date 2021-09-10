import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const repondre = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = repondre.data;
        setUsers(data);
      } catch (e) {}
    };
    getUsers();
  }, []);
  return (
    <div className="App">
      <ul>
        {users.map((elt) => {
          return <li>{elt.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
