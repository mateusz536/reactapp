import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import ImgDialog from './dialogs/ImgDialog';
import EditDialog from './dialogs/EditDialog'
import { useConfirm } from 'material-ui-confirm';
import AddCharDialog from './dialogs/AddCharDialog'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
      backgroundColor: 'yellow'
    },
  },
});

function createData(id, episode, name, created, characters) {
  return {
    id,
    episode,
    name,
    created,
    characters
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const confirm = useConfirm();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.episode}</TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.created.slice(0,10)}</TableCell>
        <TableCell align="right">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right">
          <EditDialog row={row} updateEpisode={props.updateEpisode} updateCharacter={props.updateEpisode}/>
        </TableCell>
        <TableCell align="left">
            <DeleteRoundedIcon className='icon' onClick={() => {confirm({description: 'This action is permanent'}).then(()=>props.deleteEpisode(row.id))}}/>
        </TableCell>
        
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Characters
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Species</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Image</TableCell>
                    <TableCell align="right">
                          <AddCharDialog row={row}/>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.characters && row.characters.map((char,index) => (
                    
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {char.name ? char.name : ""}
                      </TableCell>
                      <TableCell>{char.species ? char.species : ""}</TableCell>
                      <TableCell>{char.status ? char.status : ""}</TableCell>
                      <TableCell align="right"><ImgDialog  img={char.image? char.image: ""}/></TableCell>
                      <TableCell align="right">
                        <DeleteRoundedIcon className='icon' onClick={() => props.deleteCharacterFromEpisode(row, char)}/>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function CollapsibleTable({episodesWithCharacters, deleteEpisode, updateEpisode, updateCharacter, deleteCharacterFromEpisode}) {
  const classes = useRowStyles();
  let rows = []
  const genRows = (epis) => {

    epis.forEach(el => {
      rows = [...rows,createData(el.id, el.episode,el.name,el.created, el.characters)]
    })
  }
  genRows(episodesWithCharacters)
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            
            <TableCell>Id</TableCell>
            <TableCell align="right">Episode</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Created</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={index} row={row} deleteEpisode={deleteEpisode} updateEpisode={updateEpisode} updateCharacter={updateCharacter} deleteCharacterFromEpisode={deleteCharacterFromEpisode} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}