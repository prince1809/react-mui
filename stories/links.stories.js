import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import withStyles from '../src/styles/withStyles'

import Typography from '../src/Typography';
import Link from '../src/Link';


const dudUrl = 'javascript:;';
const SimpleLinks = withStyles(
  theme => ({
    link: {
      margin: theme.spacing(1),
    }
  }),
  { withTheme: true }
)(({ classes }) => (
  <Typography>
    <Link href={dudUrl} className={classes.link}>
      Link
      </Link>
    <Link href={dudUrl} color="inherit" className={classes.link}>
      {'color="inherit"'}
    </Link>
    <Link href={dudUrl} variant="body2" className={classes.link}>
      {'variant="body2"'}
    </Link>
  </Typography>
));

storiesOf('Links', module)
  .addDecorator(muiTheme())
  .add('Simple', () => <SimpleLinks />);