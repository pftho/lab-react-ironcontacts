import "./App.css";
import allContacts from "./contacts.json";
import { useState } from "react";

function App() {
  const contacts = allContacts.slice(0, 5);
  const [celebs, setCelebs] = useState(contacts);

  const handleAddRandom = () => {
    const restOfCelebs = allContacts.slice(5);
    const randomIndex = Math.floor(Math.random() * restOfCelebs.length + 1);
    const newcontact = restOfCelebs[randomIndex];
    setCelebs((contacts) => [...contacts, newcontact]);
  };

  return (
    <div className="App">
      <h1>IronContact</h1>
      <button onClick={handleAddRandom}>Add Random Contact</button>
      <button onClick={handleAddRandom}>Sort by Popularity</button>
      <button onClick={handleAddRandom}>Sort by Name</button>

      <table>
        <thead>
          <tr>
            <th> Picture</th>
            <th> Name</th>
            <th> Popularity</th>
            <th> Won an Oscar</th>
            <th> Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {celebs.map((celebs) => {
            return (
              <tr key={celebs.id}>
                <td>
                  <img
                    width="100"
                    height="150"
                    src={celebs.pictureUrl}
                    alt={celebs.name}
                  />
                </td>
                <td>{celebs.name}</td>
                <td>{celebs.popularity}</td>
                <td>{celebs.wonOscar === true ? "🏆" : ""} </td>
                <td>{celebs.wonEmmy === true ? "🏆" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
