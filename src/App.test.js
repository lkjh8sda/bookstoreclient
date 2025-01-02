import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('App component', () =>{
  it('should render app with err', () => {
    const {asFragment} = render(<App/>);
    expect(asFragment()).toMatchSnapshot();
  });
});