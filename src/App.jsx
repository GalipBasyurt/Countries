import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Region from "./components/Region";
import Countries from "./components/Countries";

function App() {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const onRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  const removeSelectRegion = () => {
    setSelectedRegion(null);
  };

  return (
    <div>
      <Navbar />
      {selectedRegion ? (
        <Countries
          removeSelectRegion={removeSelectRegion}
          selectedRegion={selectedRegion}
        />
      ) : (
        <Region onRegionSelect={onRegionSelect} />
      )}
    </div>
  );
}

export default App;
