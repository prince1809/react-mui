import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import withStyles from '../src/styles/withStyles';

import Ripple from '../src/ButtonBase/Ripple';
import StoryFixture from './storyFixture';

const DefaultRipple = withStyles(
  theme => ({
    root: {

    },
    ripple: {

    },
    rippleVisible: {

    },
    ripplePulsate: {

    },
    child: {

    },
    childLeaving: {

    },
    childPulsate: {

    },
  }),
)(({ classes }) => (
  <div>
    <Ripple
      classes={classes}
      timeout={150}
      rippleSize={100}
      rippleX={100}
      rippleY={100}
    >
      This is default Ripple
    </Ripple>
  </div>
));


class ToggleFixture extends React.Component {
  state = { show: this.props.defaultIn }
  render() {
    return (
      <StoryFixture description={this.props.description}>
        <div style={{ marginBottom: 10 }}>
          <button
            onClick={() => this.setState(({ show }) => ({
              show: !show,
            }))}>
            Toggle
          </button>
        </div>
        {React.cloneElement(this.props.children, {
          in: this.state.show,
        })}
      </StoryFixture>
    );
  }
}

storiesOf('Ripple', module)
  .add('default', () => (
    <ToggleFixture>
      <DefaultRipple />
    </ToggleFixture>
  ));