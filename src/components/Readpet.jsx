import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Readpet() {
  const { id } = useParams()
  const userId = window.localStorage.getItem('id')
  const [savedPets, setSavedPets] = useState([])

  const [pet, setPet] = useState([])
  
  
  useEffect(() => {
    const getPet = () => {
      axios.get('http://localhost:3001/pet/pet-by-id/' + id)
        .then(result => {
          setPet(result.data)
        }).catch(err => console.log(err))
    }
    const fetchSavedPets = () => {
      axios.get('http://localhost:3001/pet/saved-pets/' +userId)
        .then(result => {
          setSavedPets(result.data.savedPets)
        }).catch(err => console.log(err))
   
    }
    fetchSavedPets()
    getPet()
  }, [])


  const savedPet = (petId) => {
    axios.put("http://localhost:3001/pet", { userId , petId })
      .then(result => (
        setSavedPets(result.data.savedPets)
      
      ))
      .catch((err) => console.log(err));
  }
  //const isPetSaved = (id) => savedPets.includes(id);
   

  function isPetSaved(petId) {
    if (savedPets && savedPets.includes) {
      return savedPets.includes(petId);
    }
    return false;
  }

 
  return (
    <div className="d-flex justify-content-center container mt-3">
      <div className="p-2">
        <img src={pet.imageUrl} alt="" />
      </div>
      <div className='p-2'>
        <h2>{pet.name}</h2>
        <button className='btn btn-warning'
          onClick={() => savedPet(pet._id)}
        disabled = {isPetSaved(pet._id)}>
          {isPetSaved(pet._id) ? "Saved" : "Save"}
        </button>
        <h3>Age</h3>
        <p>{pet.age}</p>
        <h3>species</h3>
        <p>{pet.species}</p>
      </div>
    </div>
  );
}

export default Readpet
