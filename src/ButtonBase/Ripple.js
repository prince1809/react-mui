import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Transition } from 'react-transition-group'

function Ripple(props) {
  const { classes, className, pulsate = false, rippleX, rippleY, rippleSize, ...other } = props;
  const [visible, setVisible] = React.useState(false);
  const [leaving, setLeaving] = React.useState(false);

  const handleEnter = () => {
    setVisible(true);
  }

  const handleExit = () => {
    setLeaving(true);
  }

  const rippleClassName = clsx(
    classes.ripple,
    {
      [classes.rippleVisible]: visible,
      [classes.ripplePulsate]: pulsate,
    },
    className,
  );

  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    bottom: -(rippleSize / 2) + rippleX,
  };

  const childClassName = clsx(classes.child, {
    [classes.childLeaving]: leaving,
    [classes.childPulsate]: pulsate,
  });

  return (
    <Transition onEnter={handleEnter} onExit={handleExit} {...other}>
      <span className={rippleClassName} style={rippleStyles}>
        <span className={childClassName} />
      </span>
    </Transition>
  );
}

Ripple.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  pulsate: PropTypes.bool,
  rippleSize: PropTypes.number,
  rippleX: PropTypes.number,
  rippleY: PropTypes.number,
};

export default Ripple;