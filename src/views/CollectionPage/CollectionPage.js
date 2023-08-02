import { useState, useEffect } from "react";
import collectionsData from "../../data/collection.json";

const CollectionPage = () => {
  const [collections, setCollections] = useState(collectionsData);

  const generateStickersForCollections = () => {
    let newCollections = collections.map((collection) => {
      let stickers = [];

      for (let i = 1; i <= collection.stickerSize; i++) {
        stickers.push({
          id: i,
          name: "Sticker " + i,
          special: false,
        });
      }

      for (let i = 1; i <= collection.stickerSpecial; i++) {
        stickers.push({
          id: "h" + i,
          name: "Sticker H" + i,
          special: true,
        });
      }

      return { ...collection, stickers };
    });

    setCollections(newCollections);
  };

  useEffect(generateStickersForCollections, []);
  console.log(collections);
  return (
    <div>
      {collections &&
        collections.map((collection) => (
          <div key={collection.id}>
            <h1>
              {collection.name} ({collection.Année}, {collection.Langue})
            </h1>
            <img src={collection.image} alt={collection.name} />
            <ul>
              {collection.stickers &&
                collection.stickers.map((sticker) => (
                  <li key={sticker.id}>
                    <input type="checkbox" id={`sticker-${sticker.id}`} />
                    <label htmlFor={`sticker-${sticker.id}`}>
                      {sticker.name} {sticker.special ? "(Spécial)" : ""}
                    </label>
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default CollectionPage;
