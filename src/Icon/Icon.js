import React from 'react';
import PropTypes from 'prop-types';


const Icon = React.forwardRef(function Icon(props, ref) {
  const {
    classes,
    className,
    color = 'inherit',
    component: Component = 'span',
    fontSize = 'default',
    ...other
  } = props;
  return (
    <Component>
      Icons
    </Component>
  );
});

Icon.propTypes = {
  children: PropTypes.node,
  //classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),
  component: PropTypes.elementType,
  fontSize: PropTypes.oneOf(['inherit', 'default', 'small', 'large']),
};






export default Icon;