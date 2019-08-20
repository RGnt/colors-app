import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette/Palette';
import seedColors from './utils/seedColors';
import { generatePalette } from './utils/colorHelpers';
import PaletteList from './PaletteList/PaletteList';

const App = () => {
  const findPalette = (id) => seedColors.find(palette => palette.id === id)
  return (
    <Switch>

      <Route exact path="/" render={() => <PaletteList palettes={seedColors.map(palette => { return { palId: palette.id, palName: palette.paletteName, palette: palette.colors, emoji: palette.emoji } })} />} />
      <Route exact path="/palette/:id" render={
        (routeProps) =>
          <Palette
            palette={generatePalette(
              findPalette(routeProps.match.params.id))
            } />
      } />
    </Switch>

  );
};
export default App;
