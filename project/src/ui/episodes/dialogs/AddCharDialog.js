import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import cSelectors from '../../../state/ducks/characters/selectors';
import ImgDialog from './ImgDialog';
import FilterStripe from '../../characters/FilterStripe';
import cActions from '../../../state/ducks/characters/actions';
import avatar from '../../../materials/avatar.png';
import operations from '../../../state/ducks/episodes/operations'



    
const useStyles1 = makeStyles((theme) => ({
    root: {
        height: "80vh",
        margin: "auto"
    }
  }));
  


function SimpleDialog(props) {
    const { onClose, open } = props;
    const classes = useStyles1()

    const handleClose = (char) => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} className={classes.root}>
            <FilterStripe classn={'filterStrip'}/>
            {props.characters.map((c,index) => {
                return (
                    <div key={index} className="listrow">
                        <div style={{width:'50px'}}>{c.name}</div>
                        <div style={{width:'50px'}}>{c.species}</div>
                        <div style={{width:'50px'}}>{c.status}</div>
                        <ImgDialog img={c.image? c.image : avatar}/>
                        <AddIcon className='icon' onClick={() =>{props.addCharacterToEpisode(props.row,c); handleClose(c)}}/>
                    </div>
                )
            })}
        </Dialog>
    );
    }

function SimpleDialogDemo({characters, sendFilters, row, addCharacterToEpisode, characterById}) {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <div>
        <AddIcon className='icon' onClick={handleClickOpen}/>
        <SimpleDialog  open={open} onClose={handleClose} characters={characters} sendFilters={sendFilters} row={row} addCharacterToEpisode={addCharacterToEpisode} characterById={characterById}/>
        </div>
    );
    }

const mapDispatchToProps= (dispatch) => {
    return {
        sendFilters: (filters) => dispatch(cActions.setCharactersFilter(filters)),
        addCharacterToEpisode: (episode, charid) => dispatch(operations.addCharacterToEpisode(episode, charid))

        
    } 
    }

const mapStateToProps = (state) => {
    return {
        characters: cSelectors.allCharacters(state)
    }
}
      

export default connect(mapStateToProps, mapDispatchToProps)(SimpleDialogDemo);
