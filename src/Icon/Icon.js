import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import clsx from 'clsx';
import { capitalize } from '../utils/helpers';

export const styles = theme => ({
  root: {
    userSelect: 'none',
    fontSize: theme.typography.pxToRem(24),
    width: '1em',
    height: '1em',
    overflow: 'hidden',
    flexShrink: 0,
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorSecondary: {
    color: theme.palette.secondary.main,
  },
  colorError: {
    color: theme.palette.error.main,
  },
});


const Icon = React.forwardRef(function Icon(props, ref) {
  const {
    classes,
    className,
    color = 'inherit',
    component: Component = 'span',
    fontSize = 'default',
    ...other
  } = props;

  return (
    <Component
      className={clsx(
        'material-icons',
        classes.root,
        {
          [classes[`color${capitalize(color)}`]]: color !== 'inherit',
          [classes[`fontSize${capitalize(fontSize)}`]]: fontSize !== 'default',
        },
        className,
      )}
      aria-hidden
      ref={ref}
      {...other}
    />
  );
});

Icon.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),
  component: PropTypes.elementType,
  fontSize: PropTypes.oneOf(['inherit', 'default', 'small', 'large']),
};

Icon.muiName = 'Icon';

export default withStyles(styles, { name: 'MuiIcon' })(Icon);