import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import EditIcon from '@material-ui/icons/Edit';
import { Formik, Field, Form } from "formik";
import operations from '../../../state/ducks/characters/operations'
import {connect} from 'react-redux'


function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
     <div style={{width:'20vw', height:'auto', backgroundColor:'lightgray', textAlign: 'center'}}>
         <h2 style={{color:'white', fontStyle:'italic', fontWeight: 'bold'}}>EDIT CHARACTER</h2>
     <Formik
        initialValues={{ id: props.row.id, name: props.row.name, species: props.row.species, status: props.row.status, image: props.row.image}}
        onSubmit={values => {
          onClose()
          props.updateCharacter(values)
        }}
      >
          {({errors, touched, setFieldValue}) => (
              <Form className='editForm'>
                  <label style={{width: '100%'}}>Name</label>
                <Field name="name" type="text" className='formfield'/>
                <label style={{width: '100%'}}>Species</label>
                <Field name="species" type="text" className='formfield'/>
                <label style={{width: '100%'}}>Status</label>
                <Field name="status" type="text" className='formfield' />
                <label style={{width: '100%'}}>Image</label>
                <input  style={{marginBottom: '1vh'}} type="file" onChange={(e) => {let tmppath = URL.createObjectURL(e.target.files[0]); setFieldValue("image", tmppath)} }/>
                <Button  variant='contained'style={{width:'20%', height:'20px', marginBottom:'10px'}}type="reset">Reset</Button>
              <Button variant='contained' style={{width:'60%', backgroundColor: 'white'}}type="submit" >Submit</Button>
          </Form>
          )}
        
      </Formik>
     </div>
    </Dialog>
  );
}

const SimpleDialogDemo = ({row, updateCharacter}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
        <EditIcon className='icon' onClick={handleClickOpen}/>
      <SimpleDialog row={row} open={open} onClose={handleClose}  updateCharacter={updateCharacter}/>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCharacter: (character) => dispatch(operations.updateCharacter(character))
  }
 
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleDialogDemo)


