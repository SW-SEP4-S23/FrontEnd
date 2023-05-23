/**
 * @jest-environment jsdom
 */

import SetEnvironmentValue from "../components/SetEnvironmentValue.js"
import React from "react"
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react"
import dataNameToLabel from "../utils/dataNameToLabel.js"

describe('EnvironmentValues', () => {

  const mockOnChange = jest.fn();
  const mockOnSubmit = jest.fn();

  const mockThresholds = {
    temperature: { minValue: 22, maxValue: 25 },
    humidity: { minValue: 22, maxValue: 25 },
    co2: { minValue: 22, maxValue: 25 },
  };

  const mockCurrentValues = [
    { type: 'temperature', value: 22.3 },
    { type: 'humidity', value: '62%' },
    { type: 'co2', value: '3.2%' },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });


  it("renders without crashing", () => {
    render(<SetEnvironmentValue />)
  })

  it('displays the current values correctly', () => {
    const currentValues = [
      { type: 'temperature', value: 22.3 },
      { type: 'humidity', value: '62%' },
      { type: 'co2', value: '3.2%' },
    ];

    render(
      <SetEnvironmentValue currentValues={currentValues} />
    );

    currentValues.forEach((dataPoint) => {
      const value = dataPoint.value;
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  it('calls the onChange function when thresholds input values change', () => {
    const onChange = jest.fn();

    render(
      <SetEnvironmentValue onChange={onChange} />
    );

    const minInput = screen.getAllByLabelText('min:');
    const maxInput = screen.getAllByLabelText('max:');

    minInput.forEach((min) => {
      fireEvent.change(min, { target: { value: '20' } });
    });
    maxInput.forEach((max) => {
      fireEvent.change(max, { target: { value: '30' } }
      )
    });

    expect(onChange).toHaveBeenCalledTimes(6);
    expect(onChange).toHaveBeenCalledWith({
      name: 'temperature',
      type: 'minValue',
      value: '20',
    });
    expect(onChange).toHaveBeenCalledWith({
      name: 'temperature',
      type: 'maxValue',
      value: '30',
    });
    expect(onChange).toHaveBeenCalledWith({
      name: 'humidity',
      type: 'minValue',
      value: '20',
    });
    expect(onChange).toHaveBeenCalledWith({
      name: 'humidity',
      type: 'maxValue',
      value: '30',
    });
    expect(onChange).toHaveBeenCalledWith({
      name: 'co2',
      type: 'minValue',
      value: '20',
    });
    expect(onChange).toHaveBeenCalledWith({
      name: 'co2',
      type: 'maxValue',
      value: '30',
    });
  });


  it('calls the onSubmit function when OK button is clicked', () => {
    const onSubmit = jest.fn();

    render(
      <SetEnvironmentValue onSubmit={onSubmit} />
    );

    const okButton = screen.getAllByText('OK');

    okButton.forEach((button) => {
    fireEvent.click(button);})

    expect(onSubmit).toHaveBeenCalledTimes(3);

  });
})
