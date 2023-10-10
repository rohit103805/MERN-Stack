import {useState} from "react";
import ProductContext from "./ProductContext";
import { getdata } from "../../api/Product_calls";

const ProductState=(props)=>{
    const [products, setproducts] = useState([])
    const getproducts=async(category)=>{
        let result = await getdata(category);
        setproducts(result)
    }
    return(
        <ProductContext.Provider value={{products, getproducts}}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductState;