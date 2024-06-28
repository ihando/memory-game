//import { useState, useEffect } from "react";
import { Berry } from "./Berry";
import { useState } from "react";

function App() {
  const [markedBerries, setMarkedBerries] = useState([]);
  const [rerender, setRerender] = useState(0);

  const triggerRerender = () => {
    setRerender((prev) => prev + 1);
  };
  return (
    <>
      <Berry
        setMarkedBerries={setMarkedBerries}
        triggerRerender={triggerRerender}
        markedBerries={markedBerries}
      />
      <Berry
        setMarkedBerries={setMarkedBerries}
        triggerRerender={triggerRerender}
        markedBerries={markedBerries}
      />
      <Berry
        setMarkedBerries={setMarkedBerries}
        triggerRerender={triggerRerender}
        markedBerries={markedBerries}
      />
      <Berry
        setMarkedBerries={setMarkedBerries}
        triggerRerender={triggerRerender}
        markedBerries={markedBerries}
      />
    </>
  );
}

export default App;
