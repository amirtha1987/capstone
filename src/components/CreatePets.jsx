import React, { useState } from 'react'
import axios from 'axios'
import { NavigationType, useNavigate} from 'react-router-dom'

function CreatePets() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
    const [species, setSpecies] = useState('')
  const [breed, setBreed] = useState('')
  const [special_care_required, setSpecial_care_required] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  //const [userId, setUserId] = useState(window.localStorage.getItem("id"))

  // const [pet, setPet] = useState({
  //   name: req.body.name,
  //   age: req.body.age,
  //   species: req.body.species,
  //   breed: req.body.breed,
  //   special_care_required: req.body.special_care_required,
  //   imageUrl: req.body.imageUrl,
  //   userId: window.localStorage.getItem("id"),
  // });   
  
  // const handleChange = (event) => {
  //   const { name, value } = event.target
  //   setPet({...pet, [name]: value})
  // }
  
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/pet/create-pet", { name, age, species, breed, special_care_required, imageUrl })
      .then(result=> {
        navigate('/')
        console.log(result.data);
        alert("pet created");
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-item-center vh-100">
      <div className="p-3 border border-1 w-25">
        <h3>Create Pet</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">name </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(event) => setName(event.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="Number"
              placeholder="Enter Age"
              className="form-control"
              onChange={(event) => setAge(event.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="species">Species</label>
            <input
              type="text"
              placeholder="Enter species"
              className="form-control"
              onChange={(event) => setSpecies(event.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="breed">Breed</label>
            <input
              type="text"
              placeholder="Enter breed"
              className="form-control"
              onChange={(event) => setBreed(event.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="special_care_required">Special Care Required</label>
            <input
              type="text"
              placeholder="Enter special care Required"
              className="form-control"
              onChange={(event) => setSpecial_care_required(event.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="imageUrl">ImageUrl </label>
            <input
              type="text"
              placeholder="Enter Image url"
              className="form-control"
              onChange={(event) => setImageUrl(event.target.value)}
            ></input>

            {/* <label htmlFor="UserId">UserId </label>
            <input
              type="text"
              placeholder="Enter userid"
              className="form-control"
              onChange={(event) => setUserId(event.target.value)}
            ></input> */}
          </div>

          <button className="mt-1 btn btn-success w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePets