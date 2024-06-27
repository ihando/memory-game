import { useState, useEffect } from "react";

export function Berry() {
  const [id, setId] = useState(() => {
    const min = 126;
    const max = 189;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  });
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
        console.log("Berry Image URL:", data.sprites.default);
        console.log("Berry Name:", data.name);
        console.log("Berry ID:", data.id);
      } catch (error) {
        console.error("Error fetching the berry item data:", error);
      }
    }

    getBerryImage();
  }, [id]);

  return (
    <div className="berry">
      {img && <img src={img} alt="Berry" />}
      <div>{name}</div>
    </div>
  );
}
