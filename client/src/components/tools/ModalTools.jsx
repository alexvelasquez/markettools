import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
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

export default function ModalTools({tool,open,onClose,onOpen}) {
  const classes = useStyles();
  var  defaultTool = {name:'',price:'',category:''};
  const handleOpen = () => {
     onOpen(true,defaultTool);
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
        <DialogContent>
          <Grid container spacing={2}>
             <Grid item sm={12} md={6}>
               <TextField
                 autoFocus
                 margin="dense"
                 defaultValue={tool.name}
                 id="name"
                 label="Descripción(*)"
                 InputLabelProps={{
                    shrink: true,
                  }}
                 type="text"
                 fullWidth
               />
             </Grid>

             <Grid item sm={12} md={6}>
               <TextField
                 margin="dense"
                 id="dni"
                 label="Precio(*)"
                 type="number"
                 defaultValue={tool.price}
                 InputLabelProps={{
                    shrink: true,
                  }}
                   fullWidth
               />
             </Grid>
             <Grid item sm={12} md={4}>
             <FormControl className={classes.formControl}>
             <TextField
             id="categoria"
             label="Categoria(*)"
             select
             defaultValue={tool.categoria}
             fullWidth
             InputLabelProps={{
                shrink: true,
              }}>
               <MenuItem value="10">Carpinteria</MenuItem>
               <MenuItem value="20">Otro</MenuItem>
             </TextField>
              </FormControl>
             </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
