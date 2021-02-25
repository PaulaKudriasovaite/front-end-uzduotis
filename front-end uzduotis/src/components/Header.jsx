import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setGifs } from '../redux/actions';

function Header() {
  const dispatch = useDispatch();
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=FPTyYh2gQ07zc8Z5MpQTTGIUVxllT2sB&limit=12&offset=`;

  const loadGifs = async () => { //Function - load gifs
    const rndmInt = Math.floor(Math.random() * (5000 - 1)) + 1; //Get random integer for a request
    const res = await axios.get(`${url}${rndmInt}`); //Make a request using axios library
    const data = res.data.data;
    data.sort((a, b) => new Date(b.import_datetime).getTime() - new Date(a.import_datetime).getTime()); 
    //Sort gifs by import_date
    dispatch(setGifs(data));
  }

  const spaceDown = (e) => { //Load gifs by spacebar
    if(e.keyCode === 32) {
      e.preventDefault();
      loadGifs();
    }
  }

  useEffect(() => { //Add listener for spacebar key
    window.addEventListener('keyup', (e) => spaceDown(e))
  }, []);

  return (
    <div className="Header">
      <img src="/images/logo.svg" alt="logo" />
      <div>
        <p>Press<span> spacebar </span>to shuffle or</p>
        <button type="button"
                id="loadGifs"
                tabIndex="0"
                onClick={() => loadGifs()}  //Add click listener
              > 
          Click here
        </button>
      </div>
    </div>
  );
}

export default Header;