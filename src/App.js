import './App.css';
import data from './names.json'

function App() {
  const names = data.names
  for (var i = 0; i < names.length; i++) {
    console.log(names[i].name)
  }
  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
}

export default App;