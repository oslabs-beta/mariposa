import React, { useState, useEffect } from 'react';

const Playlist_Selector = (props) => {
  // creates dropdown listings of all the playlist imported from user's account
   const options = props.playlists.map((preset, i) => {
    return <option key={i} value={preset}> {preset} </option>;
  });

  // renders the drop downlist
  return (
    <div className="settings-wrapper" >
      <select onChange={e => {props.setPreset(e.target.value); props.selectedPL(e.target.value)}}>
        {options}
      </select>
    </div>
  );
};

export default Playlist_Selector;
