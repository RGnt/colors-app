import React from 'react';
import { Link } from 'react-router-dom';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Snackbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Slider } from '@material-ui/core/'
import CloseIcon from '@material-ui/icons/Close';

import './Navbar.scss';


const Navbar = ({ level, changeLevel, handleChange, currentFormat, snackBarOpen, snackBarHandler }) => {
    const valuetext = (value) => {
        return `{value}`
    }
    return (
        <header className="Navbar">
            <div className="logo">
                <Link to={"/"}>reactcolorpicker</Link>
            </div>
            <div className="slider-container">
                <span>Level: {level}</span>
                <div className='slider'>
                    <Slider
                        defaultValue={level}
                        aria-labelledby="color-level-slider"
                        getAriaValueText={valuetext}
                        step={100}
                        marks
                        min={100}
                        max={900}
                        onChange={changeLevel}
                    />
                </div>
            </div>
            <div className="select-container">
                <Select onChange={handleChange} value={currentFormat}>
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgba(255,255,255,0.1)</MenuItem>
                </Select>
            </div>
            <Snackbar
                anchorOrigin={
                    {
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                open={snackBarOpen}
                autoHideDuration={3000}
                message={
                    <span id="message-id">
                        Format Changed To {currentFormat.toUpperCase()}
                    </span>}
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                onClose={() => snackBarHandler(false)}
                action={[
                    <IconButton
                        onClick={() => snackBarHandler(false)}
                        color='inherit'
                        key="close"
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                ]}
            />
        </header>
    );
};
export default Navbar;