import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import { useForkRef, isMuiElement } from '../utils/reactHelpers';
import ListContext from '../List/ListContext';
import { isContext } from 'vm';
import ButtonBase from '../ButtonBase';

export const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    textDecoration: 'none',
    width: '100%',
    boxSizing: 'border-box',
    textAlign: 'left',
    paddingTop: 8,
    paddingBottom: 8,
    '&$focusVisible': {
      backgroundColor: theme.palette.action.selected,
    },
    '&$selected, &$selected:hover': {
      backgroundColor: theme.palette.action.selected,
    },
    '&$disabled': {
      opacity: 0.5,
    }
  },
  container: {
    position: 'relative',
  },
  focusVisible: {},

  dense: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  disabled: {},
  divider: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundClip: 'padding-box',
  },
  gutters: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  button: {
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: theme.palette.action.hover,
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  secondaryAction: {
    paddingRight: 48,
  },
  selected: {},
});

const ListItem = React.forwardRef(function ListItem(props, ref) {
  const {
    alignItems = 'center',
    autoFocus,
    button = false,
    children: childrenProp,
    classes,
    className,
    component: componentProp,
    ContainerComponent = 'li',
    ContaienrProps: { className: ContainerClassName, ...ContaienrProps } = {},
    dense,
    disabled = false,
    disableGutters = false,
    divider = false,
    focusVisibleClassName,
    selected = false,
    ...other
  } = props;


  const context = React.useContext(ListContext);
  const childContext = {
    dense: dense || isContext.dense || false,
    alignItems,
  };

  const children = React.Children.toArray(childrenProp);
  const hasSecondaryAction = children.length && isMuiElement(children[children.length - 1], ['ListItemSecondaryAction']);

  const handleOwnRef = React.useCallback(instance => {

  }, []);

  const handleRef = useForkRef(handleOwnRef, ref);

  const componentProps = {
    className: clsx(
      classes.root,
      {
        [classes.dense]: childContext.dense,
        [classes.gutters]: !disableGutters,
        [classes.divider]: divider,
        [classes.disabled]: disabled,
        [classes.button]: button,
        [classes.alignItemsFlexStart]: alignItems === 'flex-start',
        [classes.secondaryAction]: hasSecondaryAction,
        [classes.selected]: selected,
      },
      className,
    ),
    disabled,
    ...other,
  };


  let Compoent = componentProp || 'li';

  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = clsx(classes.focusVisible, focusVisibleClassName);
    Compoent = ButtonBase
  }

  if (hasSecondaryAction) {
    // Use div by default.
    Compoent = !componentProps.component && !componentProp ? 'div' : Compoent;

    if (ContainerComponent === 'li') {
      if (Compoent === 'li') {
        Compoent = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }

  }



  return (
    <ListContext.Provider value={childContext}>
      <Compoent ref={handleRef} {...componentProps}>
        {children}
      </Compoent>
    </ListContext.Provider>
  );

});

ListItem.propTypes = {
  alignItems: PropTypes.oneOf(['flex-start', 'center']),
};

export default withStyles(styles, { name: 'MuiListItem' })(ListItem);