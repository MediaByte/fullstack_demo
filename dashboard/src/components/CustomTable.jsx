//Javascript framework for creating user interfaces
import React from 'react';

//Material-UI resuable components
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

//State Management
import { connect } from 'react-redux';
import { requestUsers } from '../state/actions';

import CustomAvatar from './CustomAvatar';




function CustomTable(props) {
  const { users, dataReady } = props;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { (dataReady)
              ?  <FilterCells data={users.data} />
              : null
          }
        </TableBody>  
        <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={1}
                count={users.total}
                rowsPerPage={users.per_page}
                page={page}
                rowsPerPageOptions={[]}
                onChangePage={(event, pg) => props.fetchPage(process.env.REACT_APP_API_LINK, (pg + 1), setPage(pg))}
              />
            </TableRow>
          </TableFooter>      
      </Table>
    </Paper>
  );
};

const FilterCells = (props) => (
  props.data.map(row => (
    <TableRow key={row.id}>
      <TableCell component="th" scope="row">
        <CustomAvatar
          subText={row.email} 
          avatar={row.avatar} 
          hint={row.first_name} 
          displayName={`${row.first_name} ${row.last_name}`}
        />
      </TableCell>
    </TableRow>))
);

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,
    overflowX: 'auto',
    
  },
  table: {
    minWidth: 400,
  },
  input: {
    margin:0
  },
}));

const mapStateToProps = state => {
  return {
    users: state.requestUsers.data,
    dataReady: state.requestUsers.dataReady,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPage: (link, param) => dispatch(requestUsers(link, param))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomTable)