const host = 'http://localhost:5000';

const getData=async()=>{
    const url = `${host}/api/notes/fetchallnotes`;
    let response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authToken": localStorage.getItem('authToken')
        },
    });
    response = await response.json();
    return response;
}

const createNote=async(title, content)=>{
    const url = `${host}/api/notes/addnotes`;
    let data = {
        "title":title,
        "content":content
    }
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authToken": localStorage.getItem('authToken')
        },
        body: JSON.stringify(data)
    });
}

const deleteNote=async(id)=>{
    const url = `${host}/api/notes/deletenotes`;
    await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "authToken": localStorage.getItem('authToken'),
            "noteId": id
        },
    });
}

const editNote=async(id, title, content)=>{
    const url = `${host}/api/notes/updatenotes`;
    let data = {
        "title":title,
        "content":content
    }
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authToken": localStorage.getItem('authToken'),
            "noteId": id
        },
        body: JSON.stringify(data)
    });
}

export {getData, createNote, deleteNote, editNote};
  