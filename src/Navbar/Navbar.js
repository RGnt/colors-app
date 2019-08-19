import React from 'react';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import './Navbar.scss';

const Navbar = ({ level, changeLevel, handleChange, currentFormat }) => {
    return (
        <header className="Navbar">
            <div className="logo">
                <a href="">reactcolorpicker</a>
            </div>
            <div className="slider-container">
                <span>Level: {level}</span>
                <div className='slider'>
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={changeLevel} />
                </div>
            </div>
            <div className="select-container">
                <Select onChange={handleChange} value={currentFormat}>
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgba(255,255,255,0.1)</MenuItem>
                </Select>
            </div>
        </header>
    );
};
export default Navbar;