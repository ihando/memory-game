import { useState, useEffect } from "react";

function Berry({
  id,
  setMarkedBerries,
  markedBerries,
  triggerRerender,
  setRerenderCounter,
  maxRenderCounter,
  rerenderCounter,
  setMaxRerenderCounter,
}) {
  const [img, setImg] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    async function getBerryImage() {
      const berryItemUrl = `https://pokeapi.co/api/v2/item/${id}/`;
      try {
        const response = await fetch(berryItemUrl);
        const data = await response.json();
        setImg(data.sprites.default);
        setName(data.name);
      } catch (error) {
        console.error("Error fetching the berry item data:", error);
      }
    }

    getBerryImage();
  }, [id]);

  const handleClick = () => {
    if (markedBerries.includes(id)) {
      if (rerenderCounter > maxRenderCounter) {
        setMaxRerenderCounter(rerenderCounter);
      }
      setMarkedBerries([]);
      triggerRerender();
      setRerenderCounter(0);
    } else {
      setMarkedBerries((prevList) => [...prevList, id]);
      triggerRerender();
    }
  };

  return (
    <div className="berry" onClick={handleClick}>
      {img && <img src={img} alt="Berry" />}
      <div>{name}</div>
    </div>
  );
}

export default Berry;
