/* eslint-disable react/prop-types */

const NoteItem = (props) => {
     const { note, updateNote, confirmDelete } = props;

     return (
          <div>
               <div className="card w-100 mb-3">
                    <div className="card-body">
                         <h5 className="card-title">{note.title}</h5>
                         <p className="card-text">{note.description}</p>
                         <i className="fa-solid fa-trash mx-2" onClick={()=> {confirmDelete(note) }}></i>
                         <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>
                    </div>
               </div>
          </div>
     )
}

export default NoteItem
