/* eslint-disable no-unused-vars */
import noteContext from "../context/notes/NoteContext"
import { useContext, useState } from "react"

const AddNote = () => {
     const context = useContext(noteContext)
     const { addNote } = context;
     const def = {title: "", description: "", tag: "" }
     const [note, setNote] = useState(def)
     const handleClick = (e) => {
          e.preventDefault()
          addNote(note.title, note.description, note.tag)
          setNote(def)
     }
     const handleChange = (e) => {
          setNote({...note, [e.target.name]: e.target.value})
     }

     return (
          <div>
               <h2 className="py-3">Add a Note</h2>
               <form className="py-3">
                    <div className="mb-3">
                         <label htmlFor="title" className="form-label">Title</label>
                         <input type="text" className="form-control w-50" aria-describedby="textHelp"  name="title" id="title" onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                         <label htmlFor="desc" className="form-label">Description</label>
                         <input type="text" className="form-control w-75" name="description" id="desc" onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                         <label htmlFor="tag" className="form-label">Tag</label>
                         <input type="text" className="form-control w-75" name="tag" id="tag" onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary my-3" onClick={handleClick}>Add Note</button>
               </form>
          </div>
     )
}

export default AddNote
