import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePets() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [specialCareRequired, setSpecialCareRequired] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !age || !species || !breed || !imageUrl) {
      alert("Please fill in all required fields.");
      return;
    }

    axios.post("https://backend-capstone-8-81l3.onrender.com/api/create-pet", {
      name,
      age,
      species,
      breed,
      specialCareRequired,
      imageUrl,
    })
      .then((result) => {
        setName("");
        setAge("");
        setSpecies("");
        setBreed("");
        setSpecialCareRequired("");
        setImageUrl("");
        alert("Pet created successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to create pet. Please try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-3 border border-1 w-25">
        <h3>Create Pet</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              placeholder="Enter Age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="species">Species</label>
            <input
              id="species"
              type="text"
              placeholder="Enter Species"
              className="form-control"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="breed">Breed</label>
            <input
              id="breed"
              type="text"
              placeholder="Enter Breed"
              className="form-control"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="specialCareRequired">Special Care Required</label>
            <input
              id="specialCareRequired"
              type="text"
              placeholder="Enter Special Care Required"
              className="form-control"
              value={special_care_required}
              onChange={(e) => setSpecialCareRequired(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="imageUrl">Image URL</label>
            <input
              id="imageUrl"
              type="text"
              placeholder="Enter Image URL"
              className="form-control"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <button type="submit" className="mt-2 btn btn-success w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePets;
