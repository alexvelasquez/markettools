import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

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

export default function ModalCategory() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const category = {name:''};
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (

    <div>
    <Button variant="contained" color="primary" className={classes.button} onClick={handleClickOpen}>
      Nueva categoria
    </Button>

      <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nueva Categoria</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
             <Grid item sm={12}>
               <TextField
                 autoFocus
                 margin="dense"
                 id="nameCategory"
                 defaultValue={category.name}
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
