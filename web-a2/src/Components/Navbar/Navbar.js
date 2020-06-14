import React from 'react';
import './navbar.css'
import './navbar.css'

const navbar = (prop) =>{
    return(
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm ">
                <a className="navbar-brand " href="#">Ride-Share</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Looking for a Ride?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Share your ride</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Free cost estimator</a>
                        </li>
                    </ul>

                    <div >
                        <button type="button" className="btn btn-outline-success m-1">Login</button>
                        <button type="button" className="btn btn-outline-success m-1">Sign-up</button>
                    </div>
                </div>


            </nav>
        </div>
    );
};

export default navbar;
