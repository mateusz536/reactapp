const allCharacters = (state) => {
    let x = [...state.entities.characters.allIds.map(n => {
        if (state.entities.characters.byId[n] != undefined) {
            return {...state.entities.characters.byId[n]}
        } else return {id: -1 ,name: 'deleted', species: "unknown", status: "unknown", image: ''}
    })]
    if (state.charactersFilter['pattern'] !== "" && state.charactersFilter['property'] !== "" && state.charactersFilter['pattern'] !== undefined && state.charactersFilter['property'] !== undefined) {
        x = x.filter(o => String(o[state.charactersFilter['property']]).toLowerCase().includes(String(state.charactersFilter['pattern']).toLowerCase()))
    }

    if (state.charactersFilter.reverse) {
        return x.reverse()
    } else return x
}



const selectors = {allCharacters};

export default selectors