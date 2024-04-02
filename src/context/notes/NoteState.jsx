/* eslint-disable react/prop-types */
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) =>{
     const s1 = {
          "name" : "Samdeep",
          "age" : "20"
     }
     const [state, setstate] = useState(s1)
     const updateState = () =>{
          setTimeout(() => {
               setstate({
                    "name" : "Sammy",
                    "age": "21"
               })
          }, 1000);
     }
     return(
     
          <NoteContext.Provider value={{state, updateState}}>
               {props.children}
          </NoteContext.Provider>
          
     )
}

export default NoteState;