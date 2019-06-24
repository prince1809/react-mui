import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import warning from 'warning';
import withStyles from '../styles/withStyles';

export const styles = theme => {

  const elevations = {};
  theme.shadows.forEach((shadow, index) => {
    elevations[`elevation${index}`] = {
      boxShadow: shadow,
    };
  });
  return {
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow'),
    },
    rounded: {
      borderRadius: theme.shape.borderRadius,
    },
    ...elevations,
  };
};


const Paper = React.forwardRef(function Paper(props, ref) {
  const {
    classes,
    className: classNameProps,
    component: Component = 'div',
    square = false,
    elevation = 1,
    ...other
  } = props;

  warning(
    elevation >= 0 && elevation < 25,
    `Material-UI: this elevation \`${elevation}\` is not implemented`,
  );

  const className = clsx(
    classes.root,
    classes[`elevation${elevation}`],
    {
      [classes.rounded]: !square,
    },
    classNameProps,
  );

  return <Component
    className={className}
    ref={ref}
    {...other}
  />;

});

Paper.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
  elevation: PropTypes.number,
  square: PropTypes.bool,
}

export default withStyles(styles, { name: 'MuiPaper' })(Paper);
