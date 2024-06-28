import { useState, useEffect } from "react";

export function Berry({
  setMarkedBerries,
  triggerRerender,
  markedBerries,
  setRerender,
}) {
  const [id, setId] = useState(() => getRandomBerryId());
  const [img, setImg] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    async function getBerryImage() {
      const berryItemUrl = `https://pokeapi.co/api/v2/item/${id}/`;
      try {
        const response = await fetch(berryItemUrl);
        const data = await response.json();
        setImg(data.sprites.default);
        setName(data.name); // Update the name state variable
        setId(data.id);
      } catch (error) {
        console.error("Error fetching the berry item data:", error);
      }
    }

    getBerryImage();
  }, [id]);

  useEffect(() => {
    if (markedBerries.length > 0) {
      const newId = getRandomBerryId();
      setId(newId);
    }
  }, [markedBerries]);

  const handleClick = () => {
    if (markedBerries.includes(id)) {
      triggerRerender();
      setMarkedBerries([0]); //sets the marked berries array with id of 0 to trigger useeffect above correct, 0 is not a berry id number and will not be picked by the generator
      setRerender(0);
    } else {
      setMarkedBerries((prevList) => {
        const newList = [...prevList, id];
        triggerRerender();
        return newList;
      });
    }
  };
  return (
    <div className="berry" onClick={handleClick}>
      {img && <img src={img} alt="Berry" />}
      <div>{name}</div>
    </div>
  );
}

function getRandomBerryId() {
  //189
  const min = 126;
  const max = 133;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
