import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './HomePage';
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
      setVehicleData('Error, unable to fetch data, please try again later');
      console.log(e)
      setLoading(false);
    }
  }, []);
  return (
    <>
      <NavBarStyled>
        <div>
          <img src={SNSWLogo} alt="NSW Government and Service NSW Logo"></img>
        </div>
        <LinkContainer>
        <Link to='/'>Home</Link>
        <Link to='/'>Business </Link>
        <Link to='/'>Find Locations</Link>
        <Link to='/Registrations'>Registrations</Link>
        </LinkContainer>
          </NavBarStyled>

        <Switch>
          <Route path="/Registrations">
            <HomePage vehicleDetails={vehicleData} loading={loading} />
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
    </>
  );
}

export default App;
