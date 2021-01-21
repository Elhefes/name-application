import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Total from './components/Total'
import Filter from './components/Filter'
import Name from './components/Name'
import data from './names.json'

function App() {
  const [names, setNames] = useState(data.names)
  const [filter, setFilter] = useState('')
  const [sortBy, setSortBy] = useState('popularity')

  const byPopularity = (a, b) => b.amount - a.amount
  const byName = (a, b) => a.name.localeCompare(b.name)

  useEffect(() => {
    setNames(data.names.filter(item => item.name.toLowerCase().includes(filter)))
  }, [filter])

  return (
    <div>
      <Header />
      <p>These are the top 10 male and female names in Solita.</p>
      <Filter setFilter={setFilter} />
      <div style={{ marginTop: 20 }}>
        <table>
          <tbody>
            <tr>
              <th>
                <button onClick={() => setSortBy('name')}>Name</button>
              </th>
              <th>
                <button onClick={() => setSortBy('popularity')}>Amount</button>
              </th>
            </tr>
            {names.sort(sortBy === 'popularity' ?
              byPopularity : byName).map((item, index) =>
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
      <Total names={names} />
    </div>
  )
}

export default App;