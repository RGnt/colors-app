import React from 'react';
import Palette from './Palette/Palette';
import seedColors from './utils/seedColors';
import { generatePalette } from './utils/colorHelpers';

const App = () => {
  console.log(generatePalette(seedColors[4]));
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
};
export default App;
