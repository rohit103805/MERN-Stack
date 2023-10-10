import React, {useContext, useEffect} from 'react'
import Navbar from './Navbar'
import {useNavigate} from 'react-router-dom';
import ProductContext from '../context/products/ProductContext'
import EmptyMessage from './EmptyMessage';
import Product from './Product';


export default function Mobiles() {
    const a = useContext(ProductContext);
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("email")!==null){
            a.getproducts("Mobiles");
            console.log("Fetched");
        }else{
            navigate("/")
        }
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <Navbar/>
            <div className="container my-3">
                <div className="row">
                    {a.products.length!==0?a.products.map((element, index)=>{
                        return <div className="col" key={index}>
                            <Product name={element.name} img_url={element.img_url} brand={element.brand} category={element.category} price={element.price} color={element.color} pid={element._id}/>
                        </div>
                    }):<EmptyMessage/>}
                </div>
            </div>
        </>
    )
}
