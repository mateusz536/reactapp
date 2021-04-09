import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useState} from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import actions from '../../state/ducks/episodes/actions'
import {connect} from 'react-redux'
import SwapVertIcon from '@material-ui/icons/SwapVert';
import CreateDialog from './dialogs/CreateDialog';
import eOperations from '../../state/ducks/episodes/operations'




const Stripe = ({sendFilters, classn, addEpisode}) => {
        const [filters, setFilters] = useState({property:'', patter: '', reverse: false});

        const useStyles1 = makeStyles((theme) => ({
            formControl: {
                margin: theme.spacing(1),
                minWidth: 120,
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
                },
            }));

        const classes = useStyles1();

        const handleSelectChange = (event) => {
            setFilters(filters => ({...filters, property: event.target.value}))
            };

        const handleReverse = () => {
            setFilters(filters=> ({...filters, reverse: !filters.reverse }))
        }

    
        const handleInputChange = (event) => {
            setFilters(filters => ({...filters, pattern: event.target.value}))
            }
        useEffect(() => sendFilters(filters), [filters, sendFilters]
        )
    
    return (
        <div className={classn}>
            <SwapVertIcon className='icon' style={{width: '2vw'}} onClick={handleReverse} />
            <div>
            <FormControl className={classes.formControl} style={{margin:'0', marginBottom:'4px', marginRight:'5px'}}>
            <InputLabel id="demo-simple-select-label">Property</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filters.property}
                onChange={handleSelectChange}
                >
                    <MenuItem selected='selected' value={'id'}>Id</MenuItem>
                    <MenuItem value={'episode'}>Episode</MenuItem>
                    <MenuItem value={'name'}>Name</MenuItem>
                    <MenuItem value={'created'}>Created</MenuItem>
                </Select>
              
            </FormControl>
            <TextField id="standard-basic" label="Pattern" placeholder="pattern" onChange={handleInputChange} />
            </div>
            <CreateDialog addEpisode={addEpisode}/>
        </div>
    )
}

  
const mapDispatchToProps= (dispatch) => {
    return {
        sendFilters: (filter) => dispatch(actions.setEpisodesFilter(filter)),
        addEpisode: (episode) => dispatch(eOperations.addEpisode(episode))
        
    } 
  }

const mapStateToProps = (state) => {
    return {

    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Stripe);
