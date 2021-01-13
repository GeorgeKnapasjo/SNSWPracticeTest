import React, { useEffect, useState } from 'react';
import { Link, Route, useRouteMatch, BrowserRouter as Router } from 'react-router-dom';
import { StyledCard, CardContainer, LoadingSpinnerContainer } from './Registrations.styled';
import LoadingSpinner from './Layout/LoadingSpinner';
import Vehicle from './Vehicles/Vehicle';
import Sedan from './imgs/Sedan.png'
import Hatch from './imgs/Hatch.png'
import SUV from './imgs/SUV.png'
import Wagon from './imgs/Wagon.png'

export const FormatDate = (expiryDate) => {
    var date = new Date(expiryDate);
    date.setDate(date.getDate() - 1);
    const formatedDate = new Intl.DateTimeFormat('en-AU', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    })
        .format(date)
        return (formatedDate)
}

export const RegistrationCalculator = (expDate) => {
    const expiry = new Date(expDate)
    expiry.setDate(expiry.getDate() - 1);
    if (expiry < new Date()) {
        return 0;
    }
    const diff = Math.abs(new Date() - expiry)
    const formatedDate = new Intl.DateTimeFormat('en-AU', {
        month: '2-digit'
    })
        .format(diff)
    return (formatedDate)
}
    //data returned from API may be incorrect, thus checking against most current date
export const RegistrationStatus = (expDate) => {
    const expiry = new Date(expDate);
    expiry.setDate(expiry.getDate() - 1);
    if (expiry < new Date()) {
        return 'Expired'
    }
    else {
        return 'Active'
    }
}

const HomePage = ({ vehicleDetails, loading }) => {
    let match = useRouteMatch();
    const [pageData, setPageData] = useState();
    
    const FormatVehicleShape = (shape) => {
        switch (shape) {
            case 'Sedan':
                return <img src={Sedan} alt={shape} />
            case 'Hatch':
                return <img src={Hatch} alt={shape} />
            case 'SUV':
                return <img src={SUV} alt={shape} />
            case 'Wagon':
                return <img src={Wagon} alt={shape} />
            default:
                break;
        }
    }
    useEffect(() => {
        vehicleDetails && setPageData(vehicleDetails.registrations.map(data => <>
            <StyledCard>
                    <a href={`${match.url}/${data.plate_number}`} data-testid=''>
                        {FormatVehicleShape(data.vehicle.type)}
                        <h2 data-testid='heading'>{data.plate_number}</h2>
                        <p data-testid='vehicle-details'>{data.vehicle.colour} {data.vehicle.make} {data.vehicle.model}</p>
                        <p data-testid='registration-status'>Registration Status: {RegistrationStatus(data.registration.expiry_date)}</p>
                        <p data-testid='registration-expiry'>Expiry date: {FormatDate(data.registration.expiry_date)}</p>
                        <p data-testid='registration-remaining'>Expires in: {RegistrationCalculator(data.registration.expiry_date)} months </p>
                    </a>
            </StyledCard>
        </>
        )
        )

    }, [vehicleDetails])

    return (
        <>
            <Router>
                {(window.location.pathname === '/Registrations' || window.location.pathname === '/Registrations/') &&
                    (
                        <CardContainer>
                            <h1 >Registrations</h1>
                            {loading && <LoadingSpinnerContainer>
                                <LoadingSpinner />
                            </LoadingSpinnerContainer>}
                            {pageData}
                        </CardContainer>
                    )
                }
                <Route path={`${match.path}/:plate_number`}>
                    <Vehicle details={vehicleDetails} />
                </Route>
            </Router>
        </>
    );
}

export default HomePage;