import React from 'react';
import './ColorBox.scss';

const ColorBox = ({ name, background }) => {
  return (
    <div style={{ background }} className="ColorBox">
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-button">Copy</button>
      </div>
      <span className="see-more">MORE</span>
    </div>
  );
};
export default ColorBox;
