import createPalette from "./createPalette";



function createMuiTheme(options = {}) {
  const {
    palette: paletteInput = {},
    ...other
  } = options;

  const palette = createPalette(paletteInput);
  const muiTheme = {
    palette,
  }

  return muiTheme;
}


export default createMuiTheme;