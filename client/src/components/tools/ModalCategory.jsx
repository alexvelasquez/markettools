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

export default function ModalCategory({category,openCategory,onCloseCategory,onOpenCategory}) {

  const classes = useStyles();
  const defaultCategory = {nameCategory:''};
  const handleOpenCategory = () => {
    onOpenCategory(true,defaultCategory);
  };
  const handleCloseCategory = () => {
     onCloseCategory(false);
  };

  return (

    <div>
    <Button variant="contained" color="primary" className={classes.button} onClick={()=>handleOpenCategory()}>
      Nueva categoria
    </Button>
    
      <Dialog  open={openCategory} onClose={handleCloseCategory} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nueva Categoria</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
             <Grid item sm={12} md={6}>
               <TextField
                 autoFocus
                 margin="dense"
                 id="nameCategory"
                 value={category.name}
                 label="Descripción(*)"
                 InputLabelProps={{
                    shrink: true,
                  }}
                 type="text"
                 fullWidth
               />
             </Grid>            
              
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCategory} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleCloseCategory} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
