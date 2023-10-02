import React, {useContext, useEffect} from 'react'
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import EmptyMessage from './EmptyMessage';
import AlertContext from '../context/alert/AlertContext';

export default function NotesViewer() {
    const a = useContext(NoteContext);
    const b = useContext(AlertContext)

    useEffect(() => {
        if(localStorage.getItem("authToken")!==null){
            a.fetchnotes();
            console.log("Fetched");
            b.updateval(`${localStorage.getItem('name')} logged in Successfully ! ✔️`, 'success')
        }
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className="row">
                {a.notedata.length!==0?a.notedata.map((element, index)=>{
                    return <div className="col" key={index}>
                        <NoteItem title={element.title} content={element.content} markasread={element.markasread} id={element._id}/>
                    </div>
                }):<EmptyMessage/>}
            </div>
        </>
    )
}
