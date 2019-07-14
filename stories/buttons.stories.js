import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import withStyles from '../src/styles/withStyles';

import Button from '../src/Button';
import Grid from '../src/Grid';
import ButtonGroup from '../src/ButtonGroup';

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

const GroupedButtons = withStyles(
  theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }),
)(({ classes }) => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <Grid container spacing={1} direction="column" alignItems="center">
        <Grid item>
          <ButtonGroup size="small" aria-label="Small outlined button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>
        <Grid item>
          <ButtonGroup color="primary" aria-label="Outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <Grid item>
            <ButtonGroup color="secondary" size="large" aira-label="Large outlined button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={1} direction="column" alignItems="center">
          <Grid item>
            <ButtonGroup variant="contained" size="small" aria-label="Small contained button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup variant="contained" color="primary" aria-label="Full-width contained primary button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup variant="contained" color="secondary" size="large" aria-label="Large contained secondary button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ButtonGroup fullWidth aria-label="Full width outlined button group">
          <Button>Full</Button>
          <Button>Withd</Button>
          <Button>ButtonGroup</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  </Grid>
));

storiesOf('Buttons', module)
  .addDecorator(muiTheme())
  .add('Contained', () => <ContainedButtons />)
  .add('Text', () => <TextButtons />)
  .add('Outlined', () => <OutlinedButtons />)
  .add('Grouped', () => <GroupedButtons />);