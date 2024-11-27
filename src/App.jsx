import Registration from './components/Registration'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/login'
import Nav from './components/Nav'
import CreatePets from './components/CreatePets'
import SavedPets from './components/SavedPets'
import Readpet from './components/Readpet'

function App() {
  return (
    <BrowserRouter>
      {<Nav />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth/register" element={<Registration />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/pet/create-pets" element={<CreatePets />}></Route>
        <Route path="/pet/saved-pets" element={<SavedPets />}></Route>
        <Route path="/read-pet/:id" element={<Readpet />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App
