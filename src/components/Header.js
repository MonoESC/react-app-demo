import { Component } from "react";
import logo from '../logo.svg';

function Header({saludos, despedida}){



    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Primer párrafo de prueba: {saludos}</p>
            <p>Me voy... {despedida}</p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
    )
}

export default Header