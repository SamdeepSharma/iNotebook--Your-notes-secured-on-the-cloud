/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) =>{
     const initialNotes= [
          {
              "_id": "660813be8b29088059f74815",
              "user": "6607f0f70fab17716bd70ebe",
              "title": "My personal Notes",
              "description": "Wake up early tomorrow",
              "tag": "day schedule",
              "date": "1711805374873",
              "__v": 0
          },
          {
              "_id": "661113669a452915b5ceff02",
              "user": "6607f0f70fab17716bd70ebe",
              "title": "My Notes",
              "description": "Code tomorrow",
              "tag": "fucked schedule",
              "date": "1711805374873",
              "__v": 0
          }
      ]

      const [notes, setNotes] = useState(initialNotes)

      //Add Note
      const addNote = (title, description, tag) =>{
          //TODO: API call
          console.log(title,description,tag)
      const note = {
               "_id": "661113669a452915b5ceff44",
               "user": "6607f0f70fab17716bd70ebe",
               "title": title,
               "description": description,
               "tag": tag,
               "date": "1711805374873",
               "__v": 0
      }
      setNotes(notes.concat(note))
      }

      //Delete Note
      const deleteNote = (id) =>{
          //TODO: API call
      const newNotes = notes.filter((note)=>{
          return note._id != id
      })
      setNotes(newNotes)
      }
      
      //Edit Note
      const editNote = () =>{

      }

     return(
     
          <NoteContext.Provider value={{notes, addNote, deleteNote, editNote }}>
               {props.children}
          </NoteContext.Provider>
          
     )
}

export default NoteState;