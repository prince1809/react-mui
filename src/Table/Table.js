import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';



export const styles = {
  root: {

  },
};

const Table = React.forwardRef(function Table(props, ref) {
  const {
    classes,
    className,
    component: Component = 'table',
    padding = 'default',
    size = 'medium',
    ...other
  } = props;

  return (
    <Component ref={ref} className={clsx(classes.root, className)} {...other} />
  );

});

Table.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  padding: PropTypes.oneOf(['default', 'checkbox', 'none']),
  size: PropTypes.oneOf(['small', 'medium']),
};

export default withStyles(styles, { name: 'MuiTable' })(Table);