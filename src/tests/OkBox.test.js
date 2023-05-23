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

    it('displays "Gemt" message with green color when isOkBoxVisible is true', () => {
        render(<OkBox isOkBoxVisible={true} setIsVisible={jest.fn()} />);
    
        // Verify that the "Gemt" message is rendered with green color
        const gemtMessage = screen.getByText('Gemt');
        expect(gemtMessage).toBeInTheDocument();
        expect(gemtMessage).toHaveStyle('color: green');
      });
})