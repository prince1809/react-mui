import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import clsx from 'clsx';
import warning from 'warning';
import { capitalize } from '../utils/helpers';
import { useForkRef } from '../utils/reactHelpers';
import unsupportedProp from '../utils/unsupportedProp';
import { fade, emphasize } from '../styles/colorManipulator';

export const styles = theme => {

  const height = 32;
  const smallHeight = 24;
  const backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  const deleteIconColor = fade(theme.palette.text.primary, 0.26);

  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor,
      borerRadius: height / 2,
      whiteSpace: 'noWrap',
      transitions: theme.transitions.create(['background-color', 'box-shadow']),
      cursor: 'default',
      outline: 'none',
      textDecoration: 'none',
      border: 'none',
      padding: 0,
      verticalAlign: 'middle',
      boxSizing: 'border-box',
    },
    sizeSmall: {
      height: smallHeight,
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    clickable: {
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.08),
      }
    }

  }
};

const Chip = React.forwardRef(function Chip(props, ref) {
  const {
    avatar: avatarProp,
    classes,
    className: classNameProp,
    clickable: clickableProp,
    color = 'default',
    component: Component = 'div',
    deleteIcon: deleteIconProp,
    icon: iconProp,
    label,
    onClick,
    onDelete,
    onKeyDown,
    onKeyUp,
    size = 'medium',
    variant = 'default',
    ...other
  } = props;

  const chipRef = React.useRef(null);

  const handleDeleteIconClick = event => {
    event.stopPropagation();
    if (onDelete) {
      onDelete(event);
    }
  };

  const handleKeyDown = event => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const handleKeyUp = event => {
    if (onKeyDown) {
      onKeyDown(event);
    }

    if (event.currentTarget !== event.target) {
      return;
    }
  };

  const clickable = clickableProp !== false && onClick ? true : clickableProp;
  const small = size === 'small';

  const className = clsx(
    classes.root,
    {
      [classes.sizeSmall]: small,
      [classes[`color${capitalize(color)}`]]: color !== 'default',
      [classes.clickable]: clickable,
      [classes[`clickableColor${capitalize(color)}`]]: clickable && color !== 'default',
      [classes.deletable]: onDelete,
      [classes[`deletableColor${capitalize(color)}`]]: onDelete && color !== 'default',
      [classes.outlined]: variant === 'outlined',
      [classes.outlinedPrimary]: variant === 'outlined' && color === 'primary',
      [classes.outlinedSecondary]: variant === 'outlined' && color === 'secondary',
    },
    classNameProp,
  );

  let deleteIcon = null;
  if (onDelete) {

  }

  let avatar = null;
  if (avatarProp && React.isValidElement(avatarProp)) {
    avatar = React.cloneElement(avatarProp, {
      className: clsx(classes.avatar, avatarProp.props.className, {
        [classes.avatarSmall]: small,
        [classes[`avatarColor${capitalize(color)}`]]: color !== 'default',
      }),
      childrenClassName: clsx(classes.avatarChildren, avatarProp.props.childrenClassName),
    });
  }

  let icon = null;
  if (iconProp && React.isValidElement(iconProp)) {

  }


  warning(
    !avatar || !icon,
    'Material-UI: the Chip component can not handle the avatar ' +
    'and the icon property at the same time. Pick one.',
  )

  const handleRef = useForkRef(chipRef, ref);

  return (
    <Component
      role={clickable || onDelete ? 'button' : undefined}
      className={className}
      tabIndex={clickable || onDelete ? 0 : undefined}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      ref={handleRef}
      {...other}
    >
      {avatar || icon}
      <span
        className={clsx(classes.label, {
          [classes.labelSmall]: small,
          [classes[`iconColor${capitalize(color)}`]]: color !== 'default',
        })}
      >
        {label}
      </span>
    </Component>
  );
});

Chip.propTypes = {
  avatar: PropTypes.element,
  children: unsupportedProp,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  clickable: PropTypes.bool,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  component: PropTypes.elementType,
  deleteIcon: PropTypes.element,
  icon: PropTypes.element,
  label: PropTypes.node,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium']),
  variant: PropTypes.oneOf(['default', 'outlined']),
};

export default withStyles(styles, { name: 'MuiChip' })(Chip);



