import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import TableContext from './TableContext';

export const styles = {
  root: {
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: 0,
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

  const table = React.useMemo(() => { { padding, size } }, [padding, size]);

  return (
    <TableContext.Provider value={table}>
      <Component ref={ref} className={clsx(classes.root, className)} {...other} />
    </TableContext.Provider>
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