import React from 'react';
import ReactDOM from 'react-dom';
import Vehicle from './Vehicle'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { VehicleDetails } from './Vehicle.styled';

const vehicleDetails = {
    registrations: [
        {
            plate_number: 'ABC123',
            registration: {
                expired: false,
                expiry_date: '2021-07-20T23:15:30.000Z'
            },
            vehicle: {
                type: 'SUV',
                make: 'Mazda',
                model: 'CX3',
                colour: 'White',
                vin: '12345ABCDE',
                tare_weight: '1540',
                gross_mass: '1600'
            },
            insurer: {
                name: 'NRMA',
                code: 27
            }
        },
        {
            plate_number: 'DEF123',
            registration: {
                expired: false,
                expiry_date: '2021-09-12T23:15:30.000Z'
            },
            vehicle: {
                type: 'Hatch',
                make: 'Holden',
                model: 'Astra',
                colour: 'Black',
                vin: '67891FGHIJ',
                tare_weight: '1340',
                gross_weight: '1400'
            },
            insurer: {
                name: 'Allianz',
                code: 32
            }
        }
    ]
}

//mocks react-router-dom useRouteMatch
jest.mock('react-router-dom', () => ({
    __esModule: true,
    ...jest.requireActual('react-router-dom'),
    useRouteMatch: () => ({ path: "/Registrations/:plate_number", url: "/Registrations/ABC123", params: { plate_number: "ABC123" } })
}));

//Mocks window.location.pathname
global.window = Object.create(window);
const path = "/Registrations/ABC123";
Object.defineProperty(window, 'location', {
    value: {
        pathname: path
    }
});

describe('<Vehicle/>', () => {
    it('Renders', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<Vehicle details={vehicleDetails}/>, div);
    })
    describe('Displays correct vehicle details', () => {

        it('Displays the correct vehicles details', () => {
            const {getByTestId} = render(<Vehicle details={vehicleDetails}/>);
            expect(getByTestId('vehicle-details')).toHaveTextContent('White Mazda CX3');
        })
        it('Displays the correct vehicles details', () => {
            const {getByTestId} = render(<Vehicle details={vehicleDetails}/>);
            expect(getByTestId('vehicle-plate-number')).toHaveTextContent('ABC123');
        })
        it('Displays the correct vehicles details', () => {
            const {getByTestId} = render(<Vehicle details={vehicleDetails}/>);
            expect(getByTestId('vehicle-vin')).toHaveTextContent('******BCDE');
        })
        it('Displays the correct vehicles details', () => {
            const {getByTestId} = render(<Vehicle details={vehicleDetails}/>);
            expect(getByTestId('vehicle-shape')).toHaveTextContent('SUV');
        })
        it('Displays the correct vehicles details', () => {
            const {getByTestId} = render(<Vehicle details={vehicleDetails}/>);
            expect(getByTestId('vehicle-tare-weight')).toHaveTextContent('1540');
        })
        it('Displays the correct vehicles details', () => {
            const {getByTestId} = render(<Vehicle details={vehicleDetails}/>);
            expect(getByTestId('vehicle-gross-weight')).toHaveTextContent('1600');
        })
    })
    describe('Displays correct registration details', ()=>{
        it('Displays the correct vehicles details', () => {
            const {getByTestId} = render(<Vehicle details={vehicleDetails}/>);
            expect(getByTestId('registration-status')).toHaveTextContent('Active');
        })
        it('Displays the correct vehicles details', () => {
            const {getByTestId} = render(<Vehicle details={vehicleDetails}/>);
            expect(getByTestId('registration-remaining')).toHaveTextContent('07 months');
        })
        it('Displays the correct vehicles details', () => {
            const {getByTestId} = render(<Vehicle details={vehicleDetails}/>);
            expect(getByTestId('registration-expiry')).toHaveTextContent('20 July 2021');
        })
        it('Displays the correct vehicles details', () => {
            const {getByTestId} = render(<Vehicle details={vehicleDetails}/>);
            expect(getByTestId('registration-insurer-name')).toHaveTextContent('NRMA');
        })
        it('Displays the correct vehicles details', () => {
            const {getByTestId} = render(<Vehicle details={vehicleDetails}/>);
            expect(getByTestId('registration-insurer-code')).toHaveTextContent(27);
        })
    })
})