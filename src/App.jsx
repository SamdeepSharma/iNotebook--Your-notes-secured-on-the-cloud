import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import NoteState from './context/notes/NoteState'
import About from './components/About'
import Contact from './components/Contact'
import Alert from './components/Alert'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

  return (
    <div className='bg-body-secondary'>
      <NoteState>
        <Navbar />
        <Alert message={"This is an amazing website"}/>
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/notes" element={<Notes />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        </div>
      </NoteState>
    </div>
  )
}

export default App
