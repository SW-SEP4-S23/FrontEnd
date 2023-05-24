/**
   * @jest-environment jsdom
*/
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import PlantRegister from '../components/PlantRegister';

describe('PlantRegister', () => {
  it('renders the form correctly', () => {
    const onSubmit = jest.fn();
    render(
      <PlantRegister onSubmit={onSubmit} filteredList={[]} onChange={jest.fn()} state={{}} />
    );

    // Assert that the form elements are rendered correctly
    expect(screen.getByText('Registrer Plante')).toBeInTheDocument();
    expect(screen.getByLabelText('Plantenavn')).toBeInTheDocument();
    expect(screen.getByLabelText('Optimal temperatur')).toBeInTheDocument();
    expect(screen.getByLabelText('Optimal luftfugtighed')).toBeInTheDocument();
    expect(screen.getByLabelText('Optimal CO2')).toBeInTheDocument();
    expect(screen.getByLabelText('Lagerbeholdning')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Tilføj')).toBeInTheDocument();
  });

  test('calls onSubmit when the form is submitted', () => {
    const onSubmit = jest.fn();
    render(
      <PlantRegister onSubmit={onSubmit} filteredList={[]} onChange={jest.fn()} state={{}} />
    );

    const plantNameInput = screen.getByLabelText('Plantenavn');
    const submitButton = screen.getByText('Tilføj');

    // Simulate user input
    fireEvent.change(plantNameInput, { target: { value: 'Test Plant' } });

    // Simulate form submission
    fireEvent.click(submitButton);

    // Assert that the onSubmit function is called with the correct data
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(expect.any(Object));
    expect(onSubmit.mock.calls[0][0].target.nodeName).toBe('FORM');
    expect(onSubmit.mock.calls[0][0].target.elements.plantName.value).toBe('Test Plant');
  });
});