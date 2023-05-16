/**
 * @jest-environment jsdom
 */

import OkBox from "../components/OkBox.js"
import React from "react"
import '@testing-library/jest-dom'
import { render, screen, waitFor, act } from "@testing-library/react"

describe('OkBox', () => {
    it('displays "Værdierne er sat!" when httpResponseCode is 200 and isOkBoxVisible is true', async () => {
        render(
            <OkBox httpResponseCode={200} isOkBoxVisible={true} setIsVisible={() => { }} />
        )

        await waitFor(() => {
            expect(screen.getByText('Værdierne er sat!')).toBeInTheDocument()
        })

        await waitFor(() => {
            expect(screen.getByText('Værdierne er sat!')).toHaveStyle('color: green')
        })
    })

    it('displays "Der skete en fejl, prøv igen senere" when httpResponseCode is not 200 and isOkBoxVisible is true', async () => {
        render(
            <OkBox httpResponseCode={404} isOkBoxVisible={true} setIsVisible={() => { }} />
        )

        await waitFor(() => {
            expect(screen.getByText('Der skete en fejl, prøv igen senere')).toBeInTheDocument()
        })
        await waitFor(() => {
            expect(screen.getByText('Der skete en fejl, prøv igen senere')).toHaveStyle('color: red')
        })
    })

    it('calls setIsVisible(false) after 5 seconds when isOkBoxVisible is true', async () => {
        jest.useFakeTimers()
        const setIsVisibleMock = jest.fn()
        render(<OkBox httpResponseCode={200} isOkBoxVisible={true} setIsVisible={setIsVisibleMock} />)
      
        act(() => {
          jest.advanceTimersByTime(5000)
        })
      
        await waitFor(() => {
          expect(setIsVisibleMock).toHaveBeenCalledWith(false)
        })
      })
})