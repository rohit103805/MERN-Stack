import {useState} from 'react'
import AlertContext from './AlertContext'

const AlertState=(props)=>{
    const [val, setval] = useState({
        "alert": false,
        "txt": "",
        "color": ""
    });
    const updateval=(txt, color)=>{
        setval({
            "alert": true,
            "txt": txt,
            "color": color
        });
        setTimeout(()=>{
            setval({
                "alert": false,
                "txt": "",
                "color": ""
            });
        }, 1500);
    }
    return(
        <AlertContext.Provider value={{val, updateval}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;