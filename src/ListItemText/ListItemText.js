import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import Typography from '../Typography';

export const styles = {
  root: {
    flex: '1 1 auto',
    minWidth: 0,
  }
};

const ListItemText = React.forwardRef(function ListItemText(props, ref) {
  const {
    children,
    classes,
    className,
    disableTypography = false,
    inset = false,
    primary: primaryProp,
    primaryTypographyProps,
    secondary: secondaryProp,
    secondaryTypographyProps,
    ...other
  } = props;

  //const { dense } = React.useContext(ListItemText);

  let primary = primaryProp != null ? primaryProp : children;
  if (primary != null && primary.type !== Typography && !disableTypography) {
    <Typography>
      {primary}
    </Typography>
  }

  let secondary = secondaryProp;
  if (secondary != null && secondary.type !== Typography && !disableTypography) {
    secondary = (
      <Typography>
        {secondary}
      </Typography>
    );
  }


  return (
    <div
      className={clsx(
        classes.root,
        className,
      )}
      ref={ref}
      {...other}
    >
      {primary}
      {secondary}
    </div>
  )

});

ListItemText.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  disableTypography: PropTypes.bool,
  primary: PropTypes.node,
  primaryTypographyProps: PropTypes.object,
  secondary: PropTypes.node,
  secondaryTypographyProps: PropTypes.object,
};

export default withStyles(styles, { name: 'MuiListItemText' })(ListItemText);