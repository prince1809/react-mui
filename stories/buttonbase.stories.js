import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import withStyles from '../src/styles/withStyles';

import { ButtonBase } from '../src';

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
    <ButtonBase variant="contained" className={classes.button}>
      Default
    </ButtonBase>
  </div>
));

storiesOf('ButtonBase', module)
  .addDecorator(muiTheme())
  .add('default', () => <ContainedButtons />);