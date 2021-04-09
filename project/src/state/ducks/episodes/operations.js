import {createAction} from 'redux-api-middleware';
import types from './types';
import {normalize, schema} from 'normalizr'

const episodeSchema = new schema.Entity('episodes');
const episodesSchema = new schema.Array(episodeSchema);

const getEpisodes = () => (dispatch) => dispatch(createAction({
    endpoint: "http://localhost:3210/episodes",
    method: 'GET',
    headers: {
		"Accept": "application/json",
        "Content-Type": "application/json",
        },
    types: [
        types.EPISODES_REQUEST,
        {
            type:  types.EPISODES_SUCCESS,
            payload: async (action, state, res) => {
              const json = await res.json();
              const { entities } = normalize(json, episodesSchema);
              return entities;
            },
            meta: { actionType: 'GET_ALL' }
          },
        types.EPISODES_FAILURE]
}));

const deleteEpisode = (id) => (dispatch) => dispatch(createAction({
  endpoint: `http://localhost:3210/episodes/${id}`,
  method: 'DELETE',
  headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      },
  types: [
      types.EPISODES_REQUEST,
      {
          type:  types.EPISODES_SUCCESS,
          payload: async () => {
            const json = {id: id};
            const { entities } = normalize(json, episodeSchema);
            return entities;
          },
          meta: { actionType: 'DELETE_ONE' }
        },
      types.EPISODES_FAILURE]
}));


const updateEpisode = (episode) => (dispatch) => dispatch(createAction({
  endpoint: `http://localhost:3210/episodes/${episode.id}`,
  method: 'PUT',
  body: JSON.stringify(episode),
  headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      },
  types: [
      types.EPISODES_REQUEST,
      {
          type:  types.EPISODES_SUCCESS,
          payload: async () => {
            const json = episode;
            const { entities } = normalize(json, episodeSchema);
            return entities;
          },
          meta: { actionType: 'UPDATE_ONE' }
        },
      types.EPISODES_FAILURE]
}));


const addEpisode = (episode) => (dispatch) => dispatch(createAction({
  endpoint: `http://localhost:3210/episodes`,
  method: 'POST',
  body: JSON.stringify(episode),
  headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      },
  types: [
      types.EPISODES_REQUEST,
      {
          type:  types.EPISODES_SUCCESS,
          payload:  async (action, state, res) => {
            let x = await res.json()
            let json = episode;
            json.id = x.id
            const { entities } = normalize(json, episodeSchema);
            return entities;
          },
          meta: { actionType: 'ADD_ONE' }
        },
      types.EPISODES_FAILURE]
}));



const addCharacterToEpisode = (episode, char) => (dispatch) => dispatch(createAction({
  endpoint: `http://localhost:3210/episodes/${episode.id}`,
  method: 'PUT',
  body: JSON.stringify({...episode, characters: [...episode.characters.map(c => c.id), char.id]}),
  headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      },
  types: [
      types.EPISODES_REQUEST,
      {
          type:  types.EPISODES_SUCCESS,
          payload: async () => {
            const json = episode;
            json.characters = [...json.characters.map(c=> c.id)]
            json.characters = json.characters.includes(char.id) ? json.characters : [...json.characters, char.id] 
            const { entities } = normalize(json, episodeSchema);
            return entities;
          },
          meta: { actionType: 'UPDATE_ONE' }
        },
      types.EPISODES_FAILURE]
}));


const deleteCharacterFromEpisode = (episode, char) => (dispatch) => dispatch(createAction({
  endpoint: `http://localhost:3210/episodes/${episode.id}/${char.id}`,
  method: 'DELETE',
  headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      },
  types: [
      types.EPISODES_REQUEST,
      {
          type:  types.EPISODES_SUCCESS,
          payload: async () => {
            const json = {id:episode.id, char: char.id};
            const { entities } = normalize(json, episodeSchema);
            return entities;
          },
          meta: { actionType: 'DELETE_CHAR_FROM_EP' }
        },
      types.EPISODES_FAILURE]
}));


const operations = {getEpisodes, deleteEpisode, updateEpisode, addCharacterToEpisode, deleteCharacterFromEpisode, addEpisode};
export default operations;
