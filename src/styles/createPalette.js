import warning from 'warning';
import deepmerge from 'deepmerge';
import indigo from '../colors/indigo';
import pink from '../colors/pink';
import grey from '../colors/grey';
import red from '../colors/red';
import common from '../colors/common';

export const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common.white,
    default: grey[50],
  },
  action: {
    active: 'rgba(0, 0, 0, 0,54)',
    hover: 'rgba(0, 0, 0, 0.08)',
    selected: 'rgba(0, 0, 0, 0.14)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
  }
};

export const dark = {
  text: {
    primary: common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: grey[800],
    default: '#303030',
  },
  action: {
    active: common.white,
    hover: 'rgba(255, 255, 255, 0.1)',
    hoverOpacity: 0.1,
    selected: 'rgba(255, 255, 255, 0.2)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
  },
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