import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';


export const styles = theme => ({
  root: {
    minWidth: 56,
    color: theme.palette.action.active,
    flexShrink: 0,
    display: 'inline-flex',
  },
});


const ListItemIcon = React.forwardRef(function ListItemIcon(props, ref) {
  const { classes, className, ...other } = props;

  return <div className={clsx(classes.root, className)} ref={ref} {...other} />

});

ListItemIcon.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { name: 'MuiListItemIcon' })(ListItemIcon);