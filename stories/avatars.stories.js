import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';

import withStyles from '../src/styles/withStyles'
import Avatar from '../src/Avatar';
import { deepOrange, deepPurple, green, pink } from '../src/colors';


import imageFile from '../static/images/avatar/1.png';


const DefaultAvatar = withStyles(
  theme => ({
    avatar: {
      margin: 10,
      width: 50,
      height: 50,
    },
    bigAvatar: {
      margin: 10,
      width: 100,
      height: 100,
    },
  }),
  { withTheme: true }
)(({ classes, variant }) => (
  <div>
    <Avatar key="1" alt="Jon Doe" src={imageFile} className={classes.avatar} />
    <Avatar key="2" alt="Jon Doe" src={imageFile} className={classes.bigAvatar} />
  </div>
));


const LetterAvatars = withStyles({
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  }
})(({ classes }) => (
  <div>
    <Avatar key="1" className={classes.avatar}>H</Avatar>
    <Avatar key="2" className={classes.orangeAvatar}>N</Avatar>
    <Avatar key="3" className={classes.purpleAvatar}>OP</Avatar>
  </div>
));


const IconAvatars = withStyles({
  avatar: {
    margin: 10,
  },
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: pink[500],
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  }
})(({ classes }) => (
  <div>
    <Avatar key="1" className={classes.avatar}><FolderIcon /></Avatar>
    <Avatar key="2" className={classes.pinkAvatar}><PageviewIcon /></Avatar>
    <Avatar key="3" className={classes.greenAvatar}><AssignmentIcon /></Avatar>
  </div>
));

storiesOf('Avatars', module)
  .addDecorator(muiTheme())
  .add('Image', () => <DefaultAvatar />)
  .add('Letters', () => <LetterAvatars />)
  .add('Icon', () => <IconAvatars />);