import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import '../Button'; // So we don't have any override priority issue.


export const styles = theme => ({
  root: {
    display: 'inline-flex',
    borderRadius: theme.shape.borderRadius,
  },
  contained: {
    boxShadow: theme.shadows[2],
  },
  fullWidth: {
    width: '100%',
  },
  grouped: {
    minWidth: 40,
    '&:not(:first-child)': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    '&:not(:last-child)': {
      borderTopRightRadius: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
    groupedOutlined: {
      '&:not(:first-child)': {
        borderLeftColor: 'transparent',
        marginLeft: -1,
      }
    }
  }
});



const ButtonGroup = React.forwardRef(function ButtonGroup(props, ref) {
  const {
    children,
    classes,
    className: classNameProp,
    color = 'default',
    component: Component = 'div',
    disabled = false,
    disableFocusRipple = false,
    disableRipple = false,
    fullWidth = false,
    size = 'medium',
    variant = 'outlined',
    ...other
  } = props;

  const outlined = variant === 'outlined';
  const contained = variant === 'contained';
  const primary = color === 'primary';
  const secondary = color === 'secondary';

  const buttonClassName = clsx(classes.grouped, {
    [classes.groupedOutlined]: outlined,
    [classes.groupedOutlinedPrimary]: outlined && primary,
    [classes.groupedOutlinedSecondary]: outlined && secondary,
    [classes.groupedContained]: contained,
    [classes.groupedContainedPrimary]: contained && primary,
    [classes.groupedContainedSecondary]: contained && secondary,
  });

  return (
    <Component
      role="group"
      className={clsx(
        classes.root,
        {
          [classes.contained]: contained,
          [classes.fullWidth]: fullWidth,
        },
        classNameProp,
      )}
      ref={ref}
      {...other}
    >
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
          return null;
        }

        warning(
          child.type !== React.Fragment,
          [
            "Material-UI: the ButtonGroup component diesn't accept a Fragment as  child",
            'Consider providing an array instead',
          ].join('\n'),
        );

        return React.cloneElement(child, {
          className: clsx(buttonClassName, child.props.className),
          disabled: child.props.disabled || disabled,
          color,
          disableFocusRipple,
          disableRipple,
          fullWidth,
          size: child.props.size || size,
          variant,
        });
      })}

    </Component>
  );
});

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['outlined', 'contained'])
}

export default withStyles(styles, { name: 'MuiButtonGroup' })(ButtonGroup);
