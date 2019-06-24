import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import clsx from 'clsx';
import warning from 'warning';
import { capitalize } from '../utils/helpers';
import { useForkRef } from '../utils/reactHelpers';

export const styles = theme => {

  return {
    root: {
      fontFamily: theme.typography.fontFamily,
    },
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
  }

  const handleKeyDown = event => {

  };

  const handleKeyUp = event => {

  };

  const clickable = clickableProp !== false && onClick ? true : clickableProp;
  const small = size === 'small';

  const className = clsx(
    classes.root,
    {
      [classes.sizeSmall]: small,
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
      ref={handleRef}
      {...other}
    >
      {avatar || icon}
    </Component>
  );
});

Chip.propTypes = {
  avatar: PropTypes.element,
};

export default withStyles(styles, { name: 'MuiChip' })(Chip);



