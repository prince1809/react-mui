import React from 'react';
import propTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import withStyles from '../styles/withStyles';
import clsx from 'clsx';

export const styles = theme => ({
  root: {
    display: 'block',
  }
});


class TouchRipple extends React.PureComponent {

  state = {
    nextkey: 0,
    ripples: []
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

export default withStyles(styles, { flip: false, name: 'MuiTouchRipple' })(TouchRipple);