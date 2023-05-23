/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import ServerFail from '../components/serverFail';

describe('serverFail', () => {

  it('renders server error message, when there is no serverFailMessage', () => {
    const setServerFail = jest.fn();
    const serverFail = true;

    render(
      <ServerFail setServerFail={setServerFail} serverFail={serverFail} />
    );

    const errorMessage = screen.getByText('Serverfejl, prøv igen senere');
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders serverFailMessage array', () => {
    const setServerFail = jest.fn();
    const serverFail = true;
    const serverFailMessage = ['Failed to fetch data', 'Server is down'];

    render(
      <ServerFail setServerFail={setServerFail} serverFail={serverFail} serverFailMessage={serverFailMessage}/>
    );

    const errorMessage1 = screen.getByText('Error: Failed to fetch data');
    const errorMessage2 = screen.getByText('Error: Server is down');
    expect(errorMessage1).toBeInTheDocument();
    expect(errorMessage2).toBeInTheDocument();

    //check that it doesn't render "Serverfejl, prøv igen senere"
    expect(screen.queryByText('Serverfejl, prøv igen senere')).toBeNull();
  });





  it('should hide the error message after 5 seconds', async () => {
    jest.useFakeTimers();

    const setServerFailMock = jest.fn();
    render(
      <ServerFail setServerFail={setServerFailMock} serverFail={true} />
    );

    expect(screen.getByText('Serverfejl, prøv igen senere')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(setServerFailMock).toHaveBeenCalledWith(false);
    expect(setServerFailMock).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
  });

});
