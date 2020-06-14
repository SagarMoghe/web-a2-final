import React from "react";
import './LoggedNav.css';
import { Link } from "react-router-dom";

const LoggedNav=(Props)=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <div>
                    <a className="navbar-brand" href="#">Navbar</a>

                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to='/'><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Search a ride</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Post</a>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    My-Account
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Profile  {Props.name}</a>
                                    <a className="dropdown-item" href="#">Settings</a>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    )

}

export default LoggedNav;
