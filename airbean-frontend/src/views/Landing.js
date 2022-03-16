import '../App.css';
import { useEffect } from 'react';
import landing from '../assets/graphics/airbean-landing.svg';
import introLeft from '../assets/graphics/intro-graphic-left.svg';
import introRight from '../assets/graphics/intro-graphic-right.svg';

function Landing() {
    useEffect(() => {
        async function goToStore() {
            await new Promise(resolve => setTimeout(resolve, 5000));

            window.location.href = '/menu'
        }

        goToStore();
    }, []);

    return (
        <div className='landing'>
            <img src={introLeft} alt='Left side.' id='intro-left'></img>
            <img src={introRight} alt='Right side.' id='intro-right'></img>
            <img src={landing} alt='AirBean logo.' id='airbean-logo'></img>
        </div>
    )
}

export default Landing;