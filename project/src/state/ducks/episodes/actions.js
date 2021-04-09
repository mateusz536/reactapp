import types from './types'

const setEpisodesFilter = (filter) => ({
    type: types.SET_EPISODES_FILTER,
    payload: {
        pattern: filter.pattern,
        property: filter.property,
        reverse: filter.reverse
    }
}) 


const actions = {
    setEpisodesFilter
}

export default actions