/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import DataTabsDisplay from '../components/DataTabsDisplay';

describe('DataTabsDisplay', () => {
  const dataName = 'temperature';
  const data = [
    { id: 1, timestamp: '2023-05-09T12:34:56Z', [dataName]: 123 },
    { id: 2, timestamp: '2023-05-09T12:45:06Z', [dataName]: 456 },
  ];

  test('renders three tabs', () => {
    const { getByText, getAllByText } = render(<DataTabsDisplay />);
    const tempTab = getAllByText('Temperatur')[0];
    const humidityTab = getAllByText('Luftfugtighed')[0];
    const co2Tab = getAllByText('CO2')[0];
    expect(tempTab).toBeInTheDocument();
    expect(humidityTab).toBeInTheDocument();
    expect(co2Tab).toBeInTheDocument();
  });

  test('clicking on a tab displays the correct data container', () => {
    const { getByText, getByTestId, getAllByText } = render(<DataTabsDisplay setDataName={()=>{}}/>);
    const tempTab = getAllByText('Temperatur')[0];
    fireEvent.click(tempTab);
    const tempContainer = getByTestId('temperature-container');
    expect(tempContainer).toBeInTheDocument();

    const humidityTab = getAllByText('Luftfugtighed')[0];
    fireEvent.click(humidityTab);
    const humidityContainer = getByTestId('humidity-container');
    expect(humidityContainer).toBeInTheDocument();

    const co2Tab = getAllByText('CO2')[0];
    fireEvent.click(co2Tab);
    const co2Container = getByTestId('co2-container');
    expect(co2Container).toBeInTheDocument();
  });
});