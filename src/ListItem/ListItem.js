import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import { useForkRef } from '../utils/reactHelpers';
import ListContext from '../List/ListContext';

export const styles = theme => ({
  root: {

  }
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


  const children = React.Children.toArray(childrenProp);
  const childContext = {

  };

  const handleOwnRef = React.useCallback(instance => {

  }, []);
  const handleRef = useForkRef(handleOwnRef, ref);


  let Compoent = componentProp || 'li';



  return (
    <ListContext.Provider value={childContext}>
      <Compoent>
        {children}
      </Compoent>
    </ListContext.Provider>
  );

});

ListItem.propTypes = {
  alignItems: PropTypes.oneOf(['flex-start', 'center']),
};

export default withStyles(styles, { name: 'MuiListItem' })(ListItem);