/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import DataTable from '../components/DataTable';

describe('DataTable', () => {
  const data = [
    { id: 1, createdAt: '2023-05-09T12:34:56Z', measurement: 123 },
    { id: 2, createdAt: '2023-05-09T12:45:06Z', measurement: 456 },
  ];
  const dataName = 'My Data';

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