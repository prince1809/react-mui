import React from 'react';
import PropTypes from 'prop-types';
import clx from 'clsx';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
import clsx from 'clsx';
import { capitalize } from '../utils/helpers';
import { fade } from '../styles/colorManipulator';

export const styles = theme => ({
  root: {
    lineHeight: 1.75,
    ...theme.typography.button,
    boxSizing: 'border-box',
    minWidth: 64,
    padding: '6px 16px',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
    transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
      duration: theme.transitions.duration.short,
    }),
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      '&$disabled': {
        backgroundColor: 'transparent',
      },
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
    }
  },
  label: {
    width: '100%',
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
  },
  text: {
    padding: '6px 8px',
  },
  textPrimary: {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  textSecondary: {
    color: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  outlined: {
    padding: '5px 16px',
    border: `1px solid ${
      theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
      }`,
    '&$disabled': {
      border: `1px solid ${theme.palette.action.disabled}`,
    },
  },
  outlinedPrimary: {
    color: theme.palette.primary.main,
    border: `1px solid ${fade(theme.palette.primary.main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  outlinedSecondary: {
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      border: `1px solid ${theme.palette.secondary.main}`,
      backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  contained: {

  },
  containedPrimary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    }
  },
  containedSecondary: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
  },
  focusVisible: {},
  disabled: {},
  colorInherit: {
    color: 'inherit',
    borderColor: 'currentColor',
  },
  sizeSmall: {
    padding: '4px 8px',
    fontSize: theme.typography.pxToRem(13),
  },
  sizeLarge: {
    padding: '8px 24px',
    fontSize: theme.typography.pxToRem(15),
  },
  fullWidth: {
    width: '100%',
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