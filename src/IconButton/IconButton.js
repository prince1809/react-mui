import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { chainPropTypes } from '@material-ui/utils';
import withStyles from '../styles/withStyles';
import { fade } from '../styles/colorManipulator';
import ButtonBase from '../ButtonBase';
import { capitalize } from '../utils/helpers';

export const styles = theme => ({
  root: {
    textAlign: 'center',
    flex: '0 0 auto',
    fontSize: theme.typography.pxToRem(24),
    padding: 12,
    borderRadius: '50%',
    overflow: 'visible',
    color: theme.palette.action.active,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      }
    },
    '&$disabled': {
      backgroundColor: 'transparent',
      color: theme.palette.action.disabled,
    },
  },
  edgeStart: {

  },
  edgeEnd: {

  },
  colorInherit: {
    color: 'inherit',
  },
  colorPrimary: {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      }
    }
  },
  colorSecondary: {
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  disabled: {},
  sizeSmall: {

  },
  label: {
    width: '100%',
    display: 'flex',
    alignItems: 'inherit',
    justifyContent: 'inherit',
  }
});

const IconButton = React.forwardRef(function IconButton(props, ref) {
  const {
    edge = false,
    children,
    classes,
    className,
    color = 'default',
    disabled = false,
    disableFocusRipple = false,
    size = 'medium',
    ...other
  } = props;

  return (
    <ButtonBase
      className={clsx(
        classes.root,
        {
          [classes[`color${capitalize(color)}`]]: color !== 'default',
          [classes.disabled]: disabled,
          [classes[`size${capitalize(size)}`]]: size !== 'medium',
          [classes.edgeStart]: edge === 'start',
          [classes.edgeEnd]: edge === 'end',
        },
        className
      )}
      centerRipple
      focusRipple={!disableFocusRipple}
      disabled={disabled}
      ref={ref}
      {...other}
    >
      <span className={classes.label}>{children}</span>
    </ButtonBase>
  )
});

IconButton.propTypes = {
  children: chainPropTypes(PropTypes.node, props => {
    const found = React.Children.toArray(props.children).some(
      child => React.isValidElement(child) && child.props.onClick,
    );

    if (found) {
      return new Error(
        [
          'React-UI: You are providing an onClick event listener ' +
          'to a child of a button element.',
          'Firefox will never trigger the event',
        ].join('\n'),
      );
    }

    return null;
  }),
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  disabled: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  edge: PropTypes.oneOf(['start', 'end', false]),
  size: PropTypes.oneOf(['small', 'medium']),
};

export default withStyles(styles, { name: 'MuiIconButton' })(IconButton);