import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  root: {

  }
});

const ListItem = React.forwardRef(function ListItem(props, ref) {
  const {
    button = false,
    component: componentProp,
  } = props;


  let Compoent = componentProp || 'li';



  return (
    <Compoent>
      Item
    </Compoent>
  );

});

export default withStyles(styles, { name: 'MuiListItem' })(ListItem);