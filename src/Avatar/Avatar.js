import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';

const styles = theme => ({

  root: {
    position: 'relative',
  }
});

const Avatar = React.forwardRef(function Avatar(props, ref) {

  return (
    <div>Avatar</div>
  );
});

Avatar.propTypes = {
  alt: PropTypes.string,
}

export default withStyles(styles, { name: 'MuiAvatar' })(Avatar);