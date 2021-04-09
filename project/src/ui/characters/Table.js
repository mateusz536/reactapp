import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ImgDialog from './dialogs/ImgDialog'
import EditDialog from './dialogs/EditDialog'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { useConfirm } from 'material-ui-confirm';
import {useState} from 'react';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: 'yellow'
  },
});

function createData(id,name, species, status, image) {
  return { id,name, species, status, image};
}




export default function BasicTable({characters, deleteCharacter, getEpisodes}) {
    const classes = useStyles();
    const confirm = useConfirm();


    let rows = [];
    characters.forEach(el => {
        rows = [...rows, createData(el.id,el.name,el.species,el.status,el.image)]
    }) 




    return (
        <TableContainer component={Paper}>
        {/* {loading ? <LoadingDialog/> : <div></div>} */}
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Species</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center"></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row, index) => (
                <TableRow key={index}>
                <TableCell>{row.id}</TableCell>
                <TableCell align='center'>
                    {row.name}
                </TableCell>
                <TableCell align="center">{row.species}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center"><ImgDialog img={row.image}/></TableCell>
                <TableCell align="right"><EditDialog row={row}/></TableCell>
                <TableCell align="left">
                    <DeleteRoundedIcon 
                    className='icon' 
                    onClick={() => confirm({description:'This action is permanent'}).then(()=>{deleteCharacter(row.id); getEpisodes() })}/>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
    }