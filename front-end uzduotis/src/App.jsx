import './styles/index.sass';
import Header from './components/Header';
import AllGifs from './components/AllGifs';
import { useSelector } from 'react-redux';

function App() {
  const gifs = useSelector(state => state.gifs); // Get gifs by useSelector hook

  return (
    <div className="App"> {/* Add apps commponents */}
      <Header />
      <AllGifs gifs={gifs} />
    </div>
  );
}

export default App;
