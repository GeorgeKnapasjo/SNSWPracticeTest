import React, { useEffect, useState } from 'react';
import {useRouteMatch} from 'react-router-dom';
import {VehicleContainer, VehicleDetails, VehicleWrapper, RegistrationDetails} from './Vehicle.styled';
import LoadingSpinner from '../Layout/LoadingSpinner';
import {LoadingSpinnerContainer} from '../HomePage.styled';


const Vehicle = ({ details}) => {
    const[vehicle, setVehicle] = useState();
    const match = useRouteMatch()
    const [loadingSpinner, setLoadingSpinner] = useState(true)

    useEffect(()=>{
        setVehicle(details && details.registrations.find(vehicle =>{
            return vehicle.plate_number === match.params.plate_number
        }))
        setLoadingSpinner(false)
    },[match.params])

    const formatDate = (expiryDate) => {
        var date = new Date(expiryDate);
        const formatedDate = new Intl.DateTimeFormat('en-AU', {
            year: 'numeric', 
            month: 'long', 
            day: '2-digit'})
            .format(date)
        return (formatedDate)
    }

    const formatVin = (vin) => {
        const formatedVin = [];
        for(let i = 0; i <= vin.length; i++){
            if(i <= vin.length -5){
                formatedVin.push('*')
            }else{
                formatedVin.push(vin[i])
            }
        }
        return formatedVin
    }

    //data returned from API may be incorrect, thus checking against most current date
    const RegistrationStatus = (expDate) => {
        const expiry = new Date(expDate);
        if(expiry < new Date()){
            return 'Expired'
        } 
        else{
            return 'Active'
        }
    }

    const RegistrationCalculator = (expDate) => {
        const expiry = new Date(expDate)
        if(expiry < new Date()){
            return 0;
        }
        const diff = Math.abs(new Date() - expiry)
        const formatedDate = new Intl.DateTimeFormat('en-AU', {
            month: '2-digit'
        })
            .format(diff)
        return(formatedDate)
    }


    return(
        <VehicleWrapper>
            <h1>Vehicle</h1>
                <VehicleContainer>
                {loadingSpinner && <LoadingSpinnerContainer>
                    <LoadingSpinner />
                </LoadingSpinnerContainer>}
            {vehicle && <>
                        <VehicleDetails>
                            <h2>Vehicle details</h2>
                            <p><h4>Vehicle: </h4> {vehicle.vehicle.colour} {vehicle.vehicle.make} {vehicle.vehicle.model}</p>
                            <p><h4>Registration plate: </h4> {vehicle.plate_number}</p>
                            <p><h4>VIN number: </h4> {formatVin(vehicle.vehicle.vin)}</p>
                            <p><h4>Shape: </h4> {vehicle.vehicle.type}</p>
                            <p><h4>Tare weight: </h4> {vehicle.vehicle.tare_weight}</p>
                            <p><h4>Gross weight: </h4>{ vehicle.vehicle.gross_mass ? vehicle.vehicle.gross_mass : 'Null'}</p>
                        </VehicleDetails>
                        <RegistrationDetails>
                            <h2>Registration details</h2>
                            <p><h4>Registration Status: </h4> {RegistrationStatus(vehicle.registration.expiry_date)}</p>
                            <p><h4>Expires in: </h4> {RegistrationCalculator(vehicle.registration.expiry_date)} months</p>
                            <p><h4>Expiry date: </h4> {formatDate(vehicle.registration.expiry_date)}</p>
                            <p><h4>Insurer: </h4> {vehicle.insurer.name}</p>
                            <p><h4>Insurer code: </h4>{vehicle.insurer.code}</p>
                        </RegistrationDetails>
                        </>
            }
            </VehicleContainer>
        </VehicleWrapper>
    )
};

export default Vehicle;