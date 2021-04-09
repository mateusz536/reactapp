import {useEffect} from 'react';
import eOperations from './state/ducks/episodes/operations'
import cOperations from './state/ducks/characters/operations'
import {connect} from 'react-redux'
import './App.css'
import cSelectors from './state/ducks/characters/selectors'
import eSelectors from './state/ducks/episodes/selectors'
import bck from './materials/napis.png'
import { ConfirmProvider } from 'material-ui-confirm';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Characters from './ui/characters/Characters'
import Episodes from './ui/episodes/Episodes'
import HomePage from './ui/home/Home'

function App({getEpisodes, getCharacters, characters,episodesWithCharacters, deleteEpisode, updateEpisode, deleteCharacterFromEpisode, deleteCharacter}) {
  useEffect(() => {getCharacters(); getEpisodes()}, [getCharacters, getEpisodes])
  return (
    <ConfirmProvider>
      <Router>
        <div className="App">
          <div className='menu'>
            <Link to="/characters" className='menuItem' onClick={getCharacters}>
              CHARACTERS
            </Link>
            
            <Link to='/'><img src={bck} className='napis' alt=""></img></Link>
            <Link to="/episodes" onClick={getEpisodes} className='menuItem'>
              EPISODES
            </Link>
            
          </div>
          <div className='contentbackground'>
            <div className='content'>
              
                <Switch>
                  <Route path='/home'>
                    <HomePage/>
                  </Route>
                  <Route path={"/characters"}>
                    <Characters characters={characters} deleteCharacter={deleteCharacter} episodes={episodesWithCharacters} deleteCharacterFromEpisode={deleteCharacterFromEpisode} getEpisodes={getEpisodes}/>
                  </Route>
                  <Route path={"/episodes"}>
                    <Episodes episodesWithCharacters={episodesWithCharacters} deleteEpisode={deleteEpisode} updateEpisode={updateEpisode} deleteCharacterFromEpisode={deleteCharacterFromEpisode}/>
                  </Route>
                  <Redirect to='/home'></Redirect>
                </Switch>
              
            </div>
          </div>
        </div>
      </Router>
    </ConfirmProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: cSelectors.allCharacters(state),
    episodesWithCharacters: eSelectors.allEpisodesWithCharacters(state)
  }
}

const mapDispatchToProps= (dispatch) => {
  return {
    getEpisodes: () => {
      dispatch(eOperations.getEpisodes())
    },
    getCharacters: () => {
      dispatch(cOperations.getCharacters())
    },
    deleteEpisode: (id) => dispatch(eOperations.deleteEpisode(id)),
    updateEpisode: (episode) => dispatch(eOperations.updateEpisode(episode)),
    updateCharacter: (character) => dispatch(cOperations.updateCharacter(character)),
    deleteCharacterFromEpisode: (episode, char) => dispatch(eOperations.deleteCharacterFromEpisode(episode,char)),
    deleteCharacter: (id) => dispatch(cOperations.deleteCharacter(id))

  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
