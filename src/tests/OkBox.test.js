/**
 * @jest-environment jsdom
 */

import OkBox from "../components/OkBox.js"
import React from "react"
import '@testing-library/jest-dom'
import { render, screen, waitFor, act } from "@testing-library/react"

describe('OkBox', () => {
    it('displays "Gemt" message when httpResponseCode is 200 and isOkBoxVisible is true', () => {
        render(<OkBox httpResponseCode={200} isOkBoxVisible={true} setIsVisible={() => { }} />);

        const successStatusElement = screen.getByText('Gemt');
        expect(successStatusElement).toBeInTheDocument();
        expect(successStatusElement).toHaveStyle({ color: 'green' });
    });

    it('displays error message when httpResponseCode is not 200 and isOkBoxVisible is true', () => {
        render(<OkBox httpResponseCode={400} isOkBoxVisible={true} setIsVisible={() => { }} />);

        const errorStatusElement = screen.getByText('Der skete en fejl, prøv igen senere');
        expect(errorStatusElement).toBeInTheDocument();
        expect(errorStatusElement).toHaveStyle({ color: 'red' });
    });

    it('does not display any message when isOkBoxVisible is false', () => {
        render(<OkBox httpResponseCode={200} isOkBoxVisible={false} setIsVisible={() => {}} />);
        
        const successStatusElement = screen.queryByText('Gemt');
        const errorStatusElement = screen.queryByText('Der skete en fejl, prøv igen senere');
        expect(successStatusElement).not.toBeInTheDocument();
        expect(errorStatusElement).not.toBeInTheDocument();
      });


    it('calls setIsVisible(false) after 3 seconds when isOkBoxVisible is true', async () => {
        jest.useFakeTimers()
        const setIsVisibleMock = jest.fn()
        render(<OkBox httpResponseCode={200} isOkBoxVisible={true} setIsVisible={setIsVisibleMock} />)

        act(() => {
            jest.advanceTimersByTime(3000)
        })

        await waitFor(() => {
            expect(setIsVisibleMock).toHaveBeenCalledWith(false)
        })
    })

    it('does not call setIsVisible(false) before 3 seconds when isOkBoxVisible is true', async () => {
        jest.useFakeTimers()
        const setIsVisibleMock = jest.fn()
        render(<OkBox httpResponseCode={200} isOkBoxVisible={true} setIsVisible={setIsVisibleMock} />)

        act(() => {
            jest.advanceTimersByTime(2000)
        })

        await waitFor(() => {
            expect(setIsVisibleMock).not.toHaveBeenCalledWith(false)
        })
    })
})