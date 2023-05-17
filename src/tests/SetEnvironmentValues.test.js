/**
 * @jest-environment jsdom
 */

import SetEnvironmentValue from "../components/SetEnvironmentValue.js"
import React from "react"
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react"

describe('EnvironmentValues', () => {
  it("renders without crashing", () => {
    render(<SetEnvironmentValue />)
  })


  it('renders the component with default values', () => {
    render(<SetEnvironmentValue />)

    // Assert that the component renders correctly
    expect(screen.getByText('Temperatur')).toBeInTheDocument()
    expect(screen.getByText('Luftfugtighed')).toBeInTheDocument()
    expect(screen.getByText('CO2')).toBeInTheDocument()

    // Assert that the default values are displayed
    expect(screen.getByPlaceholderText('20')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('25')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('40')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('60')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('2')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('4')).toBeInTheDocument()
  })

  it('allows setting new values and triggers the callback', () => {
    const setDataValuesMock = jest.fn()
    const setMinValueMock = jest.fn()
    const setMaxValueMock = jest.fn()

    render(<SetEnvironmentValue
      setDataValues={setDataValuesMock}
      setMinValue={setMinValueMock}
      setMaxValue={setMaxValueMock}
    />)

    // Enter new values
    fireEvent.change(screen.getByPlaceholderText('20'), { target: { value: '18' } })
    fireEvent.change(screen.getByPlaceholderText('25'), { target: { value: '30' } })
    fireEvent.change(screen.getByPlaceholderText('40'), { target: { value: '35' } })
    fireEvent.change(screen.getByPlaceholderText('60'), { target: { value: '70' } })
    fireEvent.change(screen.getByPlaceholderText('2'), { target: { value: '1.5' } })
    fireEvent.change(screen.getByPlaceholderText('4'), { target: { value: '4.5' } })

    // Assert that the mock functions were called with the correct values
    expect(setMinValueMock).toHaveBeenCalledTimes(3)
    expect(setMinValueMock).toHaveBeenCalledWith('18')
    expect(setMinValueMock).toHaveBeenCalledWith('35')
    expect(setMinValueMock).toHaveBeenCalledWith('1.5')

    expect(setMaxValueMock).toHaveBeenCalledTimes(3)
    expect(setMaxValueMock).toHaveBeenCalledWith('30')
    expect(setMaxValueMock).toHaveBeenCalledWith('70')
    expect(setMaxValueMock).toHaveBeenCalledWith('4.5')

    // Click the "OK" button
    const okButtons = screen.getAllByText('OK')
    okButtons.forEach((button) => {
      fireEvent.click(button)
    })

    // Assert that the callback function was called with the correct data
    expect(setDataValuesMock).toHaveBeenCalledTimes(3)
    expect(setDataValuesMock).toHaveBeenCalledWith('temperature')
    expect(setDataValuesMock).toHaveBeenCalledWith('humidity')
    expect(setDataValuesMock).toHaveBeenCalledWith('co2')
  })

  it('sets min value correctly', () => {
    // Create mock functions for the required props
    const setMinValue = jest.fn();
    const setMaxValue = jest.fn();
    const setDataValues = jest.fn();

    const { getByLabelText, getByText } = render(
      <SetEnvironmentValue
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        setDataValues={setDataValues}
      />
    );
    // Get the input element for the min value of the first environment value card (temperature)
    const minInput = getByLabelText('min:');
    fireEvent.change(minInput, { target: { value: '15' } });

    // Check if the setMinValue function is called with the correct value
    expect(setMinValue).toHaveBeenCalledWith('15');
  })
})
