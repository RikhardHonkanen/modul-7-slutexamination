import '../App.css';
import { useEffect, useState } from 'react';

function Status() {
    const [confirmation, setConfirmation] = useState({});

    useEffect(() => {
        async function getStatus() {
            let url = "http://localhost:5000/api/beans"
            const response = await fetch(url, {
                method: "POST"
            });
            const confirmationObject = await response.json();
            setConfirmation(confirmationObject);
        }

        getStatus();
    }, []);


    // ???    
    return (
        <div className='status'>
            <h2>Ordernummer #{confirmation.orderNr}</h2>
            <h2>ETA #{confirmation.eta}</h2>
        </div>
    )
}

export default Status;