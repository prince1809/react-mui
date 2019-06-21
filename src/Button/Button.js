import React from 'react';
import PropTypes from 'prop-types';
import clx from 'clsx';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  root: {
    lineHeight: 1.75,
    ...theme.typography.button,
  },
});

const Button = React.forwardRef(function Button(props, ref) {
  const {
    children,
    classes,
    className: classNameProp,
  } = props;

  return (
    <div>
      Button
    </div>
  );
});

export default withStyles(styles, { name: 'MuiButton' })(Button);