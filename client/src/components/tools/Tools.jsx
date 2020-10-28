import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ModalTools from './ModalTools';
import ModalCategory from './ModalCategory';
import UpdateModalCategory from "./UpdateModalCategory";
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

import { getAllTools, getAllCategory } from '../../actions/index';
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
 
function Tools({ getAllTools, all_tools, getAllCategory, all_categorys }) {
  const classes = useStyles();
 

  const [tool, setTool] = React.useState({name:'',dateModif:'',price:'',category:''});
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    getAllTools();
    getAllCategory();
    },[])

  const openModal = (value,item) =>{
    setOpen(value)
    setTool(item)
    
  }


  const closeModal = (value) =>{
    setOpen(value)
    setTool({name:'',dateModif:'',price:'',category:''})
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
    <Grid container  direction="row" justify="flex-end" spacing={0}>
      <Grid item xs={5} >
        <Grid container direction="row"  spacing={0}>
        <Grid item xs={6}>
          <ModalTools tool={all_tools} open={open} onClose={closeModal} onOpen={openModal}></ModalTools>
        </Grid>
        <Grid item xs={6}>
          <ModalCategory></ModalCategory>     
                
        </Grid>
        </Grid>
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
         {all_tools ? all_tools.map((row) => (
           <TableRow key={row.name}>
             <TableCell component="th" scope="row">
               {row.name}
             </TableCell>
             <TableCell align="center">{row.dateModif}</TableCell>
             <TableCell align="center">{row.stock}</TableCell>
             <TableCell align="center">{
              all_categorys.map((cat)=>{                
                  return cat.id === row.categoryId ? cat.name : '' 
               }) 
             }             
             </TableCell>
             <TableCell align="center">
             <IconButton aria-label="edit" onClick={()=>openModal(true,row)}>
               <EditIcon />
             </IconButton>
             <IconButton aria-label="delete" >
               <DeleteIcon />
             </IconButton>
             </TableCell>
           </TableRow>
         )): "No se han encontrado herramientas."}
       </TableBody>
     </Table>
   </TableContainer>
   <TablePagination
     rowsPerPageOptions={[5, 10, 25]}
     component="div"
     count={all_tools.length}
     rowsPerPage={rowsPerPage}
     page={page}
     onChangePage={handleChangePage}
     onChangeRowsPerPage={handleChangeRowsPerPage}
   />
    </div>
  )}

  const mapDispatchToProps = dispatch => {
    return {
      getAllTools: () => dispatch(getAllTools()),
      getAllCategory: () => dispatch(getAllCategory()) 
    }
  }

  const mapStateToProps = state => {
    return {
      all_tools: state.all_tools,
      all_categorys: state.all_categorys

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools);