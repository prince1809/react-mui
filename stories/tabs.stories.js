import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import withStyles from '../src/styles/withStyles';
import AppBar from '../src/AppBar';
import Tabs from '../src/Tabs';


const DefaultTabs = withStyles(
  theme => ({
    root: {

    },
  }),
)(({ classes }) => (
  <div className={classes.root}>
    <AppBar>
      <Tabs>
        Tabs
      </Tabs>
    </AppBar>
  </div>
));

storiesOf('Tabs', module)
  .addDecorator(muiTheme())
  .add('default', () => <DefaultTabs />);