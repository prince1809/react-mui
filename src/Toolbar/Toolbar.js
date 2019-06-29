import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  gutters: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    }
  },
  regular: theme.mixins.toolbar,
  dense: {
    minHeight: 48,
  }
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

  const className = clsx(
    classes.root,
    classes[variant],
    {
      [classes.gutters]: !disableGutters,
    },
    classNameProp,
  );

  return <Component className={className} ref={ref} {...other} />;
});

Toolbar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
  disableGutters: PropTypes.bool,
  variant: PropTypes.oneOf(['regular', 'dense']),
};

export default withStyles(styles, { name: 'MuiToolbar' })(Toolbar);
