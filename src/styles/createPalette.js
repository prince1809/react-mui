import indigo from '../colors/indigo';
import pink from '../colors/pink';
import red from '../colors/red';

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
    ...other,
  } = palette;
}