import React, { Fragment, useContext } from 'react';
import { Route, HashRouter as Router, Routes, Navigate } from "react-router-dom";
import './App.css';
import AuthContext from './auth/auth';
import AuthForm from './components/Auth/AuthForm';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';

const logo: string = require("./logo.svg").default;

const App = () => {
    const authContext = useContext(AuthContext);

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {!authContext.loggedIn && (
                        <Route path="/auth" element={<AuthForm />} />
                    )}
                </Routes>
            </Layout>
        </Router >

    );
};

export default App;
