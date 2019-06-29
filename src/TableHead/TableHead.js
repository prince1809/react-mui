import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';

export const styles = {
  root: {

  },
};


const TableHead = React.forwardRef(function (props, ref) {
  const {
    classes,
    className,
    component: Component = 'thead',
    ...other
  } = props;

  return (
    <Component className={clsx(classes.root, className)} ref={ref} {...other} />
  );
});

TableHead.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
};

export default withStyles(styles, { name: 'MuiTableHead' })(TableHead);