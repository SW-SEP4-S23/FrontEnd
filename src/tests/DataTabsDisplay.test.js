/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import DataTabsDisplay from '../components/DataTabsDisplay';

describe('DataTabsDisplay', () => {

  it('renders three tabs', () => {
    render(<DataTabsDisplay />);
    const tempTab = screen.getByText('Temperatur');
    const humidityTab = screen.getByText('Luftfugtighed');
    const co2Tab = screen.getByText('CO2');
    expect(tempTab).toBeInTheDocument();
    expect(humidityTab).toBeInTheDocument();
    expect(co2Tab).toBeInTheDocument();
  });

  it('clicking on a tab displays the correct data container', () => {
    render(<DataTabsDisplay setDataName={()=>{}}/>);
    const tempTab = screen.getByText('Temperatur');
    fireEvent.click(tempTab);
    const tempContainer = screen.getByTestId('temperature-container');
    expect(tempContainer).toBeInTheDocument();

    const humidityTab = screen.getByText('Luftfugtighed');
    fireEvent.click(humidityTab);
    const humidityContainer = screen.getByTestId('humidity-container');
    expect(humidityContainer).toBeInTheDocument();

    const co2Tab = screen.getByText('CO2');
    fireEvent.click(co2Tab);
    const co2Container = screen.getByTestId('co2-container');
    expect(co2Container).toBeInTheDocument();
  });
});