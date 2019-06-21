import createPalette from "./createPalette";
import createTypography from "./createTypography";
import shadows from './shadows';
import shape from './shape';



function createMuiTheme(options = {}) {
  const {
    palette: paletteInput = {},
    mixins: mixinsInput = {},
    shadows: shadowsInput,
    spacing: spacingInput,
    typography: typographyInput = {},
    ...other
  } = options;

  const palette = createPalette(paletteInput);
  const typography = createTypography(palette, typographyInput);
  const muiTheme = {
    palette,
    typography,
  }

  return muiTheme;
}


export default createMuiTheme;