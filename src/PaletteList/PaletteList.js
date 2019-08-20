import React from 'react';
import { Link } from 'react-router-dom';

const PaletteList = ({ palettes }) => {
    console.log('Palette List', palettes)
    const paletteLinks = palettes.map(link => <div key={link.palId}><Link to={`/palette/${link.palId}`}>{link.palName}</Link></div>)
    return (
        <div>
            <h1>React Colors</h1>
            {paletteLinks}
        </div>
    );
};
export default PaletteList;