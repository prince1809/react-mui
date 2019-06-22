import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import NoSsr from '../NoSsr/NoSsr';
import TouchRipple from './TouchRipple';
import { elementTypeAcceptingRef } from '@material-ui/utils';

export const styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 'none',
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none',
    },
    '&$disabled': {
      pointerEvents: 'none',
      cursor: 'default',
    },
  },
  disabled: {},
  focusVisible: {},
};
const ButtonBase = React.forwardRef(function ButtonBase(props, ref) {
  const {
    action,
    buttonRef: buttonRefProp,
    centerRipple = false,
    children,
    classes,
    className: classNameProp,
    component = 'button',
    disabled,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    focusVisibleClassName,
    TouchRippleProps,
    type = 'button',
    ...other
  } = props;

  const buttonRef = React.useRef(null);

  const rippleRef = React.useRef(null);

  const className = clsx(
    classes.root,
    classNameProp,
  );
  let ComponentProp = component;
  return (
    <ComponentProp
      className={className}
    >
      {children}
      {!disableRipple && !disabled ? (
        <NoSsr>
          <TouchRipple ref={rippleRef} center={centerRipple} {...TouchRippleProps} />
        </NoSsr>
      ) : null}
    </ComponentProp>
  );
});

ButtonBase.propTypes = {
  action: PropTypes.func,
  buttonRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  centerRipple: PropTypes.bool,
  children: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: elementTypeAcceptingRef,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  disableTouchRipple: PropTypes.bool,
  focusRipple: PropTypes.bool,
  focusVisibleClassName: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onDragLeave: PropTypes.func,
  onFocus: PropTypes.func,
  onFocusVisible: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchStart: PropTypes.func,
  role: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  TouchRippleProps: PropTypes.object,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
};

export default withStyles(styles, { name: 'MuiButtonBase' })(ButtonBase);