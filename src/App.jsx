import { useState } from "react";
import BerryContainer from "./BerryContainer";

function App() {
  const [markedBerries, setMarkedBerries] = useState([]);
  const [rerenderCounter, setRerenderCounter] = useState(0);
  const [maxRenderCounter, setMaxRerenderCounter] = useState(0);

  const triggerRerender = () => {
    setRerenderCounter((prev) => prev + 1);
  };
  return (
    <>
      <h2>
        Get points by clicking on a berry but dont click a berry more than once
      </h2>
      <BerryContainer
        count={12} // Number of Berry components to render
        setMarkedBerries={setMarkedBerries}
        markedBerries={markedBerries}
        triggerRerender={triggerRerender}
        setRerenderCounter={setRerenderCounter}
        setMaxRerenderCounter={setMaxRerenderCounter}
        maxRenderCounter={maxRenderCounter}
        rerenderCounter={rerenderCounter}
      />
      <div>Counter: {rerenderCounter}</div>
      <div>High Score: {maxRenderCounter}</div>
    </>
  );
}

export default App;
