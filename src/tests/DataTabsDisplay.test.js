/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen, findAllByRole } from '@testing-library/react';
import DataTabsDisplay from '../components/DataTabsDisplay';
import { TabList } from 'react-tabs';

describe('DataTabsDisplay', () => {

  it('renders tabs and selects temperature tab by default', () => {
    const data = [];
    const setDataName = jest.fn();
    const setStartDate = jest.fn();

    render(<DataTabsDisplay data={data} setDataName={setDataName} setStartDate={setStartDate} />);

    // Check if the tabs are rendered
    const temperatureTab = screen.getByText('Temperatur');
    const humidityTab = screen.getByText('Luftfugtighed');
    const co2Tab = screen.getByText('CO2');

    expect(temperatureTab).toBeInTheDocument();
    expect(humidityTab).toBeInTheDocument();
    expect(co2Tab).toBeInTheDocument();

    // Check if the temperature tab is selected by default
    expect(temperatureTab).toHaveClass('react-tabs__tab--selected');
    expect(humidityTab).not.toHaveClass('react-tabs__tab--selected');
    expect(co2Tab).not.toHaveClass('react-tabs__tab--selected');
  });

  it('sets data name when a tab is clicked', () => {
    const data = [];
    const setDataName = jest.fn();
    const setStartDate = jest.fn();

    render(<DataTabsDisplay data={data} setDataName={setDataName} setStartDate={setStartDate} />);

    // Click on the humidity tab
    const humidityTab = screen.getByText('Luftfugtighed');
    fireEvent.click(humidityTab);

    // Check if the data name is set correctly
    expect(setDataName).toHaveBeenCalledWith('humidity');
  });
});

