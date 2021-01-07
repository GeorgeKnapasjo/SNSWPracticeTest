import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './HomePage';
import { NavBarStyled } from './Layout/NavBar.styled';
import SNSWLogo from './imgs/SNSW-logos.png';

const App = () => {
  const [vehicleData, setVehicleData] = useState();
  const [loading, setLoading] = useState(true);
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://bit.ly/3fqZZ3Y'


  useEffect(() => {
    // try{
    fetch(proxyUrl + targetUrl)
      .then(res => res.json())
      .then(data => {
        setVehicleData(data)
        setLoading(false);
      })
    // }
    // catch(e){

    // }
  }, []);
  return (
    <div>
      <NavBarStyled>
        <div>
          <img src={SNSWLogo} width="auto" height="55px" alt="NSW Government and Service NSW Logo"></img>
        </div>
        <Link to='/'>Home</Link>
        <Link to='/'>Business </Link>
        <Link to='/'>Find Locations</Link>
        <Link to='/Registrations'>Registrations</Link>
          </NavBarStyled>

        <Switch>
          <Route path="/Registrations">
            <HomePage vehicleDetails={vehicleData} loading={loading} />
          </Route>
          <Route path="/">

          </Route>
        </Switch>
    </div>
  );
}

export default App;
