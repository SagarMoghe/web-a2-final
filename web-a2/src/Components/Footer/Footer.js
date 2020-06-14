import React from 'react';
import './Footer.css'

const footer = (props) => {
    return(
        <div className="main-footer" >
            <div className='container-fluid'>
                <div className='center-text row'>
                    <ul className='list-inline d-md-inline-flex justify-content-around w-100'>
                        <li className='list-inline-item'>
                            <div className='col center-text'>
                                <h4>Ride-Share Inc</h4>
                                <ul className='list-unstyled'>
                                    <li>Unit-123</li>
                                    <li>4567, South Park Street</li>
                                    <li>Halifax, NS</li>
                                    <li>+1 (234)-567-89100</li>
                                </ul>
                            </div>
                        </li>

                        <li className='list-inline-item'>
                            <div className='col center_text'>
                                <h4>Ride-Share Inc</h4>
                                <ul className='list-unstyled'>
                                    <li>Unit-123</li>
                                    <li>4567, South Park Street</li>
                                    <li>Halifax, NS</li>
                                    <li>+1 (234)-567-89100</li>
                                </ul>
                            </div>
                        </li>

                        <li className='list-inline-item'>
                            <div className='col center_text'>
                                <h4>Ride-Share Inc</h4>
                                <ul className='list-unstyled'>
                                    <li>Unit-123</li>
                                    <li>4567, South Park Street</li>
                                    <li>Halifax, NS</li>
                                    <li>+1 (234)-567-89100</li>
                                </ul>
                            </div>
                        </li>

                        <li className='list-inline-item'>
                            <div className='col center_text'>
                                <h4>Ride-Share Inc</h4>
                                <ul className='list-unstyled'>
                                    <li>Unit-123</li>
                                    <li>4567, South Park Street</li>
                                    <li>Halifax, NS</li>
                                    <li>+1 (234)-567-89100</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <hr className='hr-line'/>
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} Ride-Share Inc | All rights reserved | Terms of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default footer
