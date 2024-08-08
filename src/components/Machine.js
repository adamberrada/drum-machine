import React, { useState, useEffect } from "react";

function InsideMachine({ Power, setPower, Volume, setVolume, bank, setBank, keyDisplay }) {
  const displayBank = bank ? "Heater Kit" : "Smooth Piano Kit";
  
  const [localVolume, setLocalVolume] = useState(Volume); // Local state for debouncing

  const handleBankChange = () => {
    setBank(prevBank => !prevBank);
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setVolume(localVolume); // Update the main volume state after a delay
    }, 100); // Adjust the delay as necessary

    return () => {
      clearTimeout(handler); // Cleanup the timeout if the component unmounts or localVolume changes
    };
  }, [localVolume, setVolume]);

  const volumePercentage = Math.round(localVolume * 100);

  return (
    <div id="machine-control" className="inside-machine">
      <div className="power">
        <p>Power:</p>
        <button className="power-btn" onClick={() => setPower(!Power)}>
          {Power ? 'On' : 'Off'}
        </button>  
      </div>
      <div id='display' className='display'>
        {Power ? keyDisplay : "Power Off"}
      </div>
      <div className="volume">
        <label htmlFor="volume-control">
          Volume: {volumePercentage}
          <input
            type="range"
            id="volume-control"
            min="0"
            max="1"
            step="0.01"
            value={localVolume}
            onChange={(e) => setLocalVolume(e.target.value)}
          />
        </label>
      </div>
      <div className="bank">
        <p>Bank:</p>
        <button className="bank-btn" onClick={handleBankChange}>
          {displayBank}
        </button>
      </div>
    </div>
  );
}

export default InsideMachine;
