/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import DataContainer from '../components/DataContainer';

describe('DataContainer', () => {
  const dataName = 'temperature';
  const data = [
    {timestamp: '2023-05-09T12:34:56Z', [dataName]: 123 },
    {timestamp: '2023-05-09T12:45:06Z', [dataName]: 456 },
  ];
  const setEndDate = jest.fn();

  it('renders without crashing', () => {
    render(<DataContainer data={data} dataName={dataName} setEndDate={setEndDate} />)
  })

  it('displays data as a graph by default', async () => {
    render(<DataContainer data={data} dataName={dataName} setEndDate={setEndDate} />)
    const graphButton = await screen.findByText('Graf')
    expect(graphButton.classList.contains('highlighted')).toBe(true)
    const btn = screen.getByRole('graph')
    expect (btn).toBeInTheDocument() 
  })

  it('displays data as a table when table button is clicked', async () => {
    render(<DataContainer data={data} dataName={dataName} setEndDate={setEndDate} />);
    const tableButton = await screen.findByText('Tabel')
    fireEvent.click(tableButton)
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
  })

})