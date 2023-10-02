import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';
import AlertContext from '../context/alert/AlertContext';
import EditModal from './EditModal';

export default function NoteItem(props) {
    const a = useContext(NoteContext);
    const b = useContext(AlertContext);

    const deletenote=async()=>{
        await a.deletenotes(props.id);
        b.updateval("Note Deleted Succesfully ! ✔️", "warning");
    }
    return (
        <>
            <EditModal noteid={props.id} title={props.title} content={props.content}/>
            <div className="card my-3" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group me-2" role="group" aria-label="Second group">
                            <button type="button" className="btn" style={{backgroundColor: "#D8B863"}} data-bs-toggle="modal" data-bs-target={`#A${props.id}`}><strong>Edit</strong> ✏️</button>
                        </div>
                        <div className="btn-group" role="group" aria-label="Third group">
                            <button type="button" className="btn btn-dark" onClick={deletenote}>Delete 🗑️</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
