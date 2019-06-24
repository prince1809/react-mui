import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import withStyles from '../src/styles/withStyles';
import Paper from '../src/Paper';
import Typography from '../src/Typography';


const DefaultPaper = withStyles(
  theme => ({
    root: {
      padding: theme.spacing(3, 2),
    }
  }),
)(({ classes }) => (
  <div>
    <Paper className={classes.root} elevation={2}>
      <Typography variant="h5" component="h3">
        This is a sheet of paper.
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your application.
      </Typography>
    </Paper>
  </div>
));

storiesOf('Paper', module)
  .addDecorator(muiTheme())
  .add('default', () => <DefaultPaper />);