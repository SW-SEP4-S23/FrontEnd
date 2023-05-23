/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import postThresholds from '../services/postThresholds';

describe('postThresholds', () => {
    let fetchMock;
    let setHttpResponseCodeMock;

    beforeEach(() => {
        fetchMock = jest.fn();
        setHttpResponseCodeMock = jest.fn();
        global.fetch = fetchMock;
    });

    afterEach(() => {
        delete global.fetch;
    });


    it('should make a POST request with correct data', async () => {
        const thresholds = { value: 5 };
        const response = {
            ok: true,
            status: 200,
            headers: {
                get: jest.fn().mockReturnValue('application/json'),
            }
        };

        fetchMock.mockResolvedValue(response);

        postThresholds(thresholds);

        expect(fetchMock).toHaveBeenCalledWith('https://cloud-app-byi2ujnffa-ez.a.run.app/thresholds', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ thresholds }),
        });
    });

    it('should handle error response and log the error', async () => {
        const thresholds = { value: 5 };
        const response = {
          ok: false,
          status: 400,
          json: jest.fn().mockResolvedValue({ message: 'Bad Request' }),
          headers: {
            get: jest.fn().mockReturnValue('application/json'),
          },
        };
        const error = new Error('Bad Request');
        fetchMock.mockResolvedValue(response);
    
        console.error = jest.fn(); // Mock console.error
    
        await postThresholds(thresholds, setHttpResponseCodeMock);
    
        expect(fetchMock).toHaveBeenCalledWith('https://cloud-app-byi2ujnffa-ez.a.run.app/thresholds', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ thresholds }),
        });
    
        expect(console.error).toHaveBeenCalledWith('Der var en fejl', error);
      });
});
