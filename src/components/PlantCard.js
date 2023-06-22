import React from "react";

function PlantCard({ plant, plantStock }) {
  

  // if plant.outStock is not true/false (! operator), then on click of "In Stock Button", run plantStock function (which assigns the outStock:false value to the plant)
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {!plant.outStock ? (
        <button className="primary" 
          onClick={() => plantStock(plant)}>In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}

    </li>
  );
}

export default PlantCard;
