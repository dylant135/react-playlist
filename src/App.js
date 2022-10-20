import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Card from '../component/Card'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Card />
      </div>
    </div>
  );
}

export default App;
