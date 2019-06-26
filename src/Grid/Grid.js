import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import { keys as breakpointKeys } from '../styles/createBreakpoints';
import { breakpoints } from '@material-ui/system';

const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  const styles = {};


  GRID_SIZES.forEach(size => {
    const key = `grid-${breakpoint}-${size}`;

    if (size === true) {
      styles[key] == {
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {

      }
      return;
    }

    const width = `${Math.round((size / 12) * 10e7) / 10e5}%`;

    styles[key] = {

    };
  });

  if (breakpoint === 'xs') {
    Object.assign(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function generateGutter(theme, breakpoint) {
  const styles = {};

  SPACINGS.forEach(spacing => {
    const themeSpacing = theme.spacing(spacing);

    if (themeSpacing === 0) {
      return;
    }

    styles[`spacing-${breakpoint}-${spacing}`] = {
    };

  });
  return styles;
}


export const styles = theme => ({
  root: {},
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  },
  item: {
    boxSizing: 'border-box',
    margin: '0',
  },

  zeroMinWidth: {
    minWidth: 0,
  },
  'direction-xs-column': {
    flexDirection: 'column',
  },
  'direction-xs-column-reverse': {

  },
  'direction-xs-row-reverse': {

  },
  'wrap-xs-nowrap': {

  },
  'wrap-xs-wrap-reverse': {

  },
  'align-items-xs-center': {

  },
  'align-items-xs-flex-start': {

  },
  'align-items-xs-flex-end': {

  },
  'align-items-xs-baseline': {

  },
  'align-content-xs-center': {

  },
  'align-content-xs-flex-start': {

  },
  'align-content-xs-flex-end': {

  },
  'align-content-xs-space-between': {

  },
  'align-content-xs-space-around': {

  },
  'justify-xs-center': {

  },
  'justify-xs-flex-end': {

  },
  'justify-xs-space-between': {

  },
  'justify-xs-space-around': {

  },
  'justify-xs-space-evenly': {

  },
  ...generateGutter(theme, 'xs'),
  ...breakpointKeys.reduce((accumulator, key) => {
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}),
});

const Grid = React.forwardRef((props, ref) => {
  const {
    alignContent = 'stretch',
    alignItems = 'stretch',
    classes,
    className: classNameProp,
    component: Component = 'div',
    container = false,
    direction = 'row',
    item = false,
    justify = 'flex-start',
    lg = false,
    md = false,
    sm = false,
    spacing = 0,
    wrap = 'wrap',
    xl = false,
    xs = false,
    zeroMinWidth = false,
    ...other
  } = props;

  const clasName = clsx(
    classes.root,
    {
      [classes.container]: container,
      [classes.item]: item,
      [classes.zeroMinWidth]: zeroMinWidth,
      [classes[`spacing-xs-${String(spacing)}`]]: container && spacing !== 0,
      [classes[`direction-xs-${String(direction)}`]]: direction !== 'row',
      [classes[`wrap-xs-${String(wrap)}`]]: wrap !== 'wrap',
      [classes[`align-items-xs-${String(alignItems)}`]]: alignItems !== 'stretch',
      [classes[`align-content-xs-${String(alignContent)}`]]: alignContent !== 'stretch',
      [classes[`justify-xs-${String(justify)}`]]: justify !== 'flex-start',
      [classes[`grid-xs-${String(xs)}`]]: xs !== false,
      [classes[`grid-sm-${String(sm)}`]]: sm !== false,
      [classes[`grid-md-${String(md)}`]]: md !== false,
      [classes[`grid-lg-${String(lg)}`]]: lg !== false,
      [classes[`grid-xl-${String(xl)}`]]: xl !== false,
    },
    classNameProp,
  );

  return <Component className={clasName} ref={ref} {...other} />;
})

Grid.propTypes = {

  alignContent: PropTypes.oneOf([
    'stretch',
    'center',
  ]),
};

const styledGrid = withStyles(styles, { name: 'MuiGrid' })(Grid);

export default styledGrid;