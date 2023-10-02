const host = 'http://localhost:5000';

const loginUser=async(email, password)=>{
    const url = `${host}/api/auth/login`;
    let data = {
        "email": email,
        "password": password
    }
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    response = await response.json();
    return response;
}

const registerUser=async(name, email, password)=>{
    const url = `${host}/api/auth/createuser`;
    let data = {
        "name": name,
        "email": email,
        "password": password
    }
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    response = await response.json();
    return response;
}

export {loginUser, registerUser}