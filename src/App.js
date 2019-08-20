import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette/Palette';
import seedColors from './utils/seedColors';
import { generatePalette } from './utils/colorHelpers';

const App = () => {
  console.log(generatePalette(seedColors[4]));
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>lawl!</h1>} />
      <Route exact path="/palette/:id" render={() => <h1>lawlies</h1>} />
    </Switch>
    // {/* <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div> */}
  );
};
export default App;
