import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';


export const styles = theme => ({
  root: {},
});

const Grid = React.forwardRef((props, ref) => {

  return (
    <div>
      Grid
    </div>
  );
})

Grid.propTypes = {

  alignContent: PropTypes.oneOf([
    'stretch',
    'center',
  ]),
};

const styledGrid = withStyles(styles, { name: 'MuiGrid' })(Grid);

export default styledGrid;