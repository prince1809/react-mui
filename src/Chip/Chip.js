import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';

export const styles = theme => {

  return {
    root: {
      fontFamily: theme.typography.fontFamily,
    },
  }
};

const Chip = React.forwardRef(function Chip(props, ref) {
  const {
    component: Component = 'div',
  } = props;

  return (
    <Component>
      Chip
    </Component>
  );
});

Chip.propTypes = {
  avatar: PropTypes.element,
};

export default withStyles(styles, { name: 'MuiChip' })(Chip);



