import Table from './Table'
import FilterStripe from './FilterStripe'


const Episodes = ({episodesWithCharacters, deleteEpisode, updateEpisode, deleteCharacterFromEpisode, getEpisodes}) => {

    return (
        <div>
            <FilterStripe classn={'filterStrip1'}/>
            <Table  episodesWithCharacters={episodesWithCharacters} deleteEpisode={deleteEpisode} updateEpisode={updateEpisode} deleteCharacterFromEpisode={deleteCharacterFromEpisode} getEpisodes={getEpisodes}/>
        </div>
    )
}

export default Episodes