import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function App() {
    return(
        <div className="app-div">
            <Navbar />
            <Home />
            <About />
            <Services />
            <br />
            <footer>
                <Contact />
            </footer>
        </div>
    )
}

export default App;