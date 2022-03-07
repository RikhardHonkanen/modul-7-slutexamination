import '../App.css';
import { useEffect } from 'react';

function Status() {
    let orderNr = "";

    useEffect(() => {
        async function getStatus() {
            let url = "http://localhost:5000/api/beans"
            const response = await fetch (url, {
                method:"POST"
            });
            const confirmation = await response.json();
            orderNr = confirmation.orderNr;
            console.log(orderNr);
        }
        
        getStatus();
    }, []);


    // ???    
    return (        
        <div className='status'>
            <h2>Ordernummer #{orderNr}</h2>
        </div>
    )
}

export default Status;