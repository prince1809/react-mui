import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';

export const styles = theme => ({

});

const Toolbar = React.forwardRef(function Toolbar(props, ref) {
  const {
    classes,
    className: classNameProp,
    component: Component = 'div',
    disableGutters = false,
    variant = 'regular',
    ...other
  } = props;

  return <Component {...other} />;
});

Toolbar.propTypes = {
};

export default withStyles(styles, { name: 'MuiToolbar' })(Toolbar);
