import React, { useState } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import './Palette.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'

//TODO: Look for better slider solution! Current one uses unsafe lifeCycleMethods!

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);

  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox key={color.id} background={color.hex} name={color.name} />
  ));

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  }
  return (
    <div className="Palette">
      <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
      {/* Navbar here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer eventually */}
    </div>
  );
};

export default Palette;
