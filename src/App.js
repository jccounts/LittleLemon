import React from 'react';
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import './App.css';

function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <Routing/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
