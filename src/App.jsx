//import { useState, useEffect } from "react";
import { Berry } from "./Berry";
import { useState } from "react";

function App() {
  const [markedBerries, setMarkedBerries] = useState([]);
  return (
    <>
      <Berry />
      <Berry />
      <Berry />
      <Berry />
    </>
  );
}

export default App;
