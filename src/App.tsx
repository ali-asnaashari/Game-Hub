import {Box, Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import {useEffect, useState} from "react";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import {Genre} from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import {Platform} from "./hooks/useGames";
import SortSelector from "./Components/SortSelector";


export interface GameQuery {
    genre: Genre | null,
    platform: Platform | null,
    sortOrder: string,
}

function App() {

    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
                    <GenreList selectedGenre={gameQuery.genre}
                               onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
                </GridItem>
            </Show>

            <GridItem area='main'>
                <Flex paddingLeft={2} marginBottom={5}>
                    <Box marginRight={5}>
                        <PlatformSelector selectedPlatform={gameQuery.platform}
                                          onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
                    </Box>
                    <SortSelector sortOrder={gameQuery.sortOrder}
                                  onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
                </Flex>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    );
}

export default App;
