/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import TimeSelect from '../components/TimeSelect';

describe('TimeSelect', () => {
  it('renders correctly', () => {
    render(<TimeSelect />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
  });

  it('calls setStartDate when an option is selected', () => {
    const setStartDate = jest.fn();
    render(<TimeSelect setStartDate={setStartDate} />);
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'This Month' } });
    expect(setStartDate).toHaveBeenCalledWith(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  });
});
