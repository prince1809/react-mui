import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';

export const styles = {

};
const ButtonBase = React.forwardRef(function ButtonBase(props, ref) {
  return (
    <button>
      Button
    </button>
  );
});

export default withStyles(styles, { name: 'MuiButtonBase' })(ButtonBase);