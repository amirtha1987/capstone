import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';




function Home() {
  const [pets, setPets] = useState([])
  useEffect(() => {
    axios
      .get("https://capstone-1-9v6o.onrender.com/pet/pets")
      .then((pets) => {
        setPets(pets.data);
      })
      .catch((err) => console.log(err));
  }, [])
  return (
    <div className='d-flex justify-content-center'>
      <div>
        <h2>Pets</h2>
        {
          pets.map(pet => (
            <div key={pet._id} className='mt-4 p-3 border'>
              <Link to={`/read-pet/${pet._id}`} className="text-decoration-none">
                <h3>{pet.name}</h3>
                </Link>
              <img src={pet.imageUrl} alt="pets"/>
            </div>
          )
          )
        }
      </div>
    </div>
  )
      }

export default Home