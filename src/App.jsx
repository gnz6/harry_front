import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/home/Nav"
import Home from "./components/home/Home"
import Login from "./components/auth/Login"
function App() {

  
  return (
    <BrowserRouter>
    <div class="App">
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes> 
    </div>
    </BrowserRouter>
  )
}

export default App
