/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = 'http://localhost:5000'
    const initialNotes = []

    const [notes, setNotes] = useState(initialNotes)

    //get all notes
    const fetchNotes = async () => {
        //API call
        const response = await fetch(`${host}/api/notes/fetchnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwN2YwZjcwZmFiMTc3MTZiZDcwZWJlIn0sImlhdCI6MTcxMTc5NjUzMH0.ynt2m_tUmijcWYyBEB_tjytfOWtpAd6onoBMJVvqn7g"
            },
        });
        const json = await response.json()
        setNotes(json)
    }

    //Add Note
    const addNote = async (title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title, description, tag}),
        });
        const json_data= response.json();
        //frontend logic
        console.log(title, description, tag)
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
    const deleteNote = async(id) => {
        //API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwN2YwZjcwZmFiMTc3MTZiZDcwZWJlIn0sImlhdCI6MTcxMTc5NjUzMH0.ynt2m_tUmijcWYyBEB_tjytfOWtpAd6onoBMJVvqn7g"
            },
        });
        //frontend logic
        const newNotes = notes.filter((note) => {
            return note._id != id
        })
        setNotes(newNotes)
    }

    //Edit Note
    const editNote = async(id, title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwN2YwZjcwZmFiMTc3MTZiZDcwZWJlIn0sImlhdCI6MTcxMTc5NjUzMH0.ynt2m_tUmijcWYyBEB_tjytfOWtpAd6onoBMJVvqn7g"
            },
            body: JSON.stringify({title, description, tag}),
        });
        const json_data= response.json();
        //frontend logic
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id)
                element.title = title
            element.description = description
            element.tag = tag
        }
    }

    return (

        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, fetchNotes }}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState;