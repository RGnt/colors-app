import React from 'react';
import MiniPalette from '../MiniPalette/MiniPalette';

const PaletteList = ({ palettes }) => {
    console.log('Palette List', palettes)
    const paletteLinks = palettes.map(palette => <MiniPalette key={palette.palId} palette={palette} emoji={palette.emoji} />)
    console.log('Palette links', paletteLinks)
    return (
        <div>
            <h1>React Colors</h1>
            {paletteLinks}
        </div>
    );
};
export default PaletteList;