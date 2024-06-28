import { useState, useEffect } from "react";
import { Berry } from "./Berry";

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
        setRerender={setRerender}
      />
      <Berry
        setMarkedBerries={setMarkedBerries}
        triggerRerender={triggerRerender}
        markedBerries={markedBerries}
        setRerender={setRerender}
      />
      <Berry
        setMarkedBerries={setMarkedBerries}
        triggerRerender={triggerRerender}
        markedBerries={markedBerries}
        setRerender={setRerender}
      />
      <Berry
        setMarkedBerries={setMarkedBerries}
        triggerRerender={triggerRerender}
        markedBerries={markedBerries}
        setRerender={setRerender}
      />
      <div>Counter: {rerender}</div>
    </>
  );
}

export default App;
