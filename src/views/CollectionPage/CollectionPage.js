import { useState, useEffect } from "react";
import collectionsData from "../../data/collection.json";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
  const { id } = useParams();
  const [collection, setCollection] = useState();

  const generateStickersForCollection = () => {
    let collectionData = collectionsData.find(
      (col) => col.id.toString() === id
    );

    if (collectionData) {
      let stickers = [];

      for (let i = 1; i <= collectionData.stickerSize; i++) {
        stickers.push({
          id: i,
          name: " " + i,
          special: false,
        });
      }

      for (let i = 1; i <= collectionData.stickerSpecial; i++) {
        stickers.push({
          id: collectionData.LetterStickerSpecial + i,
          name: " " + collectionData.LetterStickerSpecial + i,
          special: true,
        });
      }

      collectionData = { ...collectionData, stickers };
    }

    setCollection(collectionData);
  };

  useEffect(generateStickersForCollection, [id]);

  return (
    <div>
      {collection && (
        <div>
          <h1>
            {collection.name} ({collection.Année}, {collection.Langue})
          </h1>
          <div className="imgContainer">
            <img src={collection.image} alt={collection.name} />
          </div>
          <ul>
            {collection.stickers &&
              collection.stickers.map((sticker) => (
                <li key={sticker.id}>
                  <input type="checkbox" id={`sticker-${sticker.id}`} />
                  <label htmlFor={`sticker-${sticker.id}`}>
                    {sticker.name} {sticker.special ? "" : ""}
                  </label>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
