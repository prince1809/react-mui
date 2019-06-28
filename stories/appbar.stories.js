import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import withStyles from '../src/styles/withStyles';
import AppBar from '../src/AppBar';



const DefaultChips = withStyles(
  theme => ({
    root: {

    },
  }),
)(({ classes }) => (
  <div className={classes.root}>
    <AppBar>
      Appbar
    </AppBar>
  </div>
))

storiesOf('AppBar', module)
  .addDecorator(muiTheme())
  .add('default', () => <DefaultChips />);