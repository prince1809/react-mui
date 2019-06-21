import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import withStyles from '../src/styles/withStyles';

import Button from '../src/Button';

const ContainedButtons = withStyles(
  theme => ({
    button: {
      margin: theme.spacing(2),
    },
    input: {
      display: 'none',
    },
  }),
)(({ classes }) => (
  <div>
    <Button variant="contained" className={classes.button}>
      Default
    </Button>
    <Button variant="contained" color="primary" className={classes.button}>
      Primary
    </Button>
    <Button variant="contained" color="secondary" className={classes.button}>
      Secondary
    </Button>
    <Button variant="contained" color="secondary" disabled className={classes.button}>
      Disabled
    </Button>
    <Button variant="contained" href="#contained-buttons" className={classes.button}>
      Link
    </Button>
    <input
      accept="image/*"
      className={classes.input}
      id="contained-button-file"
      multiple
      type="file"
    />
    <label htmlFor="contained-button-file">
      <Button variant="contained" component="span" className={classes.button}>
        Upload
      </Button>
    </label>
  </div>
));

storiesOf('Buttons', module)
  .addDecorator(muiTheme())
  .add('Contained Buttons', () => <ContainedButtons />);