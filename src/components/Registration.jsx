import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import{Link,useNavigate} from 'react-router-dom'


const Registration = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  const navigate = useNavigate()
  
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
          .post("https://backend-capstone-8-81l3.onrender.com/auth/register", {
            username,
            password,
          })
          .then((result) => {
            navigate("/auth/login");
            console.log(result);
          })
          .catch((err) => console.log(err));
    }
    

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-3 border border-1 w-25">
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Username "
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            ></input>

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password "
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button className="mt-1 btn btn-success w-100">Submit</button>
      <Link to="/auth/login"><button className="btn btn-default w-100 mt-2">Login</button></Link>
          
        </form>
      </div>
    </div>
  );
}

export default Registration
