import React from 'react';
import ReactDOM from 'react-dom';
import Vehicle from './Vehicles/Vehicle'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Registrations from './Registrations';
import { FormatDate, RegistrationCalculator, RegistrationStatus } from './FormatFunctions';

//SEPARATE TEST FILE CREATED TO TEST FUNCTION CALLS 
//AS MOCKING IN THE SAME FILE WAS CAUSING OTHER TESTS TO FAIL

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
        }
    ]
}

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


jest.mock('./FormatFunctions.js', () => ({
    ...jest.requireActual('./FormatFunctions.js'),
    FormatDate: jest.fn(),
    RegistrationCalculator: jest.fn(),
    RegistrationStatus: jest.fn()
}));

describe('Functions are called', () => {
    describe('<Registraions/>', () => {
        it('Renders', () => {
            const div = document.createElement('div');
            ReactDOM.render(<Registrations vehicleDetails={vehicleDetails} loading={false} />, div);
        })
        it('calls FormatDate with correct date', () => {
            render(<Registrations vehicleDetails={vehicleDetails} loading={false} />);
            expect(FormatDate).toHaveBeenCalled();
            expect(FormatDate).toHaveBeenLastCalledWith('2021-07-20T23:15:30.000Z');
        });
        it('calls FormatDate with correct date', () => {
            render(<Registrations vehicleDetails={vehicleDetails} loading={false} />);
            expect(RegistrationCalculator).toHaveBeenCalled();
            expect(RegistrationCalculator).toHaveBeenLastCalledWith('2021-07-20T23:15:30.000Z');
        });
        it('calls FormatDate with correct date', () => {
            render(<Registrations vehicleDetails={vehicleDetails} loading={false} />);
            expect(RegistrationStatus).toHaveBeenCalled();
            expect(RegistrationStatus).toHaveBeenLastCalledWith('2021-07-20T23:15:30.000Z');
        });
    });

    describe('<Vehicle/>', () => {
        it('calls FormatDate with correct date', () => {
            render(<Vehicle details={vehicleDetails} />);
            expect(FormatDate).toHaveBeenCalled();
            expect(FormatDate).toHaveBeenLastCalledWith('2021-07-20T23:15:30.000Z');
        });
        it('calls FormatDate with correct date', () => {
            render(<Vehicle details={vehicleDetails} />);
            expect(RegistrationCalculator).toHaveBeenCalled();
            expect(RegistrationCalculator).toHaveBeenLastCalledWith('2021-07-20T23:15:30.000Z');
        });
        it('calls FormatDate with correct date', () => {
            render(<Vehicle details={vehicleDetails} />);
            expect(RegistrationStatus).toHaveBeenCalled();
            expect(RegistrationStatus).toHaveBeenLastCalledWith('2021-07-20T23:15:30.000Z');
        });
    });
});

