import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import data from './data'

function App() {
  const info = data.map(item => {
    return (
      <Card 
        key={item.id}
        songTitle={item.songTitle}
        artist={item.artist}
        imgUrl={item.imgUrl}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <div className='container'>
        {info}
      </div>
    </div>
  );
}

export default App;
