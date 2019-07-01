import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import withStyles from '../src/styles/withStyles';
import Button from '../src/Button';
import Menu from '../src/Menu';


const SimpleMenu = withStyles(
  theme => ({
    root: {

    },
  }),
)(({ classes }) => (
  <div className={classes.root}>
    <Button>
      Open Menu
    </Button>
    <Menu>

    </Menu>
  </div>
));

storiesOf('Menu', module)
  .addDecorator(muiTheme())
  .add('simple', () => <SimpleMenu />);