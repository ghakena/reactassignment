import React from 'react';

function Navbar() {
    return (
        <div className="navbar-div">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">MUZIKAL AFRIKA ENT.</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;