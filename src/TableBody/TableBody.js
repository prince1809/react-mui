import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';

export const styles = {
  root: {

  },
};

const TableBody = React.forwardRef(function TableBody(props, ref) {
  const {
    classes,
    className,
    component: Component = 'tbody',
    ...other
  } = props;

  return (
    <Component className={clsx(classes.root, className)} ref={ref} {...other} />
  );
});

TableBody.propTypes = {
};

export default withStyles(styles, { name: 'MuiTableBody' })(TableBody);