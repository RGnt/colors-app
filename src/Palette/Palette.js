import React from 'react';
import ColorBox from '../ColorBox/ColorBox';
import './Palette.scss';
const Palette = props => {
  const colorBoxes = props.colors.map(color => (
    <ColorBox background={color.color} name={color.name} />
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
