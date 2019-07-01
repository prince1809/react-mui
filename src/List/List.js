import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';

export const styles = {

};

const List = React.forwardRef(function List(props, ref) {
  const {
    children,
    classes,
    className,
    component: Component = 'ul',
    dense = false,
    ...other
  } = props;

  return (
    <Component>
      {children}
    </Component>
  );
});

List.propTypes = {

};


export default withStyles(styles, { name: 'MuiList' })(List);