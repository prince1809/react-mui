import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import Tablelvl2Context from '../Table/Tablelvl2Context';

export const styles = {
  root: {
    display: 'table-header-group',
  },
};

const tablelvl2 = {
  variant: 'head',
};

const TableHead = React.forwardRef(function (props, ref) {
  const {
    classes,
    className,
    component: Component = 'thead',
    ...other
  } = props;

  return (
    <Tablelvl2Context.Provider value={tablelvl2}>
      <Component className={clsx(classes.root, className)} ref={ref} {...other} />
    </Tablelvl2Context.Provider>
  );
});

TableHead.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
};

export default withStyles(styles, { name: 'MuiTableHead' })(TableHead);