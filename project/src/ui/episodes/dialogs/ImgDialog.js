import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import avatar from '../../../materials/avatar.png'

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} >
      <img src={props.img ? props.img : avatar} alt="" style={{maxWidth: '200px'}}></img>
    </Dialog>
  );
}

export default function SimpleDialogDemo({img}) {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <img src={img} className='tableImg' alt="" onClick={handleClickOpen}></img>
      <SimpleDialog img={img} open={open} onClose={handleClose} />
    </div>
  );
}