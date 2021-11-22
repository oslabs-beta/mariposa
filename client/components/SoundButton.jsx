import React, { useState, useEffect, onKeyPress } from 'react';

// create individual sound button component for each button that play audio on click

const SoundButton = (props) => {
  const playSound = () => {
    const audio = new Audio(props.sound);
    console.log('AUDIO LINK: ', props.sound);
    audio.play();
  };
  
  return (
    <div className="button-wrapper">
      <div id={props.id} className="button-area" onClick={() => playSound()}/>
    </div>
  );
};

export default SoundButton;