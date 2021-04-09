import types from './types'

const episodesFilter = (state = {pattern: "", property: "", reverse: false}, action) => {
    switch (action.type) {
        case types.SET_EPISODES_FILTER:
            return {
                pattern: action.payload.pattern,
                property: action.payload.property,
                reverse: action.payload.reverse
            }

        default:
            return state
    }
}

const episodesReducers = {episodesFilter}

export default episodesReducers