import React, { useState } from 'react';
import './ColorBox.scss';

function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'green', 'blue', 'yellow', 'brown'];
  return COLOR_LIST[Math.floor(Math.random() * 5)];
}

function ColorBox() {
  const initColor = localStorage.getItem('box_color') || 'deeppink';
  const [color, setColor] = useState(initColor);

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('box_color', newColor);
  }

  return (
    <div
      className='color-box'
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
    </div >
  );
}

export default ColorBox;