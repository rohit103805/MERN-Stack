import React, {useContext} from 'react'
import AlertContext from '../context/alert/AlertContext'

export default function Alert() {
    const b = useContext(AlertContext);
    return (
        b.val.alert &&<>
            <div className={`alert sticky-top alert-${b.val.color}`} role="alert">
                <strong>{b.val.txt}</strong>
            </div>
        </>
    )
}
