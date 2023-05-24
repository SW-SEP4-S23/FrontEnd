/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import StockTable from '../components/StockTable';

describe('StockTable', () => {
    const data = [
        { id: 1, name: 'Plante 1', optCo2: 123, optTemp: 456, optHum: 789, amount: 1 },
        { id: 2, name: 'Plante 2', optCo2: 123, optTemp: 456, optHum: 789, amount: 1 },
    ];
    
    it('renders without crashing', () => {
        render(<StockTable data={data} />);
    });
    
    it('displays table headers correctly', () => {
        const { getByText } = render(<StockTable data={data} />);
        expect(getByText('Plantenavn')).toBeInTheDocument();
        expect(getByText('Optimal temperatur')).toBeInTheDocument();
        expect(getByText('Optimal luftfugtighed')).toBeInTheDocument();
        expect(getByText('Optimal CO2')).toBeInTheDocument();
        expect(getByText('Antal')).toBeInTheDocument();
    });
    
    it('displays data rows correctly', () => {
        const { queryAllByText } = render(<StockTable data={data} />);
        expect(queryAllByText('Plante 1')[0]).toBeInTheDocument();
        expect(queryAllByText('123')[0]).toBeInTheDocument();
        expect(queryAllByText('456')[0]).toBeInTheDocument();
        expect(queryAllByText('789')[0]).toBeInTheDocument();
        expect(queryAllByText('1')[0]).toBeInTheDocument();
        expect(queryAllByText('Plante 2')[0]).toBeInTheDocument();
        expect(queryAllByText('123')[1]).toBeInTheDocument();
        expect(queryAllByText('456')[1]).toBeInTheDocument();
        expect(queryAllByText('789')[1]).toBeInTheDocument();
        expect(queryAllByText('1')[1]).toBeInTheDocument();
    });
    
    it('displays a message when there is no data', () => {
        const { getByText } = render(<StockTable data={[]} />);
        expect(getByText('Ingen data at vise.')).toBeInTheDocument();
    });
});