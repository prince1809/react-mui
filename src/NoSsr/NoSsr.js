import React from 'react';
import PropTypes from 'prop-types';
import { exactProp } from '@material-ui/utils';

const useEnhancedEffect =
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'test'
    ? React.useLayoutEffect
    : React.useEffect;

function NoSsr(props) {
  const { children, defer = false, fallback = null } = props;
  const [mountedState, setMountedState] = React.useState(false);

  useEnhancedEffect(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);

  React.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]);

  return <React.Fragment>{mountedState ? children : fallback}</React.Fragment>
}

NoSsr.propTypes = {
  children: PropTypes.node.isRequired,
  defer: PropTypes.bool,
  fallback: PropTypes.node,
};

if (process.env.NODE_ENV !== 'production') {
  NoSsr['propTypes' + ''] = exactProp(NoSsr.propTypes);
}


export default NoSsr;

