import './App.css';
import Header from './components/Header'
import Name from './components/Name'
import data from './names.json'

function App() {
  const names = data.names
  const biggestAmountFirst = (a, b) => b.amount - a.amount

  return (
    <div>
      <Header/>
      {names.sort(biggestAmountFirst).map((name, index) =>
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