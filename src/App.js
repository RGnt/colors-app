import React from 'react';
import Palette from './Palette/Palette';
import seedColors from './seedColors';

const App = () => {
  return (
    <div>
      <Palette {...seedColors[4]} />
    </div>
  );
};
export default App;
