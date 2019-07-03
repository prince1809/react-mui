import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

import withStyles from '../src/styles/withStyles';
import Button from '../src/Button';
import Menu from '../src/Menu';
import MenuItem from '../src/MenuItem';


const SimplePopover = withStyles(
  theme => ({
    typography: {
      padding: theme.spacing(2),
    },
  }),
)(({ classes }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className={classes.root}>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>

    </div>
  )
});

storiesOf('Popover', module)
  .addDecorator(muiTheme())
  .add('simple', () => <SimplePopover />);