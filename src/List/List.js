import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import ListContext from './ListContext';

export const styles = {
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
  },
  padding: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  dense: {},
  subheader: {
    paddingTop: 0,
  }

};

const List = React.forwardRef(function List(props, ref) {
  const {
    children,
    classes,
    className,
    component: Component = 'ul',
    dense = false,
    disablePadding = false,
    subheader,
    ...other
  } = props;

  const context = React.useMemo(() => ({ dense }), [dense]);

  return (
    <ListContext.Provider value={context}>
      <Component
        className={clsx(
          classes.root,
          {
            [classes.dense]: dense,
            [classes.padding]: !disablePadding,
            [classes.subheader]: subheader,
          },
          className,
        )}
        ref={ref}
        {...other}
      >
        {subheader}
        {children}
      </Component>
    </ListContext.Provider>
  );
});

List.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
  dense: PropTypes.bool,
  disablePadding: PropTypes.bool,
  subheader: PropTypes.node,
};

export default withStyles(styles, { name: 'MuiList' })(List);