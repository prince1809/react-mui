import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import withStyles from '../styles/withStyles';
import clsx from 'clsx';

export const styles = theme => ({
  root: {
    display: 'block',
    position: 'absolute',
    overflow: 'hidden',
  }
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
    const rect = element ? element.getBoundingClientRect() : {};

    let rippleX;
    let rippleY;
    let rippleSize;


  };

  startCommit = params => {

  };

  stop = (event, ch) => {
    console.log("Ripple effect stopped");
    console.log('event:', event)
    console.log('ch:', ch)
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