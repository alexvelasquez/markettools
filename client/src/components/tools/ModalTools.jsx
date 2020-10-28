import React, {useState, useEffect} from 'react';
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

import { getAllTools, insertTools, getAllCategory } from '../../actions/index';
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
  },

}));


function ModalTools({ tools, open, onClose, onOpen, insertTools, getAllCategory, all_categorys}) {

  useEffect(()=>{
    getAllCategory();
  },[])
  const [inputTools, setInputTools] = useState(tools);
  const handleChangeTools = function(e) {
    const {name, value } = e.target

    setInputTools({
    ...inputTools,
    [name]: value,
   });
  }

  const handleSubmit = function(e){
    e.preventDefault();
    let data = {name:document.getElementById('name').value,
                description: document.getElementById('description').value,
                stock:document.getElementById('stock').value}
    console.log(data);
    // inputTools.name = document.getElementById('name').value
    // console.log(e.target);
    // console.log(document.getElementById('description').value);
    // insertTools(inputTools);
    // getAllTools();
    // onClose(false);
  }

  const classes = useStyles();

  const handleOpen = () => {
     onOpen(true, tools);
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
        <DialogTitle id="form-dialog-title">Nueva Herramienta hola</DialogTitle>
        <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
             <Grid item sm={12} md={6}>
               <TextField
               required
                 autoFocus
                 margin="dense"
                 value={'aaaa'}
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
                required
                 autoFocus
                 margin="dense"
                 defaultValue={tools.name}
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
                required
                 margin="dense"
                 id="stock"
                 name="stock"
                 label="Stock(*)"
                 type="number"
                 defaultValue={tools.stock}
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
            required
             onChange={handleChangeTools}
             id="categoryId"
             name="categoryId"
             label="Categoria(*)"
             select
             defaultValue={tools.categoryId}
             fullWidth
             InputLabelProps={{
                shrink: true,
              }}>
                {all_categorys.map((cat)=>{
                   return <MenuItem value={cat.id}>{cat.name}</MenuItem>
               })
             }
             </TextField>
              </FormControl>
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
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getAllTools: () => dispatch(getAllTools()),
    insertTools: (inputTools) => dispatch(insertTools(inputTools)),
    getAllCategory: () => dispatch(getAllCategory())
  }
}

const mapStateToProps = state => {
  return {
    all_tools: state.all_tools,
    all_categorys: state.all_categorys

}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalTools);
