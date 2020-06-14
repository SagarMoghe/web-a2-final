import React, {Component} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

let startDate = new Date()



class Filter extends Component{
    state={
        startDate : new Date()
    }

    onChangeHandler =(date)=>{
        let selected = date
        if(this.state.startDate>= new Date(selected)){
            this.setState({startDate:selected})
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
                        <ul className="navbar-nav justify-content-between">
                            <li className="nav-item active">
                                <ul className='list-unstyled'>
                                    <li>
                                        <form className="">
                                            <input className="form-control  m-sm-2  " type="search" placeholder="From"
                                                   aria-label="Search"/>

                                            <input className="form-control  m-sm-2  " type="search" placeholder="Destination"
                                                   aria-label="Search"/>
                                            <span> Date: <DatePicker className="btn btn-dark rounded" selected={startDate} onChange={this.onChangeHandler}/></span>
                                        </form>
                                    </li>
                                    <li>

                                    </li>
                                </ul>

                            </li>
                            <li className="nav-item">
                                <form >

                                </form>

                            </li>
                            <li className="nav-item">
                                <span>Female only <input type="checkbox"/></span>
                                <span></span>
                            </li>
                        </ul>
                    </div>



                </div>



            </div>
        )
    }

}

export default Filter;
