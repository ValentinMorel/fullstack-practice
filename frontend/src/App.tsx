import React, { Fragment } from 'react';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';

const logo: string = require("./logo.svg").default;

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Layout>
        </Router >

    );
};

export default App;
