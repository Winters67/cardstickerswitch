import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import collectionsData from "../../data/collection.json";

const Profile = () => {
  const [selectedCollection, setSelectedCollection] = useState("");
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedCollection(event.target.value);
    navigate(`/collection/${event.target.value}`);
  };

  return (
    <div>
      Je suis sur la page Profile
      <select value={selectedCollection} onChange={handleSelectChange}>
        <option value="">Sélectionnez une collection...</option>
        {collectionsData.map((collection) => (
          <option key={collection.id} value={collection.id}>
            {collection.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Profile;
