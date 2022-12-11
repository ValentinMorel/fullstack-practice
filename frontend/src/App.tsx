import React, { useContext } from 'react';
import './App.css';
import Home from './components/Home/Home';

const logo: string = require("./logo.svg").default;



function App() {
    return (
        <Home />
    );

    /*
    //const authContext = useContext(AuthContext);
    return (
        <div className="App" >
            <header className="App-header" >
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code> src / App.tsx </code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
    */
}

export default App;
