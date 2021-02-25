import { useState } from 'react';

function Gif({ gif }) {
  const [locked, setBlocked] = useState(false); //Init blocked state by useState hook
  const [hovered, setHovered] = useState(false); //Init hovered state by useState hook

  return (
    <div className="Gif"
         onClick={() => setBlocked(!locked)} //Event listener for click
         onMouseEnter={() => setHovered(true)} //Event listener for mouse enter
         onMouseLeave={() => setHovered(false)} //Event listener for mouse leave
        > 

      {!locked ? //If gif is unlocked, return animated gif, else return static img
        <img src={gif.images.original.url} />
      : <>
          <img src={gif.images.downsized_still.url} />
          <img src="/images/unlock.svg" className="unlock" />
        </>}

      {hovered && locked ? //If gif is hovered and locked, return text, else return null
        <p className="toUnclock">Click to unlock</p>
      : null}
    </div>
  );
}

export default Gif;