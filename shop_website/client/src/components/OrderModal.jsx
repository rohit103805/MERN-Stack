import React, {useState, useContext} from 'react'
import { createorder } from '../api/Order_calls'
import AlertContext from '../context/alert/AlertContext'

export default function OrderModal(props) {
    const b = useContext(AlertContext);
    const [size, setsize] = useState("")
    const [quantity, setquantity] = useState(0)
    const [disabled, setdisabled] = useState({
        "XS": false,
        "S": false,
        "M": false,
        "L": false,
        "XL": false,
    })
    const [content, setcontent] = useState()
    const updatecontent=(event)=>{
        setcontent(event.target.value);
    }
    const updatesize=(data)=>{
        if(disabled.XS || disabled.S || disabled.M || disabled.L || disabled.XL){
            setsize("")
        }else{
            setsize(data);
        }
        setdisabled({
            "XS": data==="XS"?disabled.XS:!disabled.XS,
            "S": data==="S"?disabled.S:!disabled.S,
            "M": data==="M"?disabled.M:!disabled.M,
            "L": data==="L"?disabled.L:!disabled.L,
            "XL": data==="XL"?disabled.XL:!disabled.XL,
        })
    }
    const updatequantity=(event)=>{
        setquantity(event.target.value>=0?event.target.value:0);
    }

    const putorder=async()=>{
        await createorder(localStorage.getItem("email"), props.pid, props.name, props.img_url, props.price, quantity, size, content);
        b.updateval("Order Placed Successfully !", 'success');
    }
    return (
        <>
            <div className="modal fade" id={`A${props.pid}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Order your product now ! 📦</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label mx-2"><strong>Specify the size:</strong></label>
                                    <div className="form-check form-check-inline">
                                        <input disabled={disabled.XS} className="form-check-input" type="checkbox" id="inlineCheckbox1" onChange={()=>updatesize("XS")}/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">XS</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input disabled={disabled.S} className="form-check-input" type="checkbox" id="inlineCheckbox2" onChange={()=>updatesize("S")}/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">S</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input disabled={disabled.M} className="form-check-input" type="checkbox" id="inlineCheckbox3" onChange={()=>updatesize("M")}/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">M</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input disabled={disabled.L} className="form-check-input" type="checkbox" id="inlineCheckbox4" onChange={()=>updatesize("L")}/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">L</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input disabled={disabled.XL} className="form-check-input" type="checkbox" id="inlineCheckbox5" onChange={()=>updatesize("XL")}/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">XL</label>
                                    </div>
                                </div>
                                <div className="mb-3 mx-2" style={{width: '35%'}}>
                                    <label htmlFor="exampleInputEmail1" className="form-label"><strong>Quantities Required .</strong></label>
                                    <input type="number" className="form-control" id="text" aria-describedby="textHelp" onChange={updatequantity} value={quantity}/>
                                </div>
                                <div className="mb-3 mx-2">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Enter the address.</strong></label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={updatecontent} value={content}></textarea>
                                </div>
                                <span id="HelpInline" className="form-text mx-2">
                                    All the places must be filled !
                                </span>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={putorder}>Create Order !</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
