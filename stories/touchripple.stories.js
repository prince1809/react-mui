import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import withStyles from '../src/styles/withStyles';

import TouchRipple from '../src/ButtonBase/TouchRipple';

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
    <TouchRipple variant="contained" className={classes.button}>
      Default
    </TouchRipple>
  </div>
));

storiesOf('TouchRipple', module)
  .addDecorator(muiTheme())
  .add('default', () => <ContainedButtons />);