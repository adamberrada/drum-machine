import React, { useCallback, useEffect, useRef, useState } from "react";
import WebFont from 'webfontloader';

function DrumPad({ id, url, keyPad, power, volume, handlePlayKey }) {
  const audioRef = useRef(null);
  const [active, setActive] = useState(false); // State variable to manage the active class

  const playDrum = useCallback(() => {
    if (power) {
      const audio = audioRef.current;
      if (audio) {
        audio.currentTime = 0;
        audio.volume = volume;
        audio.play().then(() => {
          console.log('Audio played successfully');
        }).catch((error) => {
          console.error('Error playing audio:', error);
        });
        handlePlayKey(id);
        setActive(true); // Add the active class
        setTimeout(() => setActive(false), 500); // Remove the active class after a short delay
      }
    }
  }, [power, volume, handlePlayKey, id]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Monoton']
      }
    })
    const handlePlayKeyPress = (event) => {
      if (event.key.toUpperCase() === keyPad) {
        playDrum();
      }
    };
    document.addEventListener('keydown', handlePlayKeyPress);
    return () => {
      document.removeEventListener('keydown', handlePlayKeyPress);
    };
  }, [playDrum, keyPad]);

  return (
    <div className="drums-container">
      <button 
        onClick={playDrum} 
        id={id} 
        className={`drum-pad ${active ? 'active' : ''}`} // Add the active class conditionally
      >
        {keyPad}
        <audio ref={audioRef} className="clip" id={keyPad} src={url}></audio>
      </button>
    </div>
  );
}

export default DrumPad;
