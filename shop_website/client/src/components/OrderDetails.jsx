import React from 'react'

export default function OrderDetails(props) {
    const cancelorder=(id)=>{
        props.cancelorder(id);
    }
    return (
        <>
            <div className="card my-3" style={{width: "18rem"}}>
                <div className="card-header" style={{backgroundColor: "#cb9d06"}}><strong>Oder Id: {props.id.substring(0, 15)+" ..."}</strong></div>
                <img src={props.img_url} className="card-img-top" alt="..." style={{height: "18rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.name.length<=20?props.name:props.name.substring(0, 20)+" ..."}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Quantities : {props.quantity}</h6>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Address : {props.address.length<=20?props.address:props.address.substring(0, 20)+" ..."}</h6>
                    <button type='button' className="btn btn-danger" onClick={()=>cancelorder(props.id)}>Cancel Oder !</button>
                </div>
            </div>
        </>
    )
}
