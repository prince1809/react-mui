import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import NoSsr from '../NoSsr/NoSsr';
import TouchRipple from './TouchRipple';
import { elementTypeAcceptingRef } from '@material-ui/utils';
import { useForkRef } from '../utils/reactHelpers';
import { useIsFocusVisible } from '../utils/focusVisible';

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

const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

function useEventCallback(fn) {
  const ref = React.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return React.useCallback(event => (0, ref.current)(event), []);
}
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
    onBlur,
    onClick,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    onDragLeave,
    tabIndex = 0,
    TouchRippleProps,
    type = 'button',
    ...other
  } = props;

  const buttonRef = React.useRef(null);
  function getButtonNode() {
    return ReactDOM.findDOMNode(buttonRef.current);
  }

  const rippleRef = React.useRef(null);

  const [focusVisible, setFocusVisible] = React.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  const { isFocusVisible, onBlurVisible, ref: focusVisibleRef } = useIsFocusVisible();

  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return useEventCallback(event => {
      if (eventCallback) {
        eventCallback(event);
      }

      const ignore = event.defaultPrevented || skipRippleAction;;
      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }
      return true;
    });
  }

  const handleMouseDown = useRippleHandler('start', onMouseDown);
  const handleDragLeave = useRippleHandler('stop', onDragLeave);
  const handleMouseUp = useRippleHandler('stop', onMouseUp);
  const handleMouseLeave = useRippleHandler('stop', event => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler('start', onTouchStart);
  const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  const handleTouchMove = useRippleHandler('stop', onTouchMove);
  const handleBlur = useRippleHandler('stop', event => {
    if (focusVisible) {
      onBlurVisible(event);
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback(event => {
    if (disabled) {
      return;
    }

    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
  });
  const keyDownRef = React.useRef(false);
  const handleKeyDown = useEventCallback(event => {

  });
  const handleKeyUp = useEventCallback(event => {

  });

  const className = clsx(
    classes.root,
    {
      [classes.disabled]: disabled,
      [classes.focusVisible]: focusVisible,
      [focusVisibleClassName]: focusVisible,
    },
    classNameProp,
  );
  let ComponentProp = component;

  let buttonProps = {};
  if (ComponentProp === 'button') {
    buttonProps.type = type;
    buttonProps.disabled = disabled;
  } else {
    buttonProps.role = 'button';
    buttonProps['aria-disabled'] = disabled;
  }

  const handleUserRef = useForkRef(buttonRefProp, ref);
  const handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
  const handleRef = useForkRef(handleUserRef, handleOwnRef);
  return (
    <ComponentProp
      className={className}
      onBlur={handleBlur}
      onClick={onClick}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onDragLeave={handleDragLeave}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      ref={handleRef}
      tabIndex={disabled ? -1 : tabIndex}
      {...buttonProps}
      {...other}
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
  children: PropTypes.node,
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