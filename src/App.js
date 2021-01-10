import React, { useEffect, useState } from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Registrations';
import { NavBarStyled, LinkContainer } from './Layout/NavBar.styled';
import SNSWLogo from './imgs/SNSW-logos.png';
import LandingPage from './LandingPage/LandingPage';

const App = () => {
  const [vehicleData, setVehicleData] = useState();
  const [loading, setLoading] = useState(true);

  //proxy URL added to bipass cors restrictions
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://bit.ly/3fqZZ3Y'


  useEffect(() => {
    try{
    fetch(proxyUrl + targetUrl)
      .then(res => res.json())
      .then(data => {
        setVehicleData(data)
        setLoading(false);
      })
    }
    catch(e){
      setVehicleData(<div style={{textAlign:'center'}}><h2>Error fetching information, please try again later</h2></div>);
      setLoading(false);
    }
  }, []);
  return (
    <>
    <Router>
      <NavBarStyled>
        <div>
          <img src={SNSWLogo} alt="NSW Government and Service NSW Logo"></img>
        </div>
        <LinkContainer>
        <Link data-testid='home-link' to='/'>Home</Link>
        <a data-testid='business-link' href='https://mybusiness.service.nsw.gov.au/'>Business </a>
        <a data-testid='locations-link' href='https://www.service.nsw.gov.au/service-centre'>Find Locations</a>
        <Link data-testid='registrations-link' to='/Registrations'>Registrations</Link>
        </LinkContainer>
          </NavBarStyled>

        <Switch>
          <Route path="/Registrations">
            <HomePage vehicleDetails={vehicleData} loading={loading}/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
        </Router>
    </>
  );
}

export default App;
