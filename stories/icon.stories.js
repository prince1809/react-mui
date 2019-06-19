import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Icon } from '../src';

storiesOf('Icon', module)
  .add('with text', () => <Icon onClick={action('clicked')}>Test</Icon>);
