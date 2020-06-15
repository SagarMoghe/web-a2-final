import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Carousel from "./Components/Carousel/Carousel";
import Footer from './Components/Footer/Footer';
import Estimator from "./Components/Estimator/Estimator";
import LoggedNav from "./Components/LoggedNav/LoggedNav";
import Reset from "./Components/Reset/Reset";
import SearchResult from "./Components/SearchResults/SearchResult";


function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
              <Route path='/' exact component={Navbar}>
                  <Carousel/>
                  <Footer/>
              </Route>
              <Route path="/Estimator" exact component={Navbar}>
                  <Estimator/>
                  <Footer/>
              </Route>
              <Route path="/reset" exact >
                <LoggedNav name="Dynamic_User"/>
                <Reset/>
                <Footer/>
              </Route>

              <Route path="/result" exact >
                  <SearchResult></SearchResult>
                  <Footer/>
              </Route>

          </Switch>


        </div>
      </Router>

  );
}

export default App;
