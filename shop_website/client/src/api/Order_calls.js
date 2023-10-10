const host='http://localhost:5000';

const createorder=async(user, prod_id, name, img_url, price, quantity, size, address)=>{
    const url=`${host}/api/orders/createorder`
    const data = {
        "user": user,
        "prod_id": prod_id,
        "name": name,
        "img_url": img_url,
        "price": price,
        "quantity": quantity,
        "size": size,
        "address": address
    }
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

const fetchorder=async(user)=>{
    const url=`${host}/api/orders/fetchorder`
    const data = {
        "user": user,
    }
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    response = await response.json();
    return response.order;
}

const deleteoder=async(user, id)=>{
    const url=`${host}/api/orders/deleteorder`
    const data = {
        "user": user,
        "_id": id
    }
    await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

export {createorder, fetchorder, deleteoder}