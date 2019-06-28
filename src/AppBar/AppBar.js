import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Paper from '../Paper';
import withStyles from '../styles/withStyles';

export const styles = theme => {
  const backgroundColorDefault = theme.palette.type == 'light' ? theme.palette.grey[100] : theme.palette.grey[900];

  return {
    root: {
      display: 'flex',
    }
  }
};

const AppBar = React.forwardRef(function AppBar(props, ref) {
  const { classes, className, color = 'primary', position = 'fixed', ...other } = props;

  return (
    <Paper
      {...other}
    />
  );
});

AppBar.prpoTypes = {

};

export default withStyles(styles, { name: 'MuiAppBar' })(AppBar);