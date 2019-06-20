import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Icon from '../src/Icon';
import red from '../src/colors/red';

import { withStyles } from '@material-ui/styles';

const SimpleIcons = withStyles(
  theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    icon: {
      margin: 24,
    },
    iconHover: {
      margin: 24,
      '&:hover': {
        color: red[800],
      }
    }
  })
)(({ classes }) => (
  <div>
    <Icon className={classes.icon}>add_circle</Icon>
    <Icon className={classes.icon} color="primary">add_circle</Icon>
    <Icon className={classes.icon} color="secondary">add_circle</Icon>
    <Icon className={classes.icon} color="action">add_circle</Icon>
    <Icon className={classes.icon} color="error" style={{ fontSize: 30 }}>add_circle</Icon>
    <Icon className={classes.icon} color="disabled" fontSize="large">add_circle</Icon>
  </div>
));

storiesOf('Icon', module)
  .add('with text', () => <SimpleIcons />);
