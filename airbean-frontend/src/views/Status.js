import '../App.css';
import { useEffect } from 'react';

function Status() {
    useEffect(() => {
        getStatus();
    }, []);

    async function getStatus() {
        let url = "http://localhost:5000/api/beans"
        const response = await fetch (url, {
            method:"POST"
        });
        const confirmation = await response.json();
        console.log(confirmation);
    }

    return (
        <div className='status'>
            <h2>Order confirmation</h2>
        </div>
    )
}

export default Status;