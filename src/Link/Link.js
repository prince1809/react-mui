import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import Typography from '../Typography';
import clsx from 'clsx';
import { useIsFocusVisible } from '../utils/focusVisible';
import { useForkRef } from '../utils/reactHelpers';
import { capitalize } from '../utils/helpers';

export const styles = {
  root: {},
  underLineNone: {
    textDecoration: 'none',
  },
  underLineHover: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'undeline',
    }
  },
  underlineAlways: {
    textDecoration: 'underline',
  },
  button: {
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
    '&::-moz-focus-inner': {
      borderStyle: 'none',
    },
    '&$focusVisible': {
      outline: 'auto',
    }
  },

  focusVisible: {},
};

const Link = React.forwardRef(function Link(props, ref) {
  const {
    classes,
    className,
    color = 'primary',
    component = 'a',
    onBlur,
    onFocus,
    TypographyClasses,
    underline = 'hover',
    variant = 'inherit',
    ...other
  } = props;

  const { isFocusVisible, onBlurVisible, ref: focusVisibleRef } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = React.useState(false);
  const handleRef = useForkRef(ref, focusVisibleRef);
  const handleBlur = event => {
    onBlurVisible();
    setFocusVisible(false);
    if (onBlur) {
      onBlur(event);
    }
  };
  const handleFocus = event => {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }
    if (onFocus) {
      onFocus(event);
    }
  };

  return (
    <Typography
      className={clsx(
        classes.root,
        {
          [classes.button]: component === 'button',
          [classes.focusVisible]: focusVisible,
        },
        classes[`underline${capitalize(underline)}`],
        className,
      )}
      classes={TypographyClasses}
      color={color}
      component={component}
      onBlur={handleBlur}
      onFocus={handleFocus}
      ref={handleRef}
      variant={variant}
      {...other}
    />
  );
});

Link.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'default',
    'error',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
  ]),
  component: PropTypes.elementType,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  TypographyClasses: PropTypes.object,
  undeline: PropTypes.oneOf(['none', 'hover', 'always']),
  variant: PropTypes.string,
};

export default withStyles(styles, { name: 'MuiLink' })(Link);