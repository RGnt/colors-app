import React from 'react';
import ColorBox from '../ColorBox/ColorBox';
import './Palette.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
const Palette = ({ palette }) => {
  //const []
  const colorBoxes = palette.colors[500].map(color => (
    <ColorBox key={color.id} background={color.hex} name={color.name} />
  ));
  return (
    <div className="Palette">
      {/* Navbar here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer eventually */}
    </div>
  );
};

export default Palette;
