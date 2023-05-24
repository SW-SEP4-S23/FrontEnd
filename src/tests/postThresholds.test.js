
/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import postThresholds from '../services/postThresholds';



describe('postThresholds', () => {


  // Mock functions and variables
  const setServerFail = jest.fn();
  const setServerFailMessage = jest.fn();
  const setIsVisible = jest.fn();


  // Mocking the fetch function
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ id: 123 }),
      headers: {
        get: () => 'application/json',
      },
    })
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });


  it('should make a POST request and handle a successful response', async () => {
    const dataName = 'exampleData';
    const maxValue = 10;
    const minValue = 1;

    // Call the function
    await postThresholds(dataName, maxValue, minValue, setIsVisible, setServerFail, setServerFailMessage);

    // Verify fetch is called with the correct arguments
    expect(fetch).toHaveBeenCalledWith(
      `https://cloud-app-byi2ujnffa-ez.a.run.app/environment/${dataName}/thresholds`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ minValue: minValue, maxValue: maxValue }),
      }
    );

    // Verify setIsVisible is called
    expect(setIsVisible).toHaveBeenCalledWith(true);

    // Verify setServerFailMessage is not called
    expect(setServerFailMessage).toHaveBeenCalledWith([]);
  });



  it('should handle error response', async () => {
    const setIsVisible = jest.fn();
    const setServerFail = jest.fn();
    const setServerFailMessage = jest.fn();

    // Mocking a failed response
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ message: 'Error message' }),
        status: 400,
        headers: {
          get: () => 'application/json',
        },
      })
    );

    await postThresholds('dataName', 10, 5, setIsVisible, setServerFail, setServerFailMessage)

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://cloud-app-byi2ujnffa-ez.a.run.app/environment/dataName/thresholds',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ minValue: 5, maxValue: 10 }),
      }
    );

    expect(setServerFailMessage).toHaveBeenCalledTimes(1);
    expect(setServerFailMessage).toHaveBeenCalledWith('Error message');
  });


  it('should handle network error', async () => {
    // Mock the fetch function to simulate network error
    global.fetch.mockImplementationOnce(() => Promise.reject('Network error'));

    // Call the function
    await postThresholds('dataName', 10, 5, setIsVisible, setServerFail, setServerFailMessage);

    // Assertions
    expect(setServerFailMessage).toHaveBeenCalledWith('Network error');
  });
});
