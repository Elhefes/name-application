import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Total from './components/Total'
import Filter from './components/Filter'
import Name from './components/Name'
import data from './names.json'

function App() {
  const [names, setNames] = useState(data.names)
  const [filter, setFilter] = useState('')
  const mostPopularFirst = (a, b) => b.amount - a.amount
  const alphabetically = (a, b) => a.name.localeCompare(b.name)

  useEffect(() => {
    setNames(data.names.filter(item => item.name.toLowerCase().includes(filter)))
  }, [filter])

  return (
    <div>
      <Header />
      <p>These are the top-10 male and female names in Solita.</p>
      <Filter setFilter={setFilter} />
      <Total names={names} />

      <table>
        <tbody>
          <tr>
            <th>
              <button>Name⤊</button>
            </th>
            <th>
            <button>Amount⤊</button>
            </th>
          </tr>
          {names.sort(mostPopularFirst).map((item, index) =>
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.amount}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App;