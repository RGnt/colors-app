import React, { useState } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import './Palette.scss';

//TODO: Look for better slider solution! Current one uses unsafe lifeCycleMethods!

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const changeFormat = (e) => {
    setFormat(e.target.value);
  }
  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  }

  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox key={color.id} background={color[format]} name={color.name} copyFormat={format} />
  ));

  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={changeLevel} handleChange={changeFormat} currentFormat={format} />
      {/* Navbar here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer eventually */}
    </div>
  );
};

export default Palette;