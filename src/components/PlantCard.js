import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false)

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isSoldOut ? (
        <button className="primary">In Stock</button>
      ) : (
        <button /* onClick={} */ >Out of Stock</button>
      )}

    </li>
  );
}

export default PlantCard;
