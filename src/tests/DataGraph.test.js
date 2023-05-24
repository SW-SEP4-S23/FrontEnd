/**
 * @jest-environment jsdom
 */

import React from 'react'
import '@testing-library/jest-dom'
import { render} from '@testing-library/react'
import DataGraph from '../components/DataGraph'

describe('DataGraph', () => {
  const modckDataName = 'temperature'
  const mockData = [
    { id: 1, timestamp: '2023-05-09T12:34:56Z', [modckDataName]: 123 },
    { id: 2, timestamp: '2023-05-09T12:45:06Z', [modckDataName]: 456 },
  ]

  it('renders without crashing', () => {
    render(<DataGraph data={mockData} dataName={modckDataName} />)
  })

  it('displays a message when there is no data', () => {
    const { container } = render(<DataGraph />)
    expect(container.innerHTML).toMatch('Ingen data at vise.')
  })

/*  
    ---------------------Testene er ikke korrekte, men idéerne er der-----------------------
    it('should show tooltip for graph', () => {
    render(<DataGraph data={mockData} dataName={modckDataName} />)

    const graph = document.querySelectorAll('.recharts-line-sector')

    userEvent.hover(graph[0])
    expect(screen.getByText('Temperature : 123')).toBeInTheDocument()
    userEvent.hover(graph[1])
    expect(screen.getByText('Temperature : 456')).toBeInTheDocument()
})

  it('renders data correctly', () => {
    render(<DataGraph data={mockData} dataName={modckDataName} />)
    expect(screen.getByText('100')).toBeInTheDocument()
  }) */

})