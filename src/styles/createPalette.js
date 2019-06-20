import warning from 'warning';
import deepmerge from 'deepmerge';
import indigo from '../colors/indigo';
import pink from '../colors/pink';
import grey from '../colors/grey';
import red from '../colors/red';
import common from '../colors/common';

export const light = {

};

export const dark = {

};

export default function createPalette(palette) {
  const {
    primary = {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700],
    },
    secondary = {
      light: pink.A200,
      main: pink.A400,
      dark: pink.A700,
    },
    error = {
      light: red[300],
      main: red[500],
      dark: red[700],
    },
    type = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2,
    ...other
  } = palette;

  const types = { dark, light };

  warning(types[type], `Material-UI: the palette type \`${type}\` is not supported.`)

  const paletteOutput = deepmerge(
    {
      common,
      type,
      primary: primary,
      secondary: secondary,
      error: error,
      grey,
      ...types[type],
    },
    other,
    {
      clone: false,
    },
  );

  return paletteOutput;
}