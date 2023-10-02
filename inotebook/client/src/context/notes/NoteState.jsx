import { createNote, getData, deleteNote, editNote} from "../../api/API_calls";
import NoteContext from "./NoteContext";
import {useState} from 'react'

const NoteState = (props)=>{
    const [notedata, setnotedata] = useState([]);
    const fetchnotes=async()=>{
        let response = await getData();
        setnotedata(response.reverse())
    }
    const addnotes=async(title, content)=>{
        await createNote(title, content);
        let response = await getData();
        setnotedata(response.reverse());
    }
    const deletenotes=async(id)=>{
        await deleteNote(id);
        let response = await getData();
        setnotedata(response.reverse());
    }
    const editnotes=async(id, title, content)=>{
        await editNote(id, title, content)
        let response = await getData();
        setnotedata(response.reverse());
    }
    return(
        <NoteContext.Provider value={{notedata, addnotes, deletenotes, editnotes, fetchnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;