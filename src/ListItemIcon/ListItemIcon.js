import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';


export const styles = theme => ({

});


const ListItemIcon = React.forwardRef(function ListItemIcon(props, ref) {
  const { classes, className, ...other } = props;

  return <div {...other} />

});

ListItemIcon.propTypes = {

};

export default withStyles(styles, { name: 'MuiListItemIcon' })(ListItemIcon);