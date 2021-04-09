import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import EditIcon from '@material-ui/icons/Edit';
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';

const editSchema = Yup.object().shape({
    name: Yup.string(),
    episode: Yup.string()
    .matches(/^S[0-9][0-9]E[0-9][0-9]$/, {message: 'Incorrect format (example: S02E01)'}),
    created: Yup.string()
    .matches(/^20[0-9][0-9]-(0[0-9]|1[0-2])-[0-3][0-9]$/)
})



function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
     <div style={{width:'20vw', height:'auto', backgroundColor:'lightgray', textAlign: 'center'}}>
         <h2 style={{color:'white', fontStyle:'italic', fontWeight: 'bold'}}>EDIT EPISODE</h2>
     <Formik
        initialValues={{ id: props.row.id, name: props.row.name, episode: props.row.episode, created: props.row.created.slice(0,10)}}
        onSubmit={values => {
          onClose()
          props.updateEpisode(values)
        }}
        validationSchema={editSchema}
      >
          {({errors, touched}) => (
              <Form className='editForm'>
                  <label style={{width: '100%'}}>Episode</label>
                <Field name="episode" type="text" className='formfield'/>
                {errors.episode && touched.episode ? (
                    <div style={{color: 'red', fontSize:'small', backgroundColor: 'lightgray', borderRadius:'6px', padding: '2px', marginBottom:'2vh'}}>{errors.episode}</div> 
                ): null}
                <label style={{width: '100%'}}>Name</label>
                <Field name="name" type="text" className='formfield'/>
                <label style={{width: '100%'}}>Created</label>
                <Field name="created" type="text" className='formfield' />
                {errors.created && touched.created ? (
                    <div style={{color: 'red', fontSize:'small', backgroundColor: 'lightgray', borderRadius:'6px', padding: '2px', marginBottom:'2vh'}}>{errors.created}</div> 
                ): null}
                <Button  variant='contained'style={{width:'20%', height:'20px', marginBottom:'10px'}}type="reset">Reset</Button>
              <Button variant='contained' style={{width:'60%', backgroundColor: 'white'}}type="submit" >Submit</Button>
          </Form>
          )}
        
      </Formik>
     </div>
    </Dialog>
  );
}

export default function SimpleDialogDemo({row, updateEpisode}) {
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
      <SimpleDialog row={row} open={open} onClose={handleClose}  updateEpisode={updateEpisode}/>
    </div>
  );
}


