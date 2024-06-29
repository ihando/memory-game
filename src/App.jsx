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
      <h1>Pokemon Berry Memory Game</h1>
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
      <h3>Counter: {rerenderCounter}</h3>
      <h3>High Score: {maxRenderCounter}</h3>
    </>
  );
}

export default App;
