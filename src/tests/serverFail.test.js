/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import ServerFail from '../components/serverFail';

describe('serverFail', () => {

    it('renders server error message', () => {
        const setServerFail = jest.fn();
        const serverFail = true;

        render(
            <ServerFail setServerFail={setServerFail} serverFail={serverFail} />
        );

        const errorMessage = screen.getByText('Serverfejl, prøv igen senere');
        expect(errorMessage).toBeInTheDocument();
    });

    it('should hide the error message after 3 seconds', async () => {
        jest.useFakeTimers();
    
        const setServerFailMock = jest.fn();
        render(
          <ServerFail setServerFail={setServerFailMock} serverFail={true} />
        );
    
        expect(screen.getByText('Serverfejl, prøv igen senere')).toBeInTheDocument();
    
        act(() => {
          jest.advanceTimersByTime(3000);
        });
    
        expect(setServerFailMock).toHaveBeenCalledWith(false);
        expect(setServerFailMock).toHaveBeenCalledTimes(1);
    
        jest.useRealTimers();
      });

});
