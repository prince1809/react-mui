import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';

const styles = theme => ({

  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: 40,
    height: 40,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(20),
    borderRadius: '50%',
    overflow: 'hidden',
    userSelect: 'none',
  },
  colorDefault: {
    color: theme.palette.background.default,
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[500],
  },
  img: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    objectFit: 'cover',
  }
});

const Avatar = React.forwardRef(function Avatar(props, ref) {
  const {
    alt,
    children: childrenProp,
    childrenClassName: childrenClassNameProp,
    classes,
    className: classNameProp,
    component: Component = 'div',
    imgProps,
    sizes,
    src,
    srcSet,
    ...other
  } = props;

  let children = null;
  const img = src || srcSet;

  if (img) {
    children = (
      <img
        alt={alt}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        className={classes.img}
        {...imgProps}
      />
    );
  } else if (childrenClassNameProp && React.isValidElement(childrenProp)) {
    children = React.cloneElement(childrenProp, {
      className: clsx(childrenClassNameProp, childrenProp.props.className),
    })
  } else {
    children = childrenProp;
  }

  return (
    <Component
      className={clsx(
        classes.root,
        classes.system,
        {
          [classes.colorDefault]: !img,
        },
        classNameProp,
      )}
      ref={ref}
      {...other}
    >
      {children}
    </Component>
  );
});

Avatar.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  childrenClassName: PropTypes.string,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
  imgProps: PropTypes.object,
  sizes: PropTypes.string,
  src: PropTypes.string,
  srcSet: PropTypes.string,
}

export default withStyles(styles, { name: 'MuiAvatar' })(Avatar);