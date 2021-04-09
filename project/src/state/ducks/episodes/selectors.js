const allEpisodes = (state) => {
    return state.entities.episodes.allIds.map(n => state.entities.episodes.byId[n])
}

const allEpisodesWithCharacters = (state) => {
    let x = [...state.entities.episodes.allIds.map(n => {return {...state.entities.episodes.byId[n]}})];
    for (let i=0;i<x.length ;i++) {
        let y = [...x[i].characters]
        y = y.map(id => state.entities.characters.byId[id])
        x[i].characters = y;
    }
    if (state.episodesFilter['pattern'] !== "" && state.episodesFilter['property'] !== "" && state.episodesFilter['pattern'] !== undefined && state.episodesFilter['property'] !== undefined) {
        x = x.filter(o => String(o[state.episodesFilter['property']]).toLowerCase().includes(String(state.episodesFilter['pattern']).toLowerCase()))
    }
    if (state.episodesFilter.reverse) {
        return x.reverse()
    } else return x
    
}

const selectors = {allEpisodes, allEpisodesWithCharacters};

export default selectors