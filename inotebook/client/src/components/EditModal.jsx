import React, {useContext, useState} from 'react'
import NoteContext from '../context/notes/NoteContext'
import AlertContext from '../context/alert/AlertContext';

export default function EditModal(props) {
    const a = useContext(NoteContext);
    const b = useContext(AlertContext);

    const [title, settitle] = useState(props.title)
    const [content, setcontent] = useState(props.content)
    const updatetitle=(event)=>{
        settitle(event.target.value);
    }
    const updatecontent=(event)=>{
        setcontent(event.target.value);
    }

    const editnote=async()=>{
        await a.editnotes(props.noteid, title, content);
        b.updateval("Note Edited Succesfully ! ✔️", "info");
    }
    return (
        <>
            <div className="modal fade" id={`A${props.noteid}`} tabIndex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit your Note 🗒️</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3" style={{width: '40%'}}>
                                    <label htmlFor="exampleInputEmail1" className="form-label"><strong>Enter the updated Title .</strong></label>
                                    <input type="text" className="form-control" id="text" aria-describedby="textHelp" onChange={updatetitle} value={title}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Enter the updated content.</strong></label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={updatecontent} value={content}></textarea>
                                </div>
                                <span id="HelpInline" className="form-text">
                                    Changes won't be made if the original and final text are similar !
                                </span>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={title===props.title && content===props.content?true:false} className="btn btn-primary" data-bs-dismiss="modal" onClick={editnote}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
