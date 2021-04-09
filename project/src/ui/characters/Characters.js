import Table from './Table'
import FilterStripe from './FilterStripe'

const Characters = ({characters, deleteCharacter, episodes, deleteCharacterFromEpisode, getEpisodes}) => {
    return (
        <div>
            <FilterStripe classn={'filterStrip1'}/>
            <Table characters={characters}  deleteCharacter={deleteCharacter} episodes={episodes} deleteCharacterFromEpisode={deleteCharacterFromEpisode} getEpisodes={getEpisodes}/>
        </div>
    )
}

export default Characters