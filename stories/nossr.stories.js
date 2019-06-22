import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import withStyles from '../src/styles/withStyles';

import Button from '../src/Button';
import NoSsr from '../src/NoSsr';

const SimpleNoSsr = withStyles(
  theme => ({
    button: {
      display: 'block',
      margin: theme.spacing(2),
    }
  }),
)(({ classes }) => (
  <div>
    <Button variant="contained" className={classes.button} color="primary">
      Server and Client
    </Button>
    <NoSsr>
      <Button variant="contained" className={classes.button} color="secondary">
        Client Only
      </Button>
    </NoSsr>
  </div>
));

storiesOf('NoSsr', module)
  .addDecorator(muiTheme())
  .add('default', () => <SimpleNoSsr />);