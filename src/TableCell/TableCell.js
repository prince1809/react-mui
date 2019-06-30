import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
import { darken, fade, lighten } from '../styles/colorManipulator';
import TableContext from '../Table/TableContext';
import Tablelvl2Context from '../Table/Tablelvl2Context';


export const styles = theme => ({
  root: {
    ...theme.typography.body2,
    display: 'table-cell',
    verticalAlign: 'inherit',
    borderBottom: `1px solid
    ${
      theme.palette.type === 'light'
        ? lighten(fade(theme.palette.divider, 1), 0.88)
        : darken(fade(theme.palette.divider, 1), 0.68)
      }`,
    textAlign: 'left',
    padding: '14px 40px 14px 16px',
    '&:last-child': {
      paddingRight: 16,
    },
  },
  head: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightMedium,
  },
  body: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
  },
  footer: {
    color: theme.palette.text.secondary,
    lineHeight: theme.typography.pxToRem(21),
    fontSize: theme.typography.pxToRem(12),
  },
  sizeSmall: {
    padding: '6px 24px 6px 16px',
    '&:last-child': {
      paddingRight: 16,
    },
    '&$paddingCheckbox': {
      width: 24,
    }
  },
  paddingCheckbox: {

  },
  paddingNone: {
    padding: 0,
    '&:last-child': {
      padding: 0,
    }
  },
  alignLeft: {
    textAlign: 'left',
  },
  alignCenter: {
    textAlign: 'center',
  },
  alignRight: {
    textAlign: 'right',
    flexDirection: 'row-reverse',
  },
  alignJustify: {
    textAlign: 'justify',
  }
});

const TableCell = React.forwardRef(function TableCell(props, ref) {
  const {
    align = 'inherit',
    classes,
    className,
    component,
    padding: paddingProp,
    scope: scopeProp,
    size: sizeProp,
    sortDirection,
    variant,
    ...other
  } = props;

  const table = React.useContext(TableContext);
  const tablelvl2 = React.useContext(Tablelvl2Context);

  let Component;
  if (component) {
    Component = component;
  } else {
    Component = tablelvl2 && tablelvl2.variant === 'head' ? 'th' : 'td';
  }

  let scope = scopeProp;

  const padding = paddingProp || (table && table.padding ? table.padding : 'default');
  const size = sizeProp || (table && table.size ? table.size : 'medium');

  let ariaSort = null;
  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }
  return (
    <Component
      ref={ref}
      className={clsx(
        classes.root,
        {
          [classes.head]: variant ? variant === 'head' : tablelvl2 && tablelvl2.variant === 'head',
          [classes.body]: variant ? variant === 'boddy' : tablelvl2 && tablelvl2.variant === 'body',
          [classes.footer]: variant ? variant === 'footer' : tablelvl2 && tablelvl2.variant === 'footer',
          [classes[`align${capitalize(align)}`]]: align !== 'inherit',
          [classes[`padding${capitalize(padding)}`]]: padding !== 'default',
          [classes[`size${capitalize(size)}`]]: size !== 'medium',
        },
        className
      )}
      aria-sort={ariaSort}
      scope={scope}
      {...other}
    />
  );
});

TableCell.propTypes = {
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
  padding: PropTypes.oneOf(['default', 'checkbox', 'none']),
  scope: PropTypes.string,
  sortDirection: PropTypes.oneOf(['asc', 'desc', false]),
  variant: PropTypes.oneOf(['head', 'body', 'footer']),
};

export default withStyles(styles, { name: 'MuiTableCell' })(TableCell);