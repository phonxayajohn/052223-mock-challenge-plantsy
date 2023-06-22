import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, addNewPlant, plantStock }) {
  // state for search bar set in parent component due to this is where the search bar is "displayed"
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search setSearchTerm={setSearchTerm} />
      <PlantList plants={plants
          .filter(plant => 
            plant.name.toLocaleLowerCase().startsWith(searchTerm.toLocaleLowerCase())
            )} 
        plantStock={plantStock} />
    </main>
  );
}
// .filter allows us to filter plants out based on our search term (what we entered in the search bar)
// .toLocaleLowerCase() converts the back-end inputs into lower case and allows for case in-sensitive searching

export default PlantPage;
