import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import MenuIcon from '@material-ui/icons/Menu';

import withStyles from '../src/styles/withStyles';
import AppBar from '../src/AppBar';
import Toolbar from '../src/Toolbar';
import IconButton from '../src/IconButton';
import Typography from '../src/Typography';
import Button from '../src/Button';



const DefaultChips = withStyles(
  theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
  }),
)(({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </div>
))

storiesOf('AppBar', module)
  .addDecorator(muiTheme())
  .add('default', () => <DefaultChips />);