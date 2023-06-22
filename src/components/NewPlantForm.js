import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {
  // assign keys (name, image, price) due to us changing the data without keys to data requiring keys
  const [plant, setPlant] = useState({
    name: '', image: '', price: 0,
  })

  // handleChange takes the event(e) and sets the state for plant using a 
  // spread of the 'plant' array and uses the key e.target.name to find 
  // "name", "image", and "price" from the input field below and changes 
  // it based on what is inputted into the field (onChange)
  // this type of function is very flexible and easier to re-use
  function handleChange(e) {
    setPlant({...plant, [e.target.name]: e.target.value})
  }

  // when form is submitted, it will run addNewPlant and call it with the new 'plant' object made with handleChange
  function handleSubmit(e) {
    e.preventDefault();
    addNewPlant(plant);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} > 
        <input type="text" name="name" value={plant.name} 
          onChange={handleChange} placeholder="Plant name" />
        <input type="text" name="image" value={plant.image} 
          onChange={handleChange} placeholder="Image URL" />
        <input type="number" name="price" step="0.01" value={plant.price} 
          onChange={handleChange} placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

// Simple method for controlling form: states for plantName, plantImage, plantPrice and in-line arrow function for e.target.value
// function NewPlantForm() {
//   const [plantName, setPlantName] = useState('')
//   const [plantImage, setPlantImage] = useState('')
//   const [plantPrice, setPlantPrice] = useState('')


//   return (
//     <div className="new-plant-form">
//       <h2>New Plant</h2>
//       <form /* onSubmit={handleSubmit} */ > 
//         <input type="text" name="name" value={plantName} 
//           onChange={e => setPlantName(e.target.value)} placeholder="Plant name" />
//         <input type="text" name="image" value={plantImage} 
//           onChange={e => setPlantImage(e.target.value)} placeholder="Image URL" />
//         <input type="number" name="price" step="0.01" value={plantPrice} 
//           onChange={e => setPlantPrice(parseInt(e.target.value))} placeholder="Price" />
//         <button type="submit">Add Plant</button>
//       </form>
//     </div>
//   );
// }