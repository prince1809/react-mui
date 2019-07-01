import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import withStyles from '../src/styles/withStyles';
import List from '../src/List';
import ListItem from '../src/ListItem';


const SimpleList = withStyles(
  theme => ({
    root: {

    },
  }),
)(({ classes }) => (
  <div className={classes.root}>
    <List>
      <ListItem>
        item
      </ListItem>
    </List>
  </div>
));

storiesOf('Lists', module)
  .addDecorator(muiTheme())
  .add('simple', () => <SimpleList />);