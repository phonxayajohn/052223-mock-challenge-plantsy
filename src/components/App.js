import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const API = "http://localhost:6001/plants"

function App() {
  const [plants, setPlants] = useState([])

  useEffect(() =>
    fetch(API)
    .then(res => res.json())
    .then(setPlants), [])
  
  function addNewPlant(plant) {
    fetch(API, {
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      method: "POST",
      body: JSON.stringify(plant),
    })
      .then(res => res.json())
      .then(json => setPlants([...plants, json])) // then takes the returned json and use that data in setPlants along with the '...plants' spread
  }

  return (
    <div className="app">
      <Header />
      <PlantPage 
        plants={plants} 
        addNewPlant={addNewPlant} 
        plantStock={plantStock} 
      />
    </div>
  );

  // if the p's id does not match plant.id then return p, otherwise return copy of p and assign outStock to true
  function plantStock(plant) {
    setPlants(plants.map(p => p.id !== plant.id
      ? p
      : {...p, outStock: true}
      ))
  }
}

export default App;
