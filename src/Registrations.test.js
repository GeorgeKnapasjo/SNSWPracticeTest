import React from 'react';
import ReactDOM from 'react-dom';
import Registrations from './Registrations';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const vehicleDetails = {
    registrations: [
        {
            plate_number: 'ABC123',
            registration: {
                expired: false,
                expiry_date: '2021-07-20T23:15:30.000Z'
            },
            vehicle: {
                type: 'Wagon',
                make: 'Mazda',
                model: 'CX3',
                colour: 'White',
                vin: '12345ABCDE',
                tare_weight: '1540',
                gross_weight: '1600'
            },
            insurer: {
                name: 'NRMA',
                code: 27
            }
        }
    ]
}
//mocks react-router-dom useRouteMatch
jest.mock('react-router-dom', () => ({
    __esModule: true,
    ...jest.requireActual('react-router-dom'),
    useRouteMatch: ()=>({path: "/Registrations", url: "/Registrations"})
  }));

//Mocks window.location.pathname
global.window = Object.create(window);
const path = "/Registrations";
Object.defineProperty(window, 'location', {
  value: {
    pathname: path
  }
});

describe('<Registrations/>', ()=>{
    it('Renders', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<Registrations vehicleDetails={vehicleDetails} loading={false}/>, div);
    })
    it('Displays registration plate', ()=>{
        const {getByTestId} = render(<Registrations vehicleDetails={vehicleDetails} loading={false}/>);
        expect(getByTestId('heading')).toHaveTextContent('ABC123');
    })
    it('Displays vehicle details', ()=>{
        const {getByTestId} = render(<Registrations vehicleDetails={vehicleDetails} loading={false}/>);
        expect(getByTestId('vehicle-details')).toHaveTextContent('White Mazda CX3');
    })
    it('Displays registration expiry in correct format', ()=>{
        const {getByTestId} = render(<Registrations vehicleDetails={vehicleDetails} loading={false}/>);
        expect(getByTestId('registration-expiry')).toHaveTextContent('21 July 2021');
    })
    it('Displays correct registration status', ()=>{
        const {getByTestId} = render(<Registrations vehicleDetails={vehicleDetails} loading={false}/>);
        expect(getByTestId('registration-remaining')).toHaveTextContent('07 months');
    })
})
