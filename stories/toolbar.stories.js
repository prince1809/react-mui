import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import MenuIcon from '@material-ui/icons/Menu';

import withStyles from '../src/styles/withStyles';
import Toolbar from '../src/Toolbar';
import IconButton from '../src/IconButton';
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
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        News
        </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar >
  </div >
))

storiesOf('Toolbar', module)
  .addDecorator(muiTheme())
  .add('default', () => <DefaultChips />);