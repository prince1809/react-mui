import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  root: {

  }
});

const Container = React.forwardRef(function Container(props, ref) {

  const {
    classes,
    className,
    component: Component = 'div',
    fixed = false,
    maxWidth = 'lg',
    ...other
  } = props;

  return (
    <Component
      className={clsx(
        classes.root,
        {
          [classes.fixed]: fixed,
        },
        className,
      )}
      ref={ref}
      {...other}
    />
  )

})


export default withStyles(styles, { name: 'MuiContainer' })(Container);