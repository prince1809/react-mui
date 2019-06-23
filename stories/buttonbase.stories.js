import React from 'react';

import { storiesOf } from '@storybook/react';
import clsx from 'clsx';
import { muiTheme } from 'storybook-addon-material-ui';
import withStyles from '../src/styles/withStyles';
import ButtonBase from '../src/ButtonBase';


export const {
  children,
  classes,

  ref = ''
} = {}

const ContainedButtons = withStyles(
  theme => ({
    root: {
      margin: theme.spacing(2),
    },
    input: {
      display: 'none',
    },
  }),
)(({ classes }) => {

  const className = clsx(
    classes.root,
    // classNameProp,
  )

  return (
    <div>
      <ButtonBase
      //className={className}
      >
        Default
    </ButtonBase>
    </div>
  );
});

storiesOf('ButtonBase', module)
  .addDecorator(muiTheme())
  .add('default', () => <ContainedButtons />);