import React from "react";
import save from './Save.svg'
import facts from './facts.svg'
import estimator from './estimator.svg'
import { Link } from "react-router-dom";


const Carousel = (props) =>{
    return(
       <div className='Container'>
           <div id="myCarousel" className="carousel slide" data-ride="carousel">
               <ol className="carousel-indicators">
                   <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                   <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                   <li data-target="#myCarousel" data-slide-to="2" className=""></li>
               </ol>
               <div className="carousel-inner">
                   <div className="carousel-item carousel-item-next carousel-item-left">
                       <img className="first-slide img-fluid"
                            src={save}
                            alt="First slide"/>
                           <div className="container">
                               <div className="carousel-caption text-left text-dark">
                                   <h1>Whats in it for you?</h1>
                                   <p>Our estimates show that an average user can save 60% of travel costs.</p>
                                   <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                               </div>
                           </div>
                   </div>
                   <div className="carousel-item">
                       <img className="second-slide img-fluid"
                            src={facts}
                            alt="Second slide"/>
                           <div className="container">
                               <div className="carousel-caption text-dark">
                                   <h1>Why to Share Rides</h1>
                                   <p>Here are some common facts why you should.</p>
                                   <p><a className="btn btn-lg btn-primary" href="#" role="button">Login & know more</a></p>
                               </div>
                           </div>
                   </div>
                   <div className="carousel-item active carousel-item-left ">
                       <img className="third-slide img-fluid"
                            src={estimator}
                            alt="Third slide"/>
                           <div className="container">
                               <div className="carousel-caption text-right text-dark">
                                   <h1>Try our experimental feature</h1>
                                   <p>Estimate your ride cost based on the ride details</p>
                                   <Link to="/Estimator" className="btn btn-lg btn-primary" role="button">Try Now</Link>
                               </div>
                           </div>
                   </div>
               </div>
               <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span className="sr-only">Previous</span>
               </a>
               <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                   <span className="carousel-control-next-icon" aria-hidden="true"></span>
                   <span className="sr-only">Next</span>
               </a>
           </div>
       </div>
    );
};

export default Carousel;
