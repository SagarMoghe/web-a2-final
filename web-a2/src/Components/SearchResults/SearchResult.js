import React, {Component} from 'react';
import LoggedNavbar from "../LoggedNav/LoggedNav";
import Filter from "../Filter/Filter";
import RideCard from "../RideCard/RideCard";
import pic from "../../pic.jpg";

class SearchResult extends Component{
render() {
    return(
        <div>
            <LoggedNavbar name='dynamicUserName'></LoggedNavbar>
            <Filter></Filter>
            <div className='container-fluid row d-flex'>
                <RideCard name="Sagar" source={pic} price={10} ></RideCard>
                <RideCard name="Sagar" source={pic} price={10} ></RideCard>
                <RideCard name="Sagar" source={pic} price={10} ></RideCard>
                <RideCard name="Sagar" source={pic} price={10} ></RideCard>
                <RideCard name="Sagar" source={pic} price={10} ></RideCard>
                <RideCard name="Sagar" source={pic} price={10} ></RideCard>
                <RideCard name="Sagar" source={pic} price={10} ></RideCard>
                <RideCard name="Sagar" source={pic} price={10} ></RideCard>
                <RideCard name="Sagar" source={pic} price={10} ></RideCard>
                <RideCard name="Sagar" source={pic} price={10} ></RideCard>
                <RideCard name="Sagar" source={pic} price={10} ></RideCard>
                <RideCard name="Sagar" source={pic} price={10} ></RideCard>

            </div>
        </div>

    )

}
}

export default SearchResult;
