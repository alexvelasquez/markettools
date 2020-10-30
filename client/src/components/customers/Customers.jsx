import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
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

//Modal
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { getClient } from '../../actions/index';
import { connect } from 'react-redux';

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

// const customers = [
//   { name:'Carlos',lastname:'Bilardo',dni:'38192012',phone:'02214914585', email:'carlosbilardo@gmail.com', adress:'Calle 1 y 57'},
//   { name:'Diego Armando',lastname:'Maradona',dni:'38192012',phone:'02214914585',email:'diegomaradona@gmail.com',adress:'Avenida 60 y 118'},
//   { name:'Lionel',lastname:'Messi' ,dni:'38192012',phone:'02214914585', email:'carlosbilardo@gmail.com', adress:'Calle 1 y 57'},
//   { name:'Ricardo', lastname:'Fort',dni:'38192012',phone:'02214914585',email:'diegomaradona@gmail.com',adress:'Avenida 60 y 118'},
//   { name:'Alejandro',lastname:'Fantino',dni:'38192012',phone:'02214914585', email:'carlosbilardo@gmail.com', adress:'Calle 1 y 57'},
//   { name:'Ricardo',lastname:'Darin',dni:'38192012',phone:'0221-4914585',email:'diegomaradona@gmail.com',adress:'Avenida 60 y 118'},];
function Customers({ getClient, all_client }) {
  const classes = useStyles();

  useEffect(() => {
    getClient()
    },[])

  const [open, setOpen] = React.useState(false);
  const [client, setClient] = React.useState({name:'',dni:'',phone:'',email:'',adress:''});

  const handleOpen = (item) => {
      setClient(item)
      setOpen(true)
  };
  const handleClose = () => {
    setClient({name:null,
             dni:null,
             description:null,
             phone:null,
             email:null,
             adress:null,
            })
    setOpen(false)
  };

  const handleSubmit = function(e){
    e.preventDefault();
    // insertTools(tools);
    // getAllTools();
    // onClose(false);
  }

  const handleChangeClient = function(e) {
    const {id, value } = e.target
      setClient({
      ...client,
      [id]: value,
    });
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
        <Button variant="contained" color="primary" className={classes.button} onClick={()=>handleOpen(client)}>
            Nuevo Cliente
          </Button>
            <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">{client.id ? 'Modificar' : 'Nuevo'} Cliente</DialogTitle>
              <form onSubmit={handleSubmit}>
        <DialogContent>
              <Grid container spacing={4}>
                 <Grid item sm={12} md={4}>
                   <TextField
                     autoFocus
                     margin="dense"
                     id="name"
                     defaultValue={client.name}
                     label="Nombre/s(*)"
                     InputLabelProps={{
                        shrink: true,
                      }}
                     type="text"
                     fullWidth
                     onChange={handleChangeClient}
                   />
                 </Grid>
                 <Grid item sm={12} md={4}>
                   <TextField
                     autoFocus
                     defaultValue={client.lastname}
                     margin="dense"
                     id="lastname"
                     label="Apellido/s(*)"
                     InputLabelProps={{
                        shrink: true,
                      }}
                     type="text"
                     fullWidth
                     onChange={handleChangeClient}
                   />
                 </Grid>
                 <Grid item sm={12} md={4}>
                   <TextField
                     autoFocus
                     defaultValue={client.dni}
                     margin="dense"
                     id="dni"
                     label="Dni(*)"
                     type="number"
                     InputLabelProps={{
                        shrink: true,
                      }}
                      fullWidth
                      onChange={handleChangeClient}
                   />
                 </Grid>
                 <Grid item sm={12} md={4}>
                 <TextField
                   autoFocus
                   defaultValue={client.email}
                   margin="dense"
                   id="email"
                   label="Email(*)"
                   type="email"
                   InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    onChange={handleChangeClient}
                 />
                 </Grid>
                 <Grid item sm={12} md={4}>
                 <TextField
                   autoFocus
                   defaultValue={client.adress}
                   margin="dense"
                   id="adress"
                   label="Dirección(*)"
                   type="text"
                   InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    onChange={handleChangeClient}
                 />
                 </Grid>
                 <Grid item sm={12} md={4}>
                 <TextField
                   autoFocus
                   defaultValue={client.phone}
                   margin="dense"
                   id="phone"
                   label="Teléfono(*)"
                   type="number"
                   InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    onChange={handleChangeClient}
                 />
                 </Grid>
              </Grid>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancelar
                </Button>
                <Button id="send" type="submit" color="primary">
                  Agregar
                </Button>
              </DialogActions>
        </DialogContent>
        </form>
            </Dialog>
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
       {all_client ? all_client.map((row) => (
           <TableRow key={row.name}>
             {console.log("esto es row", row)}
             <TableCell component="th" scope="row">
               {row.name} {row.lastname}
             </TableCell>
              <TableCell align="center">{row.dni}</TableCell>
             <TableCell align="center">{row.phone}</TableCell>
             <TableCell align="center">{row.email}</TableCell>
             <TableCell align="center">{row.adress}</TableCell>
             <TableCell align="center">
             <IconButton aria-label="edit" onClick={() => handleOpen(row)}>
               <EditIcon />
             </IconButton>
             <IconButton aria-label="delete">
               <DeleteIcon />
             </IconButton>
             </TableCell>
           </TableRow>
         )): "Aún no hay clientes."
         }
       </TableBody>
     </Table>
   </TableContainer>
   <TablePagination
     rowsPerPageOptions={[5, 10, 25]}
     component="div"
     count={all_client.length}
     rowsPerPage={rowsPerPage}
     page={page}
     onChangePage={handleChangePage}
     onChangeRowsPerPage={handleChangeRowsPerPage}
   />
    </div>
  )}

  const mapDispatchToProps = dispatch => {
    return {
      getClient: () => dispatch(getClient()),
    }
  }

  const mapStateToProps = state => {
    return {
      all_client: state.all_client,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Customers)