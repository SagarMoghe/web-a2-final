import React, {Component} from 'react';
import './Estimator.css';

class Estimator extends Component {
    state = {
        distance: 0
    }

    generateOpHandler = (event) => {
        this.setState({
                distance: event.target.value
            }
        )
    }


    render() {
        return (
            <div className='container'>

                <div className="jumbotron">
                    <h1 className="display-4">Cost Estimator</h1>
                    <p className="lead">This is a simple calculator that will help you calculate your fare.</p>

                    <p>Please note that this is an approximation of the cost and car owner charges may vary as per their
                        discretion.</p>
                    <p className="lead ">
                        <a className="float-sm-none float-xl-right disabled" href="#">Learn more</a>
                    </p>
                    <br/>
                    <hr className="my-4"/>
                    <form id='myform' onSubmit="openModal()">
                        <div className="form-row ">
                            <div className="form-group col-md-6 ">
                                <label htmlFor="inputEmail4" className='float-left'>Email</label>
                                <input type="email" className="form-control" id="inputEmail4" required="true"/>
                            </div>
                            <div className="form-group col-md-6 ">
                                <label htmlFor="inputPassword4" className='float-left'>Name</label>
                                <input type="text" className="form-control" id="inputPassword4" required="true"/>
                            </div>
                        </div>
                        <div className="form-group ">
                            <label htmlFor="inputAddress " className='float-left'>Source</label>
                            <input type="text" className="form-control" id="inputAddress"
                                   placeholder="Starting address"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2" className='float-left'>Destination</label>
                            <input type="text" className="form-control" id="inputAddress2"
                                   placeholder="drop-off location"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity" className='float-left'>City</label>
                                <input type="text" className="form-control" id="inputCity"/>
                            </div>

                            <div className="form-group col-md-2">
                                <label htmlFor="inputZip" className='float-left'>Distance journey</label>
                                <input type="number" min="0" className="form-control" id="inputdist" placeholder='Km'
                                       onChange={this.generateOpHandler} required="true"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check float-left">
                                <input className="form-check-input " type="checkbox" id="gridCheck" required='true'/>
                                <label className="form-check-label" htmlFor="gridCheck" >
                                    I agree to terms and conditions
                                </label>
                            </div>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary float-left" data-toggle="modal"
                                data-target="#staticBackdrop" id="formSubmit" >
                            Get an estimate
                        </button>
                    </form>
                </div>

                <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false"
                     tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Your estimate cost is</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                INR: {this.state.distance * 5}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    };
}

export default Estimator;
