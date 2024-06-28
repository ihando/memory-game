import Berry from "./Berry";

function BerryContainer({
  count,
  setMarkedBerries,
  markedBerries,
  triggerRerender,
  setRerenderCounter,
  maxRenderCounter,
  rerenderCounter,
  setMaxRerenderCounter,
}) {
  const getRandomUniqueBerryIds = (count) => {
    const min = 126;
    const max = 145;
    const ids = new Set();

    while (ids.size < count) {
      const newId = Math.floor(Math.random() * (max - min + 1)) + min;
      ids.add(newId);
    }

    return Array.from(ids);
  };

  const berryIds = getRandomUniqueBerryIds(count);

  return (
    <>
      {berryIds.map((id) => (
        <Berry
          key={id}
          id={id}
          setMarkedBerries={setMarkedBerries}
          markedBerries={markedBerries}
          triggerRerender={triggerRerender}
          setRerenderCounter={setRerenderCounter}
          setMaxRerenderCounter={setMaxRerenderCounter}
          maxRenderCounter={maxRenderCounter}
          rerenderCounter={rerenderCounter}
        />
      ))}
    </>
  );
}

export default BerryContainer;
