import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import withStyles from '../src/styles/withStyles';
import List from '../src/List';
import ListItem from '../src/ListItem';
import ListItemIcon from '../src/ListItemIcon';
import ListItemText from '../src/ListItemText';


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const SimpleList = withStyles(
  theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
)(({ classes }) => (
  <div className={classes.root}>
    <List component="nav" aria-label="Main mailbox folders">
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
    </List>
    <List component="nav" aria-label="Secondary mailbox folders">
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <ListItemLink href="#simple-list">
        <ListItemText primary="spam" />
      </ListItemLink>
    </List>
  </div>
));

storiesOf('Lists', module)
  .addDecorator(muiTheme())
  .add('simple', () => <SimpleList />);