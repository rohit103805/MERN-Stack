import React, {useState, useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';
import AlertContext from '../context/alert/AlertContext';

export default function Form() {
    const a = useContext(NoteContext);
    const b = useContext(AlertContext);
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const updatetitle=(event)=>{
        settitle(event.target.value);
    }
    const updatecontent=(event)=>{
        setcontent(event.target.value);
    }
    const submitdetails=async()=>{
        await a.addnotes(title, content);
        b.updateval("Note Added Succesfully ! ✔️", "success");
        settitle("");
        setcontent("");
    }
    return (
        <>
            <form className="my-3">
                <div className="mb-3" style={{width: '40%'}}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Enter the note Title !</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={updatetitle} value={title}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter the content</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={updatecontent} value={content}></textarea>
                </div>
                <button type="button" disabled={title.length!==0 && content.length!==0?false:true} className="btn btn-warning" onClick={submitdetails}><strong>Add Note !</strong></button>
            </form>
        </>
    )
}
