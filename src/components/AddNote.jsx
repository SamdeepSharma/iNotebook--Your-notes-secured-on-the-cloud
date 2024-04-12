/* eslint-disable no-unused-vars */
import noteContext from "../context/notes/NoteContext"
import { useContext, useState } from "react"
import { toast } from 'react-toastify';

const AddNote = () => {
     const context = useContext(noteContext)
     const { addNote } = context;
     const def = {title: "", description: "", tag: "" }
     const [note, setNote] = useState(def)
     const handleClick = (e) => {
          e.preventDefault()
          addNote(note.title, note.description, note.tag)
          toast('🌟 Note added!', {
               position: "top-center",
               autoClose: 3000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "light",
               });
          setNote(def)
     }
     const handleChange = (e) => {
          setNote({...note, [e.target.name]: e.target.value})
     }

     return (
          <div className="py-2">
               <h2 className="my-4">Add a Note</h2>
               <form>
                    <div className="mb-3">
                         <label htmlFor="title" className="form-label">Title</label>
                         <input type="text" className="form-control w-50" aria-describedby="textHelp" placeholder="Interview" name="title" id="title" value={note.title} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                         <label htmlFor="desc" className="form-label">Description</label>
                         <input type="text" className="form-control w-75" placeholder="JPMC interview scheduled at 18:00 on Hackerrank..." name="description" id="desc" value={note.description} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                         <label htmlFor="tag" className="form-label">Tag</label>
                         <input type="text" className="form-control w-25" placeholder="Important" name="tag" id="tag" value={note.tag} onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary my-3" onClick={handleClick}>Add Note</button>
               </form>
          </div>
     )
}

export default AddNote
