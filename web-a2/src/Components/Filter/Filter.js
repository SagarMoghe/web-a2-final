import React, {Component} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


class Filter extends Component{
    state={
        "startDate" : new Date()

    }

    onChangeHandler =(date)=>{
        let selected = date
        console.log(this.state["startDate"] , new Date(selected));
        if(new Date(this.state["startDate"]) <= new Date(selected)){
            this.setState({"startDate":selected})
        }else{
            this.setState({"startDate":new Date()})
            alert("Cannot choose date in past")
        }
    }



    render(){
        return(
            <div className='jumbotron jumbotron-fluid'>
                <div className="navbar navbar-expand-lg navbar-light ">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#FilterDropdown"
                            aria-controls="FilterDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-dark"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="FilterDropdown">
                        <ul className="navbar-nav justify-content-around container-fluid">
                            <li className="nav-item active">
                                <ul className='list-unstyled'>
                                    <li className='m-3'>
                                        <form className="">
                                            <input className="form-control  m-sm-2 " type="search" placeholder="From"
                                                   aria-label="Search"/>

                                            <input className="form-control  m-sm-2  " type="search" placeholder="Destination"
                                                   aria-label="Search"/>

                                        </form>
                                    </li>
                                </ul>

                            </li>
                            <li className="nav-item m-3 ">
                                <form >
                                    <div> Date: </div>
                                    <div><DatePicker className="btn btn-dark rounded" selected={this.state["startDate"]} onChange={this.onChangeHandler}/></div>

                                </form>

                            </li>
                            <li className="nav-item m-3">
                                <form >
                                    <div><span>Male companion <input type="checkbox"/></span></div>
                                    <div><span>Female companion <input type="checkbox"/></span></div>

                                </form>

                            </li>

                            <li className="nav-item m-3"><button className="btn btn-primary justify-content-end"> Search</button></li>
                        </ul>
                    </div>



                </div>



            </div>
        )
    }

}

export default Filter;
