/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import NoteContext from "../context/notes/NoteContext"

const Notes = () => {
  
  const a = useContext(NoteContext)
  useEffect(() => {
    a.updateState();
  }, [])
  return (
    <div>
     <p>notes of {a.state.name}, age {a.state.age}</p>
    </div>
  )
}

export default Notes