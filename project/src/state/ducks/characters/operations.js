import {createAction} from 'redux-api-middleware';
import types from './types';
import {normalize, schema} from 'normalizr'

const characterSchema = new schema.Entity('characters');
const charactersSchema = new schema.Array(characterSchema);

const getCharacters = (word) => (dispatch) => dispatch(createAction({
    endpoint: "http://localhost:3210/characters",
    method: 'GET',
    headers: {
		"Accept": "application/json",
        "Content-Type": "application/json",
        },
    types: [
        types.CHARACTERS_REQUEST,
        {
            type:  types.CHARACTERS_SUCCESS,
            payload: async (action, state, res) => {
              const json = await res.json();
              const { entities } = normalize(json, charactersSchema);
              return entities;
            },
            meta: { actionType: 'GET_ALL' }
          },
        types.CHARACTERS_FAILURE]
}));

const updateCharacter = (character) => (dispatch) => dispatch(createAction({
  endpoint: `http://localhost:3210/characters/${character.id}`,
  method: 'PUT',
  body: JSON.stringify(character),
  headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      },
  types: [
      types.CHARACTERS_REQUEST,
      {
          type:  types.CHARACTERS_SUCCESS,
          payload: async () => {
            const json = character;
            const { entities } = normalize(json, characterSchema);
            return entities;
          },
          meta: { actionType: 'UPDATE_ONE' }
        },
      types.CHARACTERS_FAILURE]
}));

const addCharacter = (character) => (dispatch) => dispatch(createAction({
  endpoint: `http://localhost:3210/characters`,
  method: 'POST',
  body: JSON.stringify(character),
  headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      },
  types: [
      types.CHARACTERS_REQUEST,
      {
          type:  types.CHARACTERS_SUCCESS,
          payload:  async (action, state, res) => {
            let x = await res.json()
            let json = character;
            json.id = x.id
            const { entities } = normalize(json, characterSchema);
            return entities;
          },
          meta: { actionType: 'ADD_ONE' }
        },
      types.CHARACTERS_FAILURE]
}));

const deleteCharacter = (id) => (dispatch) => dispatch(createAction({
  endpoint: `http://localhost:3210/characters/${id}`,
  method: 'DELETE',
  headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      },
  types: [
      types.CHARACTERS_REQUEST,
      {
          type:  types.CHARACTERS_SUCCESS,
          payload:  async () => {
            let json = {id: id}
            const { entities } = normalize(json, characterSchema);
            return entities;
          },
          meta: { actionType: 'DELETE_ONE' }
        },
      types.CHARACTERS_FAILURE]
}));



const operations = {getCharacters, updateCharacter, addCharacter, deleteCharacter};
export default operations;
