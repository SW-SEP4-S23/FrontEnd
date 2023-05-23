/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import DataTable from '../components/DataTable';

describe('DataTable', () => {
  const modckDataName = 'temperature';
  const mockData = [
    { id: 1, timestamp: '2023-05-09T12:34:56Z', value: 123 },
    { id: 2, timestamp: '2023-05-09T12:45:06Z', value: 456 },
  ];

  it('renders without crashing', () => {
    render(<DataTable data={mockData} dataName={modckDataName} />);
  });

  it('renders data correctly', () => {
    const { container } = render(<DataTable data={mockData} dataName={modckDataName} />);
    expect(container.innerHTML).toMatch('2023-05-09');
    expect(container.innerHTML).toMatch('12:34');
    expect(container.innerHTML).toMatch('123');
    expect(container.innerHTML).toMatch('12:45');
    expect(container.innerHTML).toMatch('456');
  });

  it('displays a message when there is no data', () => {
    const { container } = render(<DataTable />);
    expect(container.innerHTML).toMatch('Ingen data at vise.');
  })
});