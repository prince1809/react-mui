import React from 'react';
import PropTypes from 'prop-types';
import clx from 'clsx';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
import clsx from 'clsx';
import { capitalize } from '../utils/helpers';

export const styles = theme => ({
  root: {
    lineHeight: 1.75,
    ...theme.typography.button,
  },
  label: {

  },
  text: {

  },
  textPrimary: {
    color: theme.palette.primary.main,
  },
  textSecondary: {

  },
  outlined: {

  },
  outlinedPrimary: {

  },
  outlinedSecondary: {

  },
  contained: {

  },
  containedPrimary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  containedSecondary: {

  },
  focusVisible: {},
  disabled: {},
  colorInherit: {

  },
  sizeSmall: {

  },
  sizeLarge: {

  },
  fullWidth: {

  },
});

const Button = React.forwardRef(function Button(props, ref) {
  const {
    children,
    classes,
    className: classNameProp,
    color = 'default',
    component = 'button',
    disabled = false,
    disableFocusRipple = false,
    focusVisibleClassName,
    fullWidth = false,
    size = 'medium',
    type = 'button',
    variant = 'text',
    ...other
  } = props;

  const text = variant === 'text';
  const outlined = variant === 'outlined';
  const contained = variant === 'contained';
  const primary = color === 'primary';
  const secondary = color === 'secondary';
  const className = clsx(
    classes.root,
    {
      [classes.text]: text,
      [classes.textPrimary]: text && primary,
      [classes.textSecondary]: text && secondary,
      [classes.outlined]: outlined,
      [classes.outlinedPrimary]: outlined && primary,
      [classes.outlinedSecondary]: outlined && secondary,
      [classes.contained]: contained,
      [classes.containedPrimary]: contained && primary,
      [classes.containedSecondary]: contained && secondary,
      [classes[`size${capitalize(size)}`]]: size !== 'medium',
      [classes.disabled]: disabled,
      [classes.fullWidth]: fullWidth,
      [classes.colorInherit]: color === 'inherit',
    },
    classNameProp,
  );

  console.log(className)

  return (
    <ButtonBase
      className={className}
      component={component}
      disabled={disabled}
      focusRipple={!disableFocusRipple}
      focusVisibleClassName={clsx(classes.focusVisible, focusVisibleClassName)}
      ref={ref}
      type={type}
      {...other}
    >
      <span className={classes.label}>{children}</span>
    </ButtonBase>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  focusVisibleClassName: PropTypes.string,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'contained']),
  type: PropTypes.string,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained'])
};
export default withStyles(styles, { name: 'MuiButton' })(Button);