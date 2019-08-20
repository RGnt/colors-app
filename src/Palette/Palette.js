import React, { useState } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import './Palette.scss';

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const [snackBarOpen, setSnackBarStatus] = useState(false);

  const changeFormat = (e) => {
    setFormat(e.target.value);
    setSnackBarStatus(true);
    setTimeout(() => setSnackBarStatus(false), 2500);
  }
  const changeLevel = (event, value) => {
    setLevel(value);
  }
  const snackBarHandler = (val) => {
    setSnackBarStatus(val)
  }

  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox
      key={color.id}
      background={color[format]}
      name={color.name}
      copyFormat={format} />
  ));

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        currentFormat={format}
        snackBarOpen={snackBarOpen}
        snackBarHandler={snackBarHandler}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {palette.paletteName}<span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
};

export default Palette;