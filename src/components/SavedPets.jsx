import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SavedPets() {
  const userId = window.localStorage.getItem("id")
  const [savedpets, setsavedPets] = useState([]);
  const [adopt, setAdopt] = useState(true);
  const [notadopt, setNotadopt] = useState(true);
  

  const handleChange = (data) => {
    if (data == "adopt")
    {
      if (adopt == true) {
        console.log(data,"our value")
      }
    }
    if (data == "notadopt") {
      if (adopt == true) {
        console.log(data, "our value");
      }
    }
  }
  useEffect(() => {
    axios
      .get("https://capstone-1-9v6o.onrender.com/pet/user-pets/" + userId)
      .then((pets) => {
        setsavedPets(pets.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex justify-content-center">
      <div>
        <h2>SAVED PETS</h2>
        {savedpets.map((pet) => (
          <div key={pet._id} className="mt-4 p-3 border">
            <Link to={`/read-pet/${pet._id}`} className="text-decoration-none">
              <h3>{pet.name}</h3>
            </Link>
            <img src={pet.imageUrl} alt="pets" />
            <div className="form">
              <input
                type="checkbox"
                value={"adopt"}
                onChange={() => handleChange("adopt")}
                className="form-check-input"
              />
              <label className="form-check-label" ms-2>
                Pet is Adopted
              </label>
              <br></br>
              <input
                type="checkbox"
                value={"notadopt"}
                onChange={() => handleChange("notadopt")}
                className="form-check-input"
              />
              <label className="form-check-label" ms-2>
                Pet is not Adopted
              </label>
              <div>
                <div data-mdb-input-init class="form-outline">
                
                  <textarea
                    class="form-control"
                    id="textAreaExample1"
                    rows="4"
                    placeholder="Give Feedback"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedPets;
