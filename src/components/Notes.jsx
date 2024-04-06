/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import noteContext from "../context/notes/NoteContext"
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext)
  const {notes, fetchNotes} = context;
  useEffect(() => {
    fetchNotes()
  }, [])
  
  return (
    <div className="py-3">
     <h2>Your Notes</h2>
     <div className="row row-cols-1 row-cols-md-3 g-4">
     {notes.map((note)=>{
      return <NoteItem key={note._id} note={note}/>
      })}
      </div>
    </div>
  )
}

export default Notes