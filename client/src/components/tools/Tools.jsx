import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ModalTools from './ModalTools';
import ModalCategory from './ModalCategory';
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

const tools = [
  { name:'Martillo',dateModif:'19/09/2020', price:'198.20', category:'OTROS'},
  { name:'Taladro',dateModif:'19/09/2020',price:'2672.10',category:'OTROS'},
  { name:'Destornillador' ,dateModif:'19/09/2020', price:'198.20', category:'OTROS'},
  { name:'Tornillos',dateModif:'19/09/2020',price:'2672.10',category:'OTROS'},
  { name:'Serrucho',dateModif:'19/09/2020', price:'198.20', category:'OTROS'},
  { name:'Cinta',dateModif:'19/09/2020',price:'2672.10',category:'OTROS'},
];
export default function Tools() {
  const classes = useStyles();

  const [tool, setTool] = React.useState({name:'',dateModif:'',price:'',category:''});
  const [category, setCategory] = React.useState({nameCategory:''});

  const [open, setOpen] = React.useState(false);
  const [openCategory, setOpenCategory] = React.useState(false);

  const openModal = (value,item) =>{
    setOpen(value)
    setTool(item)     
  }

  const openModalCategory = (value,item) =>{
    setOpenCategory(value)     
    setCategory(item)
  }

  const closeModal = (value) =>{
    setOpen(value)
    setTool({name:'',dateModif:'',price:'',category:''})    
  }

  const closeModalCategory = (value) =>{
    setOpenCategory(value)    
    setCategory({nameCategory:''})
  }

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
    <h5>Herramientas</h5>
    <Breadcrumbs aria-label="breadcrumb" className={classes.marginBreadcumb}>
      <Link color="inherit" href="/" >
        Inicio
      </Link>
      <Typography color="textPrimary">Herramientas</Typography>
    </Breadcrumbs>
    <Grid container>
       <Grid item sm={12} align="right">
            <ModalTools tool={tool} open={open} onClose={closeModal} onOpen={openModal}></ModalTools>
            <ModalCategory category={category} open={openCategory} onClose={closeModalCategory} onOpen={openModalCategory}></ModalCategory>
        </Grid>        
    </Grid>
    <TableContainer component={Paper}>
     <Table className={classes.table} aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>Descripción</TableCell>
           <TableCell align="center">Fecha De Modificación</TableCell>
           <TableCell align="center">Precio</TableCell>
           <TableCell align="center">Categoria</TableCell>
           <TableCell align="center">Acciones</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {tools.map((row) => (
           <TableRow key={row.name}>
             <TableCell component="th" scope="row">
               {row.name}
             </TableCell>
             <TableCell align="center">{row.dateModif}</TableCell>
             <TableCell align="center">{row.price}</TableCell>
             <TableCell align="center">{row.category}</TableCell>
             <TableCell align="center">
             <IconButton aria-label="edit" onClick={()=>openModal(true,row)}>
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
     count={tools.length}
     rowsPerPage={rowsPerPage}
     page={page}
     onChangePage={handleChangePage}
     onChangeRowsPerPage={handleChangeRowsPerPage}
   />
    </div>
  )}
