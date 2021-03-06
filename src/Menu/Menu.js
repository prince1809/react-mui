import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';

export const styles = {

};


const Menu = React.forwardRef(function Menu(props, ref) {
  const {
    autoFocus: autoFocus,
    children,
    classes,
    disableAutoFocusItem = false,
    MenuListProps = {},
    onClose,
    onEntering,
    open,
    PaperProps,
    PopoverClasses,
    theme,
    transitionDuration = 'auto',
    variant = 'selectedMenu',
    ...other
  } = props;

  return (
    <div>
      Popover
    </div>
  );

});

Menu.propTypes = {

};

export default withStyles(styles, { name: 'MuiMenu', withTheme: true })(Menu);