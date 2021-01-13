import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { VehicleContainer, DetailsContainer, VehicleWrapper } from './Vehicle.styled';
import LoadingSpinner from '../Layout/LoadingSpinner';
import { LoadingSpinnerContainer } from '../Registrations.styled';
import {FormatDate, RegistrationCalculator, RegistrationStatus} from '../FormatFunctions'


const Vehicle = ({ details }) => {
    const [vehicle, setVehicle] = useState();
    const match = useRouteMatch()
    const [loadingSpinner, setLoadingSpinner] = useState(true)

    useEffect(() => {
        setVehicle(details && details.registrations.find(vehicle => {
            return vehicle.plate_number === match.params.plate_number
        }))
        setLoadingSpinner(false)
    }, [match.params])

    const formatVin = (vin) => {
        const formatedVin = [];
        for (let i = 0; i <= vin.length; i++) {
            if (i <= vin.length - 5) {
                formatedVin.push('*')
            } else {
                formatedVin.push(vin[i])
            }
        }
        return formatedVin;
    }

    return (
        <>
            {loadingSpinner && <LoadingSpinnerContainer>
                <LoadingSpinner />
            </LoadingSpinnerContainer>}
            {vehicle && window.location.pathname === `/Registrations/${vehicle.plate_number}` && <VehicleWrapper>
                <h1>Vehicle</h1>
                <VehicleContainer>
                    <DetailsContainer>
                        <h2>Vehicle details</h2>
                        <p data-testid='vehicle-details'><h4>Vehicle: </h4> {vehicle.vehicle.colour} {vehicle.vehicle.make} {vehicle.vehicle.model}</p>
                        <p data-testid='vehicle-plate-number'><h4>Registration plate: </h4> {vehicle.plate_number}</p>
                        <p data-testid='vehicle-vin'><h4>VIN number: </h4> {formatVin(vehicle.vehicle.vin)}</p>
                        <p data-testid='vehicle-shape'><h4>Shape: </h4> {vehicle.vehicle.type}</p>
                        <p data-testid='vehicle-tare-weight'><h4>Tare weight: </h4> {vehicle.vehicle.tare_weight}</p>
                        <p data-testid='vehicle-gross-weight'><h4>Gross weight: </h4>{vehicle.vehicle.gross_mass ? vehicle.vehicle.gross_mass : 'Null'}</p>
                    </DetailsContainer>
                    <DetailsContainer>
                        <h2>Registration details</h2>
                        <p data-testid='registration-status'><h4>Registration Status: </h4> {RegistrationStatus(vehicle.registration.expiry_date)}</p>
                        <p data-testid='registration-remaining'><h4>Expires in: </h4> {RegistrationCalculator(vehicle.registration.expiry_date)} months</p>
                        <p data-testid='registration-expiry'><h4>Expiry date: </h4> {FormatDate(vehicle.registration.expiry_date)}</p>
                        <p data-testid='registration-insurer-name'><h4>Insurer: </h4> {vehicle.insurer.name}</p>
                        <p data-testid='registration-insurer-code'><h4>Insurer code: </h4>{vehicle.insurer.code}</p>
                    </DetailsContainer>
                </VehicleContainer>
            </VehicleWrapper>}
        </>
    )
};

export default Vehicle;