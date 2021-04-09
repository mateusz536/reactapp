import types from './types'

const setCharactersFilter = (filter) => ({
    type: types.SET_CHARACTERS_FILTER,
    payload: {
        pattern: filter.pattern,
        property: filter.property,
        reverse: filter.reverse
    }
}) 


const actions = {
    setCharactersFilter
}

export default actions