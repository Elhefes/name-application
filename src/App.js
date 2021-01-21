import './App.css';
import Header from './components/Header'
import Total from './components/Total'
import Name from './components/Name'
import data from './names.json'

function App() {
  const names = data.names
  const mostPopularFirst = (a, b) => b.amount - a.amount
  const alphabetically = (a, b) => a.name.localeCompare(b.name)

  return (
    <div>
      <Header/>
      <Total names={names}/>
      {names.sort(alphabetically).map((name, index) =>
        <Name
          key={index}
          name={name.name}
          amount={name.amount}
        />
      )}
    </div>
  )
}

export default App;