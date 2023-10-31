export default function Character(props){
    const {characters, setCharacters} = props;
    const resetCharacters = () => {
        setCharacters(null);
    }
    return(
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>Volver al home</span>
            <div className="container-characters">
                {characters.map((Character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={Character.image} alt={Character.name}></img>
                        </div>
                        <div>
                            <h3>{Character.name}</h3>
                            <h6>{Character.status === "Alive" ? (
                                <>
                                <span className="alive"></span>
                                </>
                            ):(
                                <>
                                <span className="dead"></span>
                                </>
                            )}</h6>
                            <p>
                                <span className="text-gray">Episodios:</span>
                                <span>{Character.episode.length}</span>

                            </p>
                            <p>
                                <span className="text-gray">Especie:</span>
                                <span>{Character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>Volver al home</span>
        </div>
    );
}