/**
 * @jest-environment jsdom
 */

// Import dependencies
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnvironmentValues from '../routes/EnvironmentValues';
import fetchData from '../services/fetchData';

// Mock the fetchData function
jest.mock('../services/fetchData');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe('EnvironmentValues component', () => {
  // Test the initial state
  it('renders without crashing', async () => {
    render(<EnvironmentValues />);
  });
/*
  // Test setting new values and displaying the OkBox
  it('should set new values and display the OkBox', async () => {
    render(<EnvironmentValues />);
    const minValueInput = screen.getAllByLabelText('min:')[0];
    const maxValueInput = screen.getAllByLabelText('max:')[0];
    const setValuesButton = screen.getAllByText('OK')[0];
    const okBox = screen.getByTestId('ok-box');

    // Mock the fetch response
    fetchData.mockImplementationOnce(() => Promise.resolve({ status: 200 }));

    // Set new values and click the button
    await act(async () => {
      fireEvent.change(minValueInput, { target: { value: '10' } });
      fireEvent.change(maxValueInput, { target: { value: '20' } });
      fireEvent.click(setValuesButton);
    });

    // Check that the OkBox is visible and has the correct text
    expect(okBox).toBeInTheDocument();
    expect(okBox).toHaveTextContent('Værdierne er sat!');

    // Check that the fetch function was called with the correct parameters
    expect(fetchData).toHaveBeenCalledWith('temperature', expect.any(Date), expect.any(Date), expect.any(Function));
    expect(fetchData).toHaveBeenCalledWith('humidity', expect.any(Date), expect.any(Date), expect.any(Function));
    expect(fetchData).toHaveBeenCalledWith('co2', expect.any(Date), expect.any(Date), expect.any(Function));
  });
  */
});
