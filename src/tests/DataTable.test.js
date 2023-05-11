/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import DataTable from '../components/DataTable';

describe('DataTable', () => {
  const dataName = 'temperature';
  const data = [
    { id: 1, timestamp: '2023-05-09T12:34:56Z', [dataName]: 123 },
    { id: 2, timestamp: '2023-05-09T12:45:06Z', [dataName]: 456 },
  ];

  it('renders without crashing', () => {
    render(<DataTable data={data} dataName={dataName} />);
  });

  it('displays table headers correctly', () => {
    const { getByText } = render(<DataTable data={data} dataName={dataName} />);
    expect(getByText('Dato')).toBeInTheDocument();
    expect(getByText('Tid')).toBeInTheDocument();
    expect(getByText(`${dataName} værdi`)).toBeInTheDocument();
  });

  it('displays data rows correctly', () => {
    const { queryAllByText } = render(<DataTable data={data} dataName={dataName} />);
    expect(queryAllByText('2023-05-09')[0]).toBeInTheDocument();
    expect(queryAllByText('12:34')[0]).toBeInTheDocument();
    expect(queryAllByText('123')[0]).toBeInTheDocument();
    expect(queryAllByText('2023-05-09')[0]).toBeInTheDocument();
    expect(queryAllByText('12:45')[0]).toBeInTheDocument();
    expect(queryAllByText('456')[0]).toBeInTheDocument();
  });

  it('displays a message when there is no data', () => {
    const { getByText } = render(<DataTable data={[]} dataName={dataName} />);
    expect(getByText('No data available.')).toBeInTheDocument();
  });
});