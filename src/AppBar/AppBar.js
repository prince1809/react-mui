import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Paper from '../Paper';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';

export const styles = theme => {
  const backgroundColorDefault = theme.palette.type == 'light' ? theme.palette.grey[100] : theme.palette.grey[900];

  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      zIndex: theme.zIndex.appBar,
      flexShrink: 0,
    },
    positionFixed: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0,
    },
    positionAbsolute: {

    },
    positionSticky: {

    },
    positionStatic: {
      position: 'static',
    },
    positionRelative: {

    },
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault),
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  };
};

const AppBar = React.forwardRef(function AppBar(props, ref) {
  const { classes, className, color = 'primary', position = 'fixed', ...other } = props;

  return (
    <Paper
      square
      component="header"
      elevation={4}
      className={clsx(
        classes.root,
        classes[`position${capitalize(position)}`],
        {
          [classes[`color${capitalize(color)}`]]: color !== 'inherit',
          'mui-fixed': position === 'fixed', // Useful for the Dialog
        },
        className,
      )}
      ref={ref}
      {...other}
    />
  );
});

AppBar.prpoTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'default']),
  position: PropTypes.oneOf(['fixed', 'absolute', 'sticky', 'static', 'relative']),
};

export default withStyles(styles, { name: 'MuiAppBar' })(AppBar);