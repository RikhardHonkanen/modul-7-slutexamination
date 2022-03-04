import '../App.css';
import { useEffect } from 'react';
import {
  BrowserRouter, Navigate, Route, Routes, useNavigate,
} from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
    useEffect(() => {
        
        async function goToStore() {
            await new Promise(resolve => setTimeout(resolve, 5000));

            window.location.href='/menu'
        }

        goToStore();

    }, []);

    return (
        <h2>AIRBEAN START</h2>
    )
}

export default Landing;