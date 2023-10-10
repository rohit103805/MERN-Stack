import React from 'react'
import OrderModal from './OrderModal'

export default function Product(props) {
    return (
        <>
            <OrderModal pid={props.pid} name={props.name} img_url={props.img_url} price={props.price}/>
            <div className="card my-3" style={{width: "18rem"}}>
                <div className="card-header text-white" style={{backgroundColor: "#cb9d06"}}><strong>{props.brand}</strong></div>
                <img src={props.img_url} className="card-img-top" alt="..." style={{height: "18rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.name.length<=20?props.name:props.name.substring(0, 20)+" ..."}</h5>
                    <p className="card-text"><strong>Price(₹) {props.price}</strong></p>
                    <button type='button' className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#A${props.pid}`}>Click to Order !</button>
                </div>
            </div>
        </>
    )
}
