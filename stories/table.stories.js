import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import withStyles from '../src/styles/withStyles';
import Paper from '../src/Paper';
import Table from '../src/Table';
import TableHead from '../src/TableHead';
import TableRow from '../src/TableRow';
import TableCell from '../src/TableCell';



const DefaultTable = withStyles(
  theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
  }),
)(({ classes }) => (
  <Paper className={classes.root}>
    <Table className={classes.root}>
      <TableHead>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
    </Table>
  </Paper>
));

storiesOf('Table', module)
  .addDecorator(muiTheme())
  .add('default', () => <DefaultTable />);