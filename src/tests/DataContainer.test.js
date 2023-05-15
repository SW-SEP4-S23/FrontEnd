/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, getByRole, screen } from '@testing-library/react';
import DataContainer from '../components/DataContainer';

describe('DataContainer', () => {
  const dataName = 'temperature';
  const data = [
    {timestamp: '2023-05-09T12:34:56Z', [dataName]: 123 },
    {timestamp: '2023-05-09T12:45:06Z', [dataName]: 456 },
  ];
  const setEndDate = jest.fn();

  it('renders without crashing', () => {
    render(<DataContainer data={data} dataName={dataName} setEndDate={setEndDate} />);
  });

  it('displays data as a graph by default', () => {
    const { container } = render(<DataContainer data={data} dataName={dataName} setEndDate={setEndDate} />);
    const graphButton = container.querySelector('#grafbutton');
    expect(graphButton.classList.contains('highlighted')).toBe(true);
    expect (screen.getByRole('graph')).toBeInTheDocument();
  });

  it('displays data as a table when table button is clicked', () => {
    const { container } = render(<DataContainer data={data} dataName={dataName} setEndDate={setEndDate} />);
    const tableButton = container.querySelector('#tablebutton');
    fireEvent.click(tableButton);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

});