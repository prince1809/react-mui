import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';


export const styles = theme => ({
  root: {

  }
});

const TableRow = React.forwardRef(function TableRow(props, ref) {
  const {
    classes,
    className,
    component: Component = 'tr',
    hover = false,
    selected = false,
    ...other
  } = props;

  return (
    <Component
      ref={ref}
      {...other}
    />
  );
});

TableRow.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
  hover: PropTypes.bool,
  selected: PropTypes.bool,
};

export default withStyles(styles, { name: 'MuiTableRow' })(TableRow);