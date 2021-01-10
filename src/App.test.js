import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('<Registrations/>', ()=>{
  it('Renders', ()=>{
      const div = document.createElement('div');
      ReactDOM.render(<App/>, div);
  })
  it('Renders correct links', ()=>{
      const {getByTestId} = render(<App/>);
      expect(getByTestId('home-link')).toHaveTextContent('Home');
      expect(getByTestId('business-link')).toHaveTextContent('Business');
      expect(getByTestId('locations-link')).toHaveTextContent('Find Locations');
      expect(getByTestId('registrations-link')).toHaveTextContent('Registrations');
  })
})
