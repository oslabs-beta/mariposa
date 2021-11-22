import React, { useState, useEffect } from 'react';
import SoundButton from './SoundButton.jsx';

const Board = (props) => {
  const preset = props.preset;
  // default sounds to populate board when user does not have an account or is not logged in
  const sounds = props.allSounds[preset] || [
    { link: 'https://www.myinstants.com/media/sounds/overwatch-boop-sombra.mp3' },
    { link: 'https://www.pokezorworld.com/anime/wav/pikach.wav' },
    { link: 'https://quicksounds.com/uploads/tracks/155995082_386652093_1130616536.mp3' },
    { link: 'https://www.pokezorworld.com/anime/wav/whosthatpokemon.wav' },
    { link: 'https://quicksounds.com/uploads/tracks/1276474019_2059256748_1376796276.mp3' },
    { link: 'https://www.imit.org.uk/sound-clips/Whip.mp3' },
    { link: 'https://quicksounds.com/uploads/tracks/684591523_732065353_968365190.mp3' },
    { link: 'https://www.pokezorworld.com/anime/wav/charmander.wav' },
    { link: 'https://www.pokezorworld.com/anime/wav/machoke.wav' },
    { link: 'https://www.imit.org.uk/sound-clips/Organ.mp3' },
    { link: 'https://www.pokezorworld.com/anime/wav/bulbasaur.wav' },
    { link: 'https://www.pokezorworld.com/anime/wav/meowth.wav' },
  ];

  // adds keyboard shortcut for corresponding keys
  // [q][w][e][r]
  //  [a][s][d][f]
  //   [z][x][c][v]

  // adds a toggle to disable keyboard

  function keyPress(e) {
    const key = e.code.replace('Key', '').toLowerCase();
    const btn = document.getElementById(`button${key}`);
    btn.click();
    //animate the same way a mouse click would onClick();
    btn.animate(
      [
        { borderRadius: '10%' },
        {
          boxShadow: `inset 0 0 50px #fff, inset 20px 0 80px rgb(74, 253, 134),
          inset -20px 0 80px #0ff, inset 20px 0 300px rgb(247, 3, 3),
          inset -20px 0 300px #0ff, 0 0 20px #fff, -10px 0 40px #f0f, 10px 0 40px #0ff` },
        { filter: 'drop-shadow(0px 0px 5px rgb(134, 233, 225))' },
      ],
      {
        duration: 200,
        iteration: 1,
      }
    );
  }

  // toggles keyboard shortcut on and off
  const onToggle = () => {
    return <button onClick={() => {
      window.addEventListener('keydown', keyPress, true);
    }}>on</button>;
  };

  const offToggle = () => {
    return <button onClick={() => {
      window.removeEventListener('keydown', keyPress, true);
    }}>off</button>;
  };

  //render board and give each a property to activate upon keystroke
  const renderBoard = () => {
    const buttonArray = [];
    const kbKeys = ['q', 'w', 'e', 'r', 'a', 's', 'd', 'f', 'z', 'x', 'c', 'v'];
    for (let i = 0; i < 12 && i < sounds.length; i++) {
      buttonArray.push(<SoundButton id={`button${kbKeys[i]}`} key={i} sound={sounds[i].link} keyLink={kbKeys[i]} />);
    }
    return buttonArray;
  };

  // rendering entire board
  return (
    <div>
      <div className="soundboard">
        {renderBoard()}
      </div>
      <center><br /><span style={{ color: 'white' }}> Keyboard shortcut: {onToggle()} {offToggle()}</span></center>
    </div>
  );
};

export default Board;
