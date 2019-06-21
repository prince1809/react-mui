import deepmerge from 'deepmerge';

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
const caseAllCaps = {
  textTransform: 'uppercase',
};

const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

export default function createTypography(palette, typography) {
  const {
    fontFamily = defaultFontFamily,
    fontSize = 14,
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,

    htmlFontSize = 16,
    allVariants,
    ...other
  } = typeof typography === 'function' ? typography(palette) : typography;

  const coef = fontSize / 14;
  const pxToRem = size => `${(size / htmlFontSize) * coef}rem`;
  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => ({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    lineHeight,
    ...(fontFamily === defaultFontFamily ? { letterSpacing: `${round(letterSpacing / size)}em` } : {}),
    ...casing,
    ...allVariants,
  });
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.04, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.17, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.33, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
  };
  return deepmerge(
    {
      htmlFontSize,
      pxToRem,
      round,
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold,
      ...variants
    },
    other,
    {
      clone: false,
    },
  );
}