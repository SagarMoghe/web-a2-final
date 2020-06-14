import React from "react";
import './RideCart.scss'

const styles={
    backgroundColor: "#f71e68",
    color:'white'
}
const RideCard = (props) =>{
    return(
                <div className="col-lg-3 col-md-6 ">
                    <div className="card mt-4 mb-5 shadow-lg">
                        <img src={props.source} alt='Image' className='img-fluid' ></img>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h4 className="card-title font-weight-bold">{props.name}</h4>
                                <label className='_addToFav'>
                                    <input type="checkbox" name="favorite" className='d-none'/>
                                    <i className="material-icons _active d-none _textcolor">favorite</i>
                                    <i className="material-icons _inactive _textcolor">favorite_border</i>
                                </label>
                            </div>

                            <div className="card-subtitle text-truncate text-muted my-2">Ride Description</div>
                            <div className="card-text d-flex justify-content-between mt-5 mb-3">
                                <span>Pooling rate</span>
                                <span className="_priceSection d-flex">
                                    <div className='h6 _textcolor'>${props.price} </div>
                                    <div>/per person</div>
                                </span>
                            </div>
                            <button className='btn d-inline-flex text-uppercase text-white font-weight-bold rounded-0 _cartButton position-absolute' style={styles}>
                                <span>Select</span>
                                <i className="material-icons ml-2"> read_more </i>
                            </button>
                        </div>
                    </div>

                </div>
    )
}

export default RideCard;
