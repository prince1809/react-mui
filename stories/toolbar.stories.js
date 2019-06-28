import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import withStyles from '../src/styles/withStyles';
import Toolbar from '../src/Toolbar';
import Typography from '../src/Typography';
import Button from '../src/Button';



const DefaultChips = withStyles(
  theme => ({
    root: {

    },
  }),
)(({ classes }) => (
  <div className={classes.root}>
    <Toolbar>
      <Typography variant="h6">
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </div>
))

storiesOf('Toolbar', module)
  .addDecorator(muiTheme())
  .add('default', () => <DefaultChips />);