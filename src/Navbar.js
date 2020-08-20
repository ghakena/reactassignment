import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar-div">
            <nav className="navbar text-muted navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">MUZIKAL AFRIKA ENT</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/about" className="nav-link">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link">SERVICES</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">CONTACT US</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;