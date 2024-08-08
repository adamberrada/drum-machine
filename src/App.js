import React , { useState} from 'react';
import './App.css';
import Machine from './components/Machine'
import Header from './components/Header';
import DrumPad from './components/DrumPad';

function App() {
    const drumPads = [
      {keyPad: "Q",id:"Heater 1" , url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
      {keyPad: "W",id:"Heater 2" , url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"},
      {keyPad: "E",id:"Heater 3" , url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"},
      {keyPad: "A",id:"Heater 4" , url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"},
      {keyPad: "S",id:"Clap" , url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"},
      {keyPad: "D",id:"Open HH" , url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"},
      {keyPad: "Z",id:"Kick-n'Hat" , url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"},
      {keyPad: "X",id:"Kick" , url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"},
      {keyPad: "C",id:"Closed HH" , url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"}
    ];

    const bankPad = [
      { keyPad: "Q", id: "Chord 1", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },
      { keyPad: "W", id: "Chord 2", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },
      { keyPad: "E", id: "Chord 3", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },
      { keyPad: "A", id: "Shaker", url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" },
      { keyPad: "S", id: "Open HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },
      { keyPad: "D", id: "Closed HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" },
      { keyPad: "Z", id: "Punchy Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },
      { keyPad: "X", id: "Side Stick", url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },
      { keyPad: "C", id: "Snare", url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" }
    ];

    const handlePlayKey = (id) => {
      setKeyDisplay(id);
    }
  const [Power , setPower] = useState(true);
  const [Volume , setVolume] = useState(0.5);
  const [bank , setBank] = useState(true);
  const [keyDisplay , setKeyDisplay] = useState("Heater Kit");

  const handleDisplayBank = () => {
    setKeyDisplay(bank ? "Smooth Piano Kit" : "Heater Kit");
  };

  return (
    <div className="App" id="drum-machine">
      <Header />
      <div className='inside-app'>
        <div className='machine'>
          <Machine
            Power={Power} 
            setPower={setPower} 
            bank={bank}
            setBank={setBank} 
            Volume={Volume} 
            setVolume={setVolume} 
            handleDisplayBank={handleDisplayBank} 
            keyDisplay={keyDisplay}
          />
        </div>
        <div className='drumPad'>
          {(bank ? drumPads : bankPad).map((pad) => (
            <DrumPad
              key={pad.id}
              id={pad.id}
              url={pad.url}
              keyPad={pad.keyPad}
              power={Power}
              volume={Volume}
              handlePlayKey={handlePlayKey}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;