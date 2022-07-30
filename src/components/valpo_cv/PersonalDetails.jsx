import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  card: {
    background: 'linear-gradient(45deg, #ebe5ce 30%, #f5f3eb 90%)',
    boxShadow: '0 3px 5px 2px rgba(235, 229, 206 .3)',
  },
  demo: {
    dense: true
  },
  data: {
    textAlign: 'left',
  },
  table: {
    minWidth: 300,
  }
});

function createData(name, value) {
  return { name, value};
}

const rows = [
  createData('Country', 'Chile'),
  createData('City', 'Valparaíso'),
  createData('Phone', '+56 9 66095 824'),
];


export default function PersonalDetails(props) {
  const { mainDetails, secondDetails, thirdDetails } = props;
  const classes = useStyles();

  return (
          <Card className={classes.card}>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12} >
                  <Typography variant="h6" align="center">
                    Personal
                  </Typography>
                  <Divider variant="fullWidth" />
                </Grid>
                <Grid item xs={4} >
                  <TableContainer >
                    <Table className={classes.table} >
                      <TableBody>
                        {mainDetails.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row" style={{borderBottom:"none", padding: 0, color: "#4a4746", fontWeight: "bold"}}>
                              {row.name}
                            </TableCell>
                            <TableCell align="right" style={{borderBottom:"none", padding: 0}}>
                              {row.value}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                <Grid item xs={4} >
                  <TableContainer >
                    <Table className={classes.table} >
                      <TableBody>
                        {secondDetails.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row" style={{borderBottom:"none", padding: 0, color: "#4a4746", fontWeight: "bold"}}>
                              {row.name}
                            </TableCell>
                            <TableCell align="right" style={{borderBottom:"none", padding: 0}}>
                              {row.value}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                <Grid item xs={4} >
                  <TableContainer >
                    <Table className={classes.table} >
                      <TableBody>
                        {thirdDetails.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row" style={{borderBottom:"none", padding: 0, color: "#4a4746", fontWeight: "bold"}} >
                              {row.name}
                            </TableCell>
                            <TableCell align="right" style={{borderBottom:"none", padding: 0}}>
                              {row.value}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>             
            </CardContent>
          </Card>
  );
}

PersonalDetails.propTypes = {
  post: PropTypes.object,
};
