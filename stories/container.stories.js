import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { action } from '@storybook/addon-actions';

import withStyles from '../src/styles/withStyles';
import Container from '../src/Container';
import Typography from '../src/Typography';


const DefaultContainer = withStyles(
  theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing(1),
    }
  }),
)(({ classes }) => (
  <React.Fragment>
    {/* <CssBaseline /> */}
    <Container maxWidth="sm">
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
    </Container>
  </React.Fragment>
));

const FixedContainer = withStyles(
  theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing(1),
    }
  }),
)(({ classes }) => (
  <React.Fragment>
    {/* <CssBaseline /> */}
    <Container fixed>
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
    </Container>
  </React.Fragment>
));

storiesOf('Container', module)
  .addDecorator(muiTheme())
  .add('default', () => <DefaultContainer />)
  .add('fixed', () => <FixedContainer />);