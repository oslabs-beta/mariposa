import React, { useState, useEffect } from 'react';

const Customizer = (props) => {
  const soundList = props.allSounds;
  const currentSounds = [];
  const currPL = props.currPL;
  const [newPreset, setNewPreset] = useState([]);
  const [presetName, setPresetName] = useState('');

  useEffect(() => {
    const defaultPreset = [];
    for (let i = 0; i < 12; i++) {
      defaultPreset.push(currentSounds[0]);
    }
    setNewPreset(defaultPreset);
  }, []);

  let databaseEntry = '';

  const soundsArray = () => {
    Object.keys(soundList).forEach(element => {
      for (let i = 0; i < soundList[element].length; i++) {
        if (!currentSounds.includes(soundList[element][i].name)) {
          currentSounds.push(soundList[element][i].name);
        }
      }
    });
  };

  soundsArray();

  // POST FETCH REQUEST
  //Instead we should submit an array with the ...Object.values(newPreset) AND the links right here) 
  const addPreset = () => {
    //console.log(props.currUser);
    props.setMenuStatus(false);
    databaseEntry = [presetName, ...Object.values(newPreset), props.currUser];
    console.log('databaseentry', databaseEntry);
    fetch('/savePreset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newPreset: [presetName, ...Object.values(newPreset), props.currUser/*, username */] })
    })
      .then(res => res.json())
      .then (data => {
        console.log(data);
        props.setAllSounds(data);
        props.setPlaylists(Object.keys(data));
      })
      .catch(err => {
        console.log('ERROR CREATING NEW PRESET');
        return err;
      });
  };

  // populates souundboard buttons with links of corresponding playlist
  const setPlaylist = (i, e) => {
    const selectedPreset = JSON.parse(JSON.stringify(newPreset));
    selectedPreset[i] = e.target.value;
    setNewPreset(selectedPreset);
  };

  // populates each drop down with a dropdown list of all the options
  const presetOptions = [];
  for (let i = 0; i < 12; i++) {
    presetOptions.push(
      <div className="customizer-dropdown-wrapper">
        <div style={{color:'white'}}>{currPL[i]}</div>
        <select onChange={e => setPlaylist(i, e)} id={`${i}dropdown`} name="soundClips">
          {currentSounds.map((element, i) => (<option key={`${i}`} value={element}> {element} </option>))}
        </select>
      </div>
    );
  }

  return (
    <div className="customizer-wrapper">
      <form onSubmit={(e) => {
        e.preventDefault();
        addPreset();
      }}>
        <div className="preset-form">
          <label htmlFor="preset-name" style={{ color: 'white' }} >Preset Name: </label>
          <input onChange={(e) => setPresetName(e.target.value)} id="preset-name" type="text" required></input>
          <input type="submit"></input>
        </div>

        <div className="preset-wrapper">
          {presetOptions}
        </div>

      </form>
    </div>

  );
};

export default Customizer;