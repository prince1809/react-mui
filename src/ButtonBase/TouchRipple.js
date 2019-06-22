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

  };

  startCommit = params => {

  };

  stop = (event, ch) => {

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