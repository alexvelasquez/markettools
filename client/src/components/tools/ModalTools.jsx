import React, {useState} from 'react';
import { formatMs, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import { getAllTools, insertTools } from '../../actions/index';
import { connect } from  'react-redux';

const useStyles = makeStyles((theme) => ({
  button:{
    marginBottom:12,

  },
  paper: {
    minWidth: "500px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  nativeInput:{
    minWidth:500
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

function ModalTools({ all_tools, open, onClose, onOpen, insertTools, getAllTools }) {

  const [inputTools, setInputTools] = useState({ name: '', description: "", stock: "", categoryId: ""});
  
  const handleChangeTools = function(e) {
    setInputTools({
    ...inputTools,
    [e.target.name]: e.target.value
   });
  }

  const handleSubmit = function(e){
    e.preventDefault();
    insertTools(inputTools);
    getAllTools();
  }

  const classes = useStyles();

  const handleOpen = () => {
     onOpen(true, all_tools);
  };
  const handleClose = () => {
     onClose(false);
  };

  return (

    <div>
    <Button variant="contained" color="primary" className={classes.button} onClick={()=>handleOpen()}>
      Nueva Herramienta
    </Button>
      <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nueva Herramienta</DialogTitle>
        <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
             <Grid item sm={12} md={6}>
               <TextField
                 autoFocus
                 margin="dense"
                 //value={all_tools.name}
                 id="name"
                 name="name"
                 label="Nombre(*)"
                 InputLabelProps={{
                    shrink: true,
                  }}
                 type="text"
                 fullWidth
                 onChange={handleChangeTools}
               />
             </Grid>
             <Grid item sm={12} md={6}>
               <TextField
                 autoFocus
                 margin="dense"
                 //value={all_tools.name}
                 id="description"
                 name="description"
                 label="Descripción(*)"
                 InputLabelProps={{
                    shrink: true,
                  }}
                 type="text"
                 fullWidth
                 onChange={handleChangeTools}
               />
             </Grid>

             <Grid item sm={12} md={6}>
               <TextField
                 margin="dense"
                 id="stock"
                 name="stock"
                 label="Stock(*)"
                 type="number"
                 //value={all_tools.price}
                 InputLabelProps={{
                    shrink: true,
                  }}
                   fullWidth
                   onChange={handleChangeTools}
               />
             </Grid>
             <Grid item sm={12} md={4}>
             <FormControl className={classes.formControl}>
             <TextField
             onChange={handleChangeTools}
             id="categoryId"
             name="categoryId"
             label="Categoria(*)"
             select
             //value={all_tools.categoria}
             fullWidth
             InputLabelProps={{
                shrink: true,
              }}>
               <MenuItem value="1">Carpinteria</MenuItem>
               <MenuItem value="2">Otro</MenuItem>
             </TextField>
              </FormControl>
             </Grid>
          </Grid>
          <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button type="submit" onClick={handleClose} color="primary">
            Agregar
          </Button>
        </DialogActions>
        </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getAllTools: () => dispatch(getAllTools()),
    insertTools: (inputTools) => dispatch(insertTools(inputTools)),
  }
}

const mapStateToProps = state => {
  return {
    all_tools: state.all_tools
}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalTools);