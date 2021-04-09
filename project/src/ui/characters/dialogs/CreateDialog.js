import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import { Formik, Field, Form } from "formik";

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
     <div style={{width:'20vw', height:'auto', backgroundColor:'lightgray', textAlign: 'center'}}>
         <h2 style={{color:'white', fontStyle:'italic', fontWeight: 'bold'}}>CREATE CHARACTER</h2>
     <Formik
        initialValues={{ id: "", name: "", species: "", status: "", image: ""}}
        onSubmit={values => {
          onClose()
          props.addCharacter(values)
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

const SimpleDialogDemo = ({addCharacter}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
        <AddIcon className='icon' style={{width:'5vw', height:'4vh'}} onClick={handleClickOpen}/>
      <SimpleDialog open={open} onClose={handleClose}  addCharacter={addCharacter}/>
    </div>
  );
}



export default (SimpleDialogDemo)


