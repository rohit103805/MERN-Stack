const host='http://localhost:5000';

const getdata=async(category)=>{
    const url=`${host}/api/products/fetch`
    const data = {
        "category": category
    }
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    response = await response.json();
    return response.products;
}

export {getdata}