import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import withStyles from '../src/styles/withStyles';

import Button from '../src/Button';

const ContainedButtons = withStyles(
  theme => ({
    button: {
      margin: theme.spacing(1),
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

const TextButtons = withStyles(
  theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }),
)(({ classes }) => (
  <div>
    <Button className={classes.button}>
      Default
    </Button>
    <Button color="primary" className={classes.button}>
      Primary
    </Button>
    <Button color="secondary" className={classes.button}>
      Secondary
    </Button>
    <Button color="secondary" disabled className={classes.button}>
      Disabled
    </Button>
    <Button href="#contained-buttons" className={classes.button}>
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
      <Button component="span" className={classes.button}>
        Upload
      </Button>
    </label>
  </div>
));

const OutlinedButtons = withStyles(
  theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }),
)(({ classes }) => (
  <div>
    <Button variant="outlined" className={classes.button}>
      Default
    </Button>
    <Button variant="outlined" color="primary" className={classes.button}>
      Primary
    </Button>
    <Button variant="outlined" color="secondary" className={classes.button}>
      Secondary
    </Button>
    <Button variant="outlined" color="secondary" disabled className={classes.button}>
      Disabled
    </Button>
    <Button variant="outlined" href="#contained-buttons" className={classes.button}>
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
      <Button variant="outlined" component="span" className={classes.button}>
        Upload
      </Button>
    </label>
    <Button variant="outlined" color="inherit" className={classes.button}>
      inherit
    </Button>
  </div>
));

storiesOf('Buttons', module)
  .addDecorator(muiTheme())
  .add('Contained', () => <ContainedButtons />)
  .add('Text', () => <TextButtons />)
  .add('Outlined', () => <OutlinedButtons />);