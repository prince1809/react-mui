import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import clsx from 'clsx';
import EventListener from 'react-event-listener';

import withStyles from '../styles/withStyles';

export const styles = theme => ({
  root: {
    overflow: 'hidden',
    minHeight: 48,
  },
});

class Tabs extends React.Component {

  constructor() {
    super();
  }

  render() {

    const {
      action,
      centered,
      component: Component = 'div',
      ...other
    } = this.props;

    return (
      <Component>
        tabs
      </Component>
    );
  }
}

export default withStyles(styles, { name: 'MuiTabs' })(Tabs);