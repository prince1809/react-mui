import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '../styles/makeStyles';
import { exactProp } from '@material-ui/utils';


const useStyles = makeStyles(
  theme => ({
    '@global': {
      html: {
        WebkitFontSmoothing: 'antialiased',
      }
    }
  }),
  { name: 'MuiCssBaseline' },
);

function CssBaseline(props) {
  const { children = null } = props;
  useStyles();
  return <React.Fragment>{children}</React.Fragment>;
}

CssBaseline.propTypes = {
  children: PropTypes.node,
}


if (process.env.NODE_ENV !== 'production') {
  CssBaseline['propTypes' + ''] = exactProp(CssBaseline.propTypes);
}

export default CssBaseline;