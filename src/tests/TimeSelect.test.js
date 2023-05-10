/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import TimeSelect from '../components/TimeSelect';

describe('TimeSelect', () => {
  test('renders correctly', () => {
    render(<TimeSelect />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
  });

  test('calls setEndDate when an option is selected', () => {
    const setEndDate = jest.fn();
    render(<TimeSelect setEndDate={setEndDate} />);
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'This Month' } });
    expect(setEndDate).toHaveBeenCalledWith(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  });
});
