import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import avatar from '../../../materials/avatar.png';
import CircularProgress from '@material-ui/core/CircularProgress';



export default function SimpleDialog() {



  return (
    <Dialog aria-labelledby="simple-dialog-title" open={true} style={{width:'500px'}}>
      <CircularProgress style={{margin: '5px'}}/>
    </Dialog>
  );
}

