/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import DataTabsDisplay from '../components/DataTabsDisplay';

describe('DataTabsDisplay', () => {
  const data = [
    { id: 1, createdAt: '2023-05-09T12:34:56Z', measurement: 123 },
    { id: 2, createdAt: '2023-05-09T12:45:06Z', measurement: 456 },
  ];

  test('renders three tabs', () => {
    const { getByText } = render(<DataTabsDisplay />);
    const tempTab = getByText('Temperatur');
    const humidityTab = getByText('Fugtighed');
    const co2Tab = getByText('CO2');
    expect(tempTab).toBeInTheDocument();
    expect(humidityTab).toBeInTheDocument();
    expect(co2Tab).toBeInTheDocument();
  });

  test('clicking on a tab displays the correct data container', () => {
    const { getByText, getByTestId } = render(<DataTabsDisplay setDataName={()=>{}}/>);
    const tempTab = getByText('Temperatur');
    fireEvent.click(tempTab);
    const tempContainer = getByTestId('temperature-container');
    expect(tempContainer).toBeInTheDocument();

    const humidityTab = getByText('Fugtighed');
    fireEvent.click(humidityTab);
    const humidityContainer = getByTestId('humidity-container');
    expect(humidityContainer).toBeInTheDocument();

    const co2Tab = getByText('CO2');
    fireEvent.click(co2Tab);
    const co2Container = getByTestId('co2-container');
    expect(co2Container).toBeInTheDocument();
  });
});