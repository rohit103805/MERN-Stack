import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginChooser from "./components/LoginChooser";
import Home from "./components/Home";
import Clothes from "./components/Clothes";
import Shoes from "./components/Shoes";
import Mobiles from "./components/Mobiles";
import Orders from "./components/Orders";
import ProductState from "./context/products/ProductState";
import AlertState from "./context/alert/AlertState";

function App(){
    document.body.style.backgroundColor = '#EEDC82'
    return (
        <>
            <AlertState>
                <ProductState>
                    <Router>
                        <Routes>
                            <Route exact path="/" element={<LoginChooser/>}/>
                            <Route exact path="/home" element={<Home/>}/>
                            <Route exact path="/shoes" element={<Shoes/>}/>
                            <Route exact path="/clothes" element={<Clothes/>}/>
                            <Route exact path="/mobiles" element={<Mobiles/>}/>
                            <Route exact path="/orders" element={<Orders/>}/>
                        </Routes>
                    </Router>
                </ProductState>
            </AlertState>
        </>
    );
}

export default App;
