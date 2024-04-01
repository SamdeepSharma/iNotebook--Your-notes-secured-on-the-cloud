import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element = {<Home/>}/>
      <Route exact path="/Notes" element = {<Notes/>}/>
    </Routes>
    </>
  )
}

export default App
