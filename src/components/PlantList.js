import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, plantStock }) {
  return (
    <ul className="cards">
      {plants.map(plant => (
        <PlantCard 
          plant={plant} 
          key={plant.id} 
          plantStock={plantStock}
        />
      ))}
    </ul>
  );
}

export default PlantList;
