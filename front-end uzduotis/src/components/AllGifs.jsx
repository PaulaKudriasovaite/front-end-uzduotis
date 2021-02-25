import Gif from './Gif';

function AllGifs({ gifs }) {
  return (
    <div className="AllGifs"> {/* Return Gif component for all gifs in redux state */}
      {gifs.map(gif => <Gif gif={gif} key={gif.id} />)}
    </div>
  );
}

export default AllGifs;