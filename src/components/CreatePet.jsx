import React, { useState } from "react";
import axios from "axios";


function CreatePet() {
  const [pet, setPet] = useState({
    name: "",
    age: "",
    species: "",
    breed: "",
    specialCareRequired: "",
    imageUrl: ""

  })

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const handleChange = (event) => {
    const { name, value } = event.target
    setPet({ ...pet, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(`${API_BASE_URL/pet/create-pet}`, pet)
      .then(result => {
      console.log(result.data)
      alert("pet created")
       }).catch(err => console.log(err))
     }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-3 border border-1 w-25">
        <h3>Create Pet</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Pet Name:</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={pet.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Age:</label>
            <input
              type="number"
              placeholder="Age"
              name="age"
              value={pet.age}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Species:</label>
            <input
              type="text"
              placeholder="Enter species"
              name="species"
              value={pet.species}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Breed:</label>
            <input
              type="text"
              placeholder="Enter Breed"
              name="breed"
              value={pet.breed}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Special Care Required:</label>
            <input
              type="text"
              placeholder="Special care required"
              name="specialCareRequired"
              value={pet.specialCareRequired}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>ImageURL:</label>
            <input
              type="text"
              placeholder="Enter ImageUrl"
              name="imageUrl"
              value={pet.imageUrl}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" >
            Create Pet
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePet;

  