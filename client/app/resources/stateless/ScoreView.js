import React from 'react';

export default (props) => {
  return (
    <header>
      <div id='score-box'>
        <span>current lives:</span>
        <div id='current-score'>meow</div>
      </div>
      <div id='time-box'>
        <span>remaining time:</span>
        <div id='remaining-time'>{Math.floor(props.duration - props.time)}</div>
        <span>min second</span>
      </div>
    </header>
  );
};