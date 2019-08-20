import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette/Palette';
import seedColors from './utils/seedColors';
import { generatePalette } from './utils/colorHelpers';

const App = () => {
  const findPalette = (id) => seedColors.find(palette => palette.id === id)
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>lawl!</h1>} />
      <Route exact path="/palette/:id" render={
        (routeProps) =>
          <Palette
            palette={generatePalette(
              findPalette(routeProps.match.params.id))
            } />
      } />
    </Switch>
    // {/* <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div> */}
  );
};
export default App;
