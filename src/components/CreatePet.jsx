import React, { useState } from "react";
import axios from "axios";


function CreatePet() {
  const [formData, setFormData] = useState({
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
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(`${API_BASE_URL / pet / create - pet}`, formData)
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
              value={formData.name}
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
              value={formData.age}
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
              value={formData.species}
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
              value={formData.breed}
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
              value={formData.specialCareRequired}
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
              value={formData.imageUrl}
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

  