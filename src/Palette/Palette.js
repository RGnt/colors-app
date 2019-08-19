import React, { useState } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import './Palette.scss';

//TODO: Look for better slider solution! Current one uses unsafe lifeCycleMethods!

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  }

  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox key={color.id} background={color.hex} name={color.name} />
  ));

  return (
    <div className="Palette">
      <div className='slider'>
        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
      </div>
      {/* Navbar here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer eventually */}
    </div>
  );
};

export default Palette;
