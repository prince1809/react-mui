import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
import { darken, fade, lighten } from '../styles/colorManipulator';


export const styles = theme => ({
  root: {

  }
});

const TableCell = React.forwardRef(function TableCell(props, ref) {
  const {
    align = 'inherit',
    classes,
    className,
    component,
    padding: paddingProp,
    scope: scopeProp,
    size: sizeProp,
    sortDirection,
    variant,
    ...other
  } = props;

  let Component;
  if (component) {
    Component = component;
  } else {
    Component = 'th';
  }

  return (
    <Component
      ref={ref}
      {...other}
    />
  );
});

TableCell.propTypes = {

};

export default withStyles(styles, { name: 'MuiTableCell' })(TableCell);