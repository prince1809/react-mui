import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Icon } from '../src';
import { withStyles } from '@material-ui/styles';

const SimpleIcons = withStyles(
  theme => ({
    icon: {
      margin: 24,
    },
  })
)(({ classes }) => (
  <Icon className={classes.icon}>star</Icon>
));

storiesOf('Icon', module)
  .add('with text', () => <SimpleIcons />);
