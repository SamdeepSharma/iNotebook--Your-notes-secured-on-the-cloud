/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from "react"
import {useNavigate} from 'react-router-dom'
import noteContext from "../context/notes/NoteContext"
import NoteItem from "./NoteItem";
import { toast } from 'react-toastify';

const Notes = () => {
  const navigate = useNavigate();
  const context = useContext(noteContext)
  const { notes, fetchNotes, editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
    fetchNotes()
    }
    else{
      navigate('/login')
    }
  }, [])

  const [note, setNote] = useState({eid:"", etitle: "", edescription: "", etag: "" })
  const ref = useRef(null)
  const refClose = useRef(null)

  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({eid: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
  }

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const handleClick = (e) => {
    e.preventDefault()
    editNote(note.eid, note.etitle, note.edescription, note.etag)
    toast('🌸 Note Updated!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    refClose.current.click()
}

  return (
    <div className="py-2">
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="py-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Title</label>
                  <input type="text" className="form-control w-100" aria-describedby="textHelp" name="etitle" id="etitle" value={note.etitle} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="edesc" className="form-label">Description</label>
                  <input type="text" className="form-control w-100" name="edescription" id="edesc" value={note.edescription} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tag</label>
                  <input type="text" className="form-control w-100" name="etag" id="etag" value={note.etag} onChange={handleChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Cancel</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="my-4">Your Notes</h2>
          {notes.length === 0 && <h6 className="py-2">No notes to display!</h6>}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} />
        })}
      </div>
    </div>
  )
}

export default Notes