import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/home/Nav"
import Home from "./components/home/Home"
import Login from "./components/auth/Login"
import UserNav from "./components/home/UserNav"
import Register from "./components/auth/Register"
import Houses from "./components/Houses/Houses"
import Characters from "./components/Characters/Characters"
import Spells from "./components/Spells/Spells"
import HouseDetail from "./components/Houses/HouseDetail"
function App() {

  
  return (
    <BrowserRouter>
    <div class="App">
      <Nav/>
      <UserNav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/houses" element={<Houses/>}/>
      <Route path="/characters" element={<Characters/>}/>
      <Route path="/spells" element={<Spells/>}/>
      <Route path="/houseDetail/:houseName" element={<HouseDetail/>}/>
      </Routes> 
    </div>
    </BrowserRouter>
  )
}

export default App
