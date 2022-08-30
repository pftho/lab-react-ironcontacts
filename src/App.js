import "./App.css";
import allContacts from "./contacts.json";
import { useState } from "react";

function App() {
  let contacts = allContacts.slice(0, 5);
  const [celebs, setCelebs] = useState(contacts);

  const handleAddRandom = () => {
    const restOfCelebs = allContacts.slice(5);
    const randomIndex = Math.floor(Math.random() * restOfCelebs.length + 1);
    const newcontact = restOfCelebs[randomIndex];
    setCelebs((contacts) => [...contacts, newcontact]);
    console.log("Count Celebs", celebs);
  };

  const handleSortByname = () => {
    const SortedArr = [...celebs].sort((contacta, contactb) =>
      contacta.name.toLowerCase() > contactb.name.toLowerCase() ? 1 : -1
    );
    console.log("After", SortedArr);
    setCelebs(SortedArr);
  };

  const handleSortByPopularity = () => {
    const SortedArr = [...celebs].sort(
      (contacta, contactb) => contactb.popularity - contacta.popularity
    )
    console.log(SortedArr);
    setCelebs(SortedArr);
  };

  return (
    <div className="App">
      <h1>IronContact</h1>
      <button onClick={handleAddRandom}>Add Random Contact</button>
      <button onClick={handleSortByname}>Sort by Name</button>
      <button onClick={handleSortByPopularity}>Sort by Popularity</button>

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
                <td>{Math.round(celebs.popularity)}</td>
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
