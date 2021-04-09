import types from './types'

const charactersFilter = (state = {}, action) => {
    switch (action.type) {
        case types.SET_CHARACTERS_FILTER:
            return {
                pattern: action.payload.pattern,
                property: action.payload.property,
                reverse: action.payload.reverse
            }
        default:
            return state
    }
}

const charactersReducers = {charactersFilter};

export default charactersReducers