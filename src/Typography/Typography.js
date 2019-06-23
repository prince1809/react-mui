import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';

export const styles = theme => ({
  root: {
    margin: 0,
  },
  body2: theme.typography.body2,
  body1: theme.typography.body1,
  caption: theme.typography.caption,
  button: theme.typography.button,
  h1: theme.typography.h1,
  h2: theme.typography.h2,
  h3: theme.typography.h3,
  h4: theme.typography.h4,
  h5: theme.typography.h5,
  h6: theme.typography.h6,
  subtitle1: theme.typography.subtitle1,
  subtitle2: theme.typography.subtitle2,
  outline: theme.typography.outline,
  srOnly: {
    position: 'absolute',
    height: 1,
    width: 1,
    overflow: 'hidden',
  },
  alignLeft: {
    textAlign: 'left',
  },
  alignCenter: {
    textAlign: 'center',
  },
  alignRight: {
    textAlign: 'right',
  },
  alignJustify: {
    textAlign: 'justify',
  },
  noWrap: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  gutterBottom: {
    marginBottom: '0.35em',
  },
  paragraph: {
    marginBottom: 16,
  },
  colorInherit: {
    color: 'inherit',
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorSecondary: {
    color: theme.palette.secondary.main,
  },
  colorTextPrimary: {
    color: theme.palette.text.primary,
  },
  colorTextSecondary: {
    color: theme.palette.text.secondary,
  },
  colorError: {
    color: theme.palette.error.main,
  },
  displayInline: {
    display: 'inline',
  },
  displayBlock: {
    display: 'block',
  },
});

const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
};

const Typography = React.forwardRef(function Typography(props, ref) {
  const {
    align = 'inherit',
    classes,
    className,
    color = 'inherit',
    component,
    display = 'initial',
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    theme,
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
        {
          [classes[variant]]: variant !== 'variant',
          [classes[`color${capitalize(color)}`]]: color !== 'initial',
          [classes.noWrap]: noWrap,
          [classes.gutterBottom]: gutterBottom,
          [classes.paragraph]: paragraph,
          [classes[`align${capitalize(align)}`]]: align !== 'inherit',
          [classes[`display${capitalize(display)}`]]: display !== 'initial',
        },
        className,
      )}
      ref={ref}
      {...other}
    />
  );
});

Typography.propTypes = {
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'initial',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    'error',
  ]),
  component: PropTypes.elementType,
  display: PropTypes.oneOf(['initial', 'block', 'inline']),
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
  theme: PropTypes.object.isRequired,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit',
  ]),

  variantMapping: PropTypes.object,
}

export default withStyles(styles, { name: 'MuiTypography', withTheme: true })(Typography);