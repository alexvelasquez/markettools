import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ModalCustomers from './ModalCustomers';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// tables
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
// buttons
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  marginBreadcumb:{
    marginBottom:10,
  },
  button:{
    marginBottom:12,
  }
});

const customers = [
  { name:'Carlos',lastname:'Bilardo',dni:'38192012',phone:'02214914585', email:'carlosbilardo@gmail.com', adress:'Calle 1 y 57'},
  { name:'Diego Armando',lastname:'Maradona',dni:'38192012',phone:'02214914585',email:'diegomaradona@gmail.com',adress:'Avenida 60 y 118'},
  { name:'Lionel',lastname:'Messi' ,dni:'38192012',phone:'02214914585', email:'carlosbilardo@gmail.com', adress:'Calle 1 y 57'},
  { name:'Ricardo', lastname:'Fort',dni:'38192012',phone:'02214914585',email:'diegomaradona@gmail.com',adress:'Avenida 60 y 118'},
  { name:'Alejandro',lastname:'Fantino',dni:'38192012',phone:'02214914585', email:'carlosbilardo@gmail.com', adress:'Calle 1 y 57'},
  { name:'Ricardo',lastname:'Darin',dni:'38192012',phone:'0221-4914585',email:'diegomaradona@gmail.com',adress:'Avenida 60 y 118'},];
export default function Customers() {
  const classes = useStyles();

  const [customer, setCustomer] = React.useState({name:'',dni:'',phone:'',email:'',adress:''});
  const [open, setOpen] = React.useState(false);

  const openModal = (value,item) =>{

    setOpen(value)
    setCustomer(item)
  }
  const closeModal = (value) =>{
    setOpen(value)
    setCustomer({name:'',dni:'',phone:'',email:'',adress:''})
  }

  // pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <div>
    <Toolbar />
    <h5>Clientes</h5>
    <Breadcrumbs aria-label="breadcrumb" className={classes.marginBreadcumb}>
      <Link color="inherit" href="/" >
        Inicio
      </Link>
      <Typography color="textPrimary">Clientes</Typography>
    </Breadcrumbs>
    <Grid container>
       <Grid item sm={12} align="right">
        <ModalCustomers customer={customer} open={open} onClose={closeModal} onOpen={openModal}></ModalCustomers>
        </Grid>
    </Grid>
    <TableContainer component={Paper}>
     <Table className={classes.table} aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>Nombre y Apellido</TableCell>
           <TableCell align="center">DNI</TableCell>
           <TableCell align="center">Teléfono</TableCell>
           <TableCell align="center">Email</TableCell>
           <TableCell align="center">Dirección</TableCell>
           <TableCell align="center">Acciones</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {customers.map((row) => (
           <TableRow key={row.name}>
             <TableCell component="th" scope="row">
               {row.name} {row.lastname}
             </TableCell>
              <TableCell align="center">{row.dni}</TableCell>
             <TableCell align="center">{row.phone}</TableCell>
             <TableCell align="center">{row.email}</TableCell>
             <TableCell align="center">{row.adress}</TableCell>
             <TableCell align="center">
             <IconButton aria-label="edit" onClick={() => openModal(true,row)}>
               <EditIcon />
             </IconButton>
             <IconButton aria-label="delete" >
               <DeleteIcon />
             </IconButton>
             </TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
   <TablePagination
     rowsPerPageOptions={[5, 10, 25]}
     component="div"
     count={customers.length}
     rowsPerPage={rowsPerPage}
     page={page}
     onChangePage={handleChangePage}
     onChangeRowsPerPage={handleChangeRowsPerPage}
   />
    </div>
  )}
