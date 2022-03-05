import '../App.css';
import { useEffect } from 'react';

function Landing() {
    useEffect(() => {        
        async function goToStore() {
            await new Promise(resolve => setTimeout(resolve, 5000));

            window.location.href='/menu'
        }

        goToStore();
    }, []);

    return (
        <div className='landing'>
            <h2>AIRBEAN START</h2>
        </div>
    )
}

export default Landing;