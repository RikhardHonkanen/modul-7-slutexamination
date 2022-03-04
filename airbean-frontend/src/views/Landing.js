import '../App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter, Navigate, Route, Routes, useNavigate,
} from 'react-router-dom';
import Menu from '../views/Menu'


function Landing() {
    const navigate = useNavigate();
    useEffect(() => {
        
        async function goToStore() {
            console.log("Timer start");
            await new Promise(resolve => setTimeout(resolve, 5000));
            console.log("Timer stop");

            window.location.href='/menu'
        }

        goToStore();

    }, []);

    return (
        <h2>AIRBEAN START</h2>
    )
}

export default Landing;