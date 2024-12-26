import Registration from './components/Registration'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/login'
import Nav from './components/Nav'
import CreatePet from './components/CreatePet'
import SavedPets from './components/SavedPets'
import Readpet from './components/Readpet'

const App = () => {
  return (
    // <BrowserRouter>
    //   {<Nav />}
    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //     <Route path="/auth/register" element={<Registration />}></Route>
    //     <Route path="/auth/login" element={<Login />}></Route>
    //     <Route path="/pet/create-pet" element={<CreatePet />}></Route>
    //     <Route path="/pet/saved-pets" element={<SavedPets />}></Route>
    //     <Route path="/read-pet/:id" element={<Readpet />}></Route>
    //   </Routes>
    // </BrowserRouter>
    <div>
      <h1>
            PET ADOPTION APP
      </h1>
      <CreatePet />
    </div>
  );
}
export default App;
