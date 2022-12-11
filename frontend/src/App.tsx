import React, { useContext } from 'react';
import './App.css';
import Home from './components/Home/Home';

const logo: string = require("./logo.svg").default;

function App() {
    return (
        <Home />
    );
}

export default App;
