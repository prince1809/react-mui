import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import withStyles from '../styles/withStyles';
import clsx from 'clsx';
import Ripple from './Ripple';

const DURATION = 550;
export const DELAY_RIPPLE = 80;

export const styles = theme => ({
  root: {
    display: 'block',
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: 'inherit',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    pointerEvents: 'none',
    zIndex: 0,
  },
  ripple: {
    opacity: 0,
    position: 'absolute',
  },
  rippleVisible: {
    opacity: 0.3,
    transform: 'scale(1)',
    animation: `mui-ripple-enter ${DURATION}ms ${theme.transitions.easing.easeInOut}`,
    animationName: '$mui-ripple-enter',
  },
  ripplePulsate: {
    animationDuration: `${theme.transitions.duration.shorter}ms`,
  },
  child: {
    opacity: 1,
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  childLeaving: {
    opacity: 0,
    animation: `mui-ripple-exit ${DURATION}ms ${theme.transitions.easing.easeInOut}`,
    animationName: '$mui-ripple-exit',
  },
  childPulsate: {
    position: 'absolute',
    left: 0,
    top: 0,
    animation: `mui-ripple-pulsate 2500ms ${theme.transitions.easing.easeInOut} 200ms infinite`,
    animationName: '$mui-ripple-pulsate',
  },
  '@keyframes mui-ripple-enter': {
    '0%': {
      transform: 'scale(0)',
      opacity: 0.1,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 0.3,
    },
  },
  '@keyframes mui-ripple-exit': {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
  '@keyframes mui-ripple-pulsate': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(0.92)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
});


class TouchRipple extends React.PureComponent {

  state = {
    nextkey: 0,
    ripples: []
  };

  container = React.createRef();

  componentWillUnmount() {
    clearTimeout(this.startTimer);
  }

  pulsate = () => {
    this.start({}, { pulsate: true });
  };

  start = (event = {}, options = {}, cb) => {
    console.log("Ripple effect started");
    console.log('event:', event)
    console.log('options:', options)
    console.log('cb:', cb)

    const {
      pulsate = false,
      center = this.props.center || options.center,
      fakeElement = false,
    } = options;

    if (event.type === 'mousedown' && this.ignoringMouseDown) {
      this.ignoringMouseDown = false;
      return;
    }

    if (event.type === 'touchstart') {
      this.ignoringMouseDown = true;
    }

    const element = fakeElement ? null : this.container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
    };

    let rippleX;
    let rippleY;
    let rippleSize;

    if (
      center ||
      (event.clientX === 0 && event.clientY === 0) ||
      (!event.clientX && !event.touches)
    ) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const clientX = event.clientX ? event.clientX : event.touches[0].clientX;
      const clientY = event.clientY ? event.clientY : event.touches[0].clientY;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }


    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }

    if (event.touches) {
      // Prepare the ripple effect
      this.startTimerCommit = () => {
        this.startCommit({ pulsate, rippleX, rippleY, rippleSize, cb });
      };

      // Delay the execution of the ripple effect.
      this.startTimer = setTimeout(() => {
        if (this.startTimerCommit) {
          this.startTimerCommit();
          this.startTimerCommit = null;
        }
      }, DELAY_RIPPLE); // we have to make a tradeoff with this value.
    } else {
      this.startCommit({ pulsate, rippleX, rippleY, rippleSize, cb });
    }
  };

  startCommit = params => {
    console.log('startCommit');
    const { pulsate, rippleX, rippleY, rippleSize, cb } = params;
    this.setState(
      state => ({
        nextKey: state.nextKey + 1,
        ripples: [
          ...state.ripples,
          <Ripple
            key={state.nextKey}
            classes={this.props.classes}
            timeout={{
              exit: DURATION,
              enter: DURATION,
            }}
            pulsate={pulsate}
            rippleX={rippleX}
            rippleY={rippleY}
            rippleSize={rippleSize}
          />
        ]
      }),
      cb,
    );
    console.log(this.state.ripples);
  };

  stop = (event, ch) => {
    console.log("Ripple effect stopped");
    console.log('event:', event)
    console.log('ch:', ch)
    clearTimeout(this.startTimer);
    const { ripples } = this.state;
    if (event.type === 'touched' && this.startTimerCommit) {
      event.persist();
      this.startTimerCommit();
      this.startTimerCommit = null;
      this.startTimer = setTimeout(() => {
        this.stop(event, cb);
      });
      return;
    }

    this.startTimerCommit = null;

    if (ripples && ripples.length) {
      this.setState(
        {
          ripples: ripples.slice(1),
        },
        cb,
      );
    }
  };

  render() {
    const { center, classes, className, ...other } = this.props;

    return (
      <span className={clsx(classes.root, className)} ref={this.container} {...other}>
        <TransitionGroup component={null} enter exit>
          {this.state.ripples}
        </TransitionGroup>
      </span>
    );
  }
}

TouchRipple.propTypes = {
  center: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

TouchRipple.defaultProps = {
  center: false,
}

export default withStyles(styles, { flip: false, name: 'MuiTouchRipple' })(TouchRipple);