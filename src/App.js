import React from 'react';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import Container from './components/Container';
import Header from './components/Header';
import './scss/style.scss'

const App = () => {
    return (
        <Router>
            <Header/>
            <Container/>
        </Router>
    );
};

export default App;
