import React, { useState } from 'react';
import './ColorBox.scss';
import CopyToClipBoard from 'react-copy-to-clipboard';

const ColorBox = ({ name, background, copyFormat }) => {
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <CopyToClipBoard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`copy-overlay ${copied && 'show'}`}
        />
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>copied</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">MORE</span>
      </div>
    </CopyToClipBoard>
  );
};
export default ColorBox;
