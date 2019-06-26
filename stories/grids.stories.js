import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import withStyles from '../src/styles/withStyles';
import Paper from '../src/Paper';
import Typography from '../src/Typography';
import Grid from '../src/Grid';


const DefaultPaper = withStyles(
  theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
    paper: {
      height: 140,
      width: 100,
    }
  }),
)(({ classes }) => {
  const [spacing, setSpacing] = React.useState(2)
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2,].map(value => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
});

storiesOf('Grids', module)
  .addDecorator(muiTheme())
  .add('default', () => <DefaultPaper />);