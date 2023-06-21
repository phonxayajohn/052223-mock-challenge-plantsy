import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const API = "http://localhost:6001/plants"

function App() {
  const [plants, setPlants] = useState([])

  useEffect(() =>
    fetch(API)
    .then(res => res.json())
    .then(setPlants), []
    )
  
  const addPlant = (newPlant) => {
    fetch(API, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "POST",
      body: JSON.stringify(newPlant),
    })
      .then(res => res.json())
      .then(setPlants([...plants]))
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} addPlant={addPlant} />
    </div>
  );
}

export default App;
