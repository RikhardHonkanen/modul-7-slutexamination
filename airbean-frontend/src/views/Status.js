import '../App.css';
import { useEffect, useState } from 'react';
import drone from '../assets/graphics/drone.svg';

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

    return (
        <div className='status'>
            <h2 className='ordernummer'>Ordernummer #{confirmation.orderNr}</h2>
            <img src={drone} alt='Drone with a cup of coffee.' id='drone'></img>
            <div className='squeeze'>
                <h1 className='your-order'>Din beställning är på väg!</h1>
                <h2 className='eta'><strong>{confirmation.eta}</strong> minuter</h2>
                <div className='quit'>
                    <p className='cool'>Ok, cool!</p>
                </div>
            </div>
        </div>
    )
}

export default Status;