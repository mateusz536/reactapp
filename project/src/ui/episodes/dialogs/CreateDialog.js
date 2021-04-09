import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup'


const createSchema = Yup.object().shape({
  name: Yup.string(),
  episode: Yup.string()
  .matches(/^S[0-9][0-9]E[0-9][0-9]$/, {message: 'Incorrect format (example: S02E01)'}),
  created: Yup.date()
})

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
     <div style={{width:'20vw', height:'auto', backgroundColor:'lightgray', textAlign: 'center'}}>
         <h2 style={{color:'white', fontStyle:'italic', fontWeight: 'bold'}}>CREATE EPISODE</h2>
     <Formik
        initialValues={{ id: "", episode: "", name: "", created: ""}}
        
        onSubmit={values => {
          onClose()
          props.addEpisode({...values, characters: []})
        }}
        validationSchema={createSchema}
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
                <Field name="created" type="date" className='formfield' />
                <Button  variant='contained'style={{width:'20%', height:'20px', marginBottom:'10px'}}type="reset">Reset</Button>
              <Button variant='contained' style={{width:'60%', backgroundColor: 'white'}}type="submit" >Submit</Button>
          </Form>
          )}
        
      </Formik>
     </div>
    </Dialog>
  );
}

const SimpleDialogDemo = ({addEpisode}) => {
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
      <SimpleDialog open={open} onClose={handleClose} addEpisode={addEpisode}/>
    </div>
  );
}



export default (SimpleDialogDemo)


