import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Total from './components/Total'
import Filter from './components/Filter'
import NameList from './components/NameList'
import data from './names.json'

function App() {
  const [names, setNames] = useState(data.names)
  const [filter, setFilter] = useState('')
  const [sortBy, setSortBy] = useState('popularity')

  useEffect(() => {
    setNames(data.names.filter(item => item.name.toLowerCase().includes(filter)))
  }, [filter])

  return (
    <div>
      <Header />
      <p>These are the top 10 male and female names in Solita.</p>
      <Filter setFilter={setFilter} />
      <div style={{ marginTop: 20 }}>
        <NameList
          names={names}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
      <Total names={names} />
    </div>
  )
}

export default App;