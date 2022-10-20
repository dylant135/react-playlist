import './App.css';
import Header from './components/Header'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Card imgUrl='https://respect-mag.com/wp-content/uploads/2021/02/unnamed-93.jpg' />
        <Card imgUrl='https://respect-mag.com/wp-content/uploads/2021/02/unnamed-93.jpg' />
        <Card imgUrl='https://respect-mag.com/wp-content/uploads/2021/02/unnamed-93.jpg' />
      </div>
    </div>
  );
}

export default App;
