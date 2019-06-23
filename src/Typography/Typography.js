import React from 'react';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  root: {
    margin: 0,
  }
});

const defaultVariantMapping = {
  h1: 'h1',
};

const Typography = React.forwardRef(function Typography(props, ref) {
  const {
    align = 'inherit',
    classes,
    className,
    color = 'inherit',
    component,
    display = 'initial',
    paragraph = false,
    variant = 'body1',
    variantMapping = defaultVariantMapping,
    ...other
  } = props;

  const Component =
    component ||
    (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) ||
    'span';

  return (
    <Component
      className={clsx(
        classes.root,
        className,
      )}

      {...other}
    />
  );
})

export default withStyles(styles, { name: 'MuiTypography', withTheme: true })(Typography);