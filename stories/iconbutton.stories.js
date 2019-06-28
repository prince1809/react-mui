import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import withStyles from '../src/styles/withStyles';
import Icon from '../src/Icon';
import IconButton from '../src/IconButton';


const DefaultChips = withStyles(
  theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    }
  }),
)(({ classes }) => (
  <div>
    <IconButton className={classes.button} aria-label="Delete">
      <DeleteIcon />
    </IconButton>
    <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
      <DeleteIcon />
    </IconButton>
    <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
      <Icon>alarm</Icon>
    </IconButton>
    <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
      <AddShoppingCartIcon />
    </IconButton>
    <input accept="image/" className={classes.input} id="icon-button-file" type="file" />
    <label htmlFor="icon-button-file">
      <IconButton
        color="primary"
        className={classes.button}
        aria-label="Upload picture"
        component="span"
      >
        <PhotoCamera />
      </IconButton>
    </label>
  </div>
))

storiesOf('IconButton', module)
  .addDecorator(muiTheme())
  .add('default', () => <DefaultChips />);