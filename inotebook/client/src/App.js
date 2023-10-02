import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import AlertState from "./context/alert/AlertState";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
    document.body.style.backgroundColor = '#E8F6EF'
    return (
        <>
            <AlertState>
                <NoteState>
                    <Router>
                        <Routes>
                            <Route exact path='/' element={<Login/>}/>
                            <Route exact path='/signup' element={<Signup/>}/>
                            <Route exact path='/home' element={<Home/>}/>
                        </Routes>
                    </Router>
                </NoteState>
            </AlertState>
        </>
    );
}

export default App;
