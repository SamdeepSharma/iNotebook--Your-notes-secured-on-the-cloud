/* eslint-disable no-unused-vars */
import noteContext from "../context/notes/NoteContext"
import { useContext, useState, useEffect } from "react"
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom'

const AddNote = () => {
     const navigate = useNavigate();
     const { register, handleSubmit, formState: { errors } } = useForm();
     const context = useContext(noteContext)
     const { addNote } = context;
     const onSubmitForm = (data) => {
          if (!data.tag.trim()) {
               data.tag = 'general'; // Set default tag value to 'general'
             }
          addNote(data.title, data.description, data.tag)
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
          navigate('/notes')
     }

     return (
          <div className="py-2">
               <h2 className="my-4">Add a Note</h2>
               <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          className={`form-control ${errors.title ? 'is-invalid' : ''} w-50`}
          id="title"
          placeholder="Enter title"
          {...register('title', {
            required: 'Title is required',
            minLength: {
              value: 3,
              message: 'Title must be at least 3 characters'
            }
          })}
        />
        {errors.title && <div className="invalid-feedback">{errors.title.message}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input
          type="text"
          className={`form-control ${errors.description ? 'is-invalid' : ''} w-75`}
          id="description"
          placeholder="Enter description"
          {...register('description', {
            required: 'Description is required',
            minLength: {
              value: 5,
              message: 'Description must be at least 5 characters'
            }
          })}
        />
        {errors.description && <div className="invalid-feedback">{errors.description.message}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="tag" className="form-label">Tag</label>
        <input
          type="text"
          className={`form-control w-25`}
          id="tag"
          placeholder="Enter tag"
          {...register('tag')}
        />
      </div>

      <button type="submit" className="btn btn-primary my-3">Add Note</button>
    </form>
          </div>
     )
}

export default AddNote
