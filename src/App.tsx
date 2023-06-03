import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import {useEffect, useState} from "react";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import {Genre} from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import {Platform} from "./hooks/useGames";

function App() {

    // used for when click in specific  Genres , Gamed Filtered
    const [selectedGenres, setSelectedGenres] = useState<Genre | null>(null);

    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

    useEffect(() => {
        document.title = "Game-Hub";
    }, [])

    return (
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"` //1024 px
        }}
              templateColumns={{
                  base: '1fr',
                  lg: '200px 1fr'
              }}
        >
            <GridItem area='nav'>
                <NavBar/>
            </GridItem>

            <Show above='lg'>
                <GridItem area='aside' paddingX={5}>
                    <GenreList selectedGenre={selectedGenres} onSelectGenre={(genre) => setSelectedGenres(genre)}/>
                </GridItem>
            </Show>

            <GridItem area='main'>
                <PlatformSelector selectedPlatform={selectedPlatform}
                                  onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
                <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenres}/>
            </GridItem>
        </Grid>
    );
}

export default App;
