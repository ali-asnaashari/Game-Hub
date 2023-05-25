import {useEffect, useState} from "react";
import { Text} from "@chakra-ui/react";
import apiClient from "../Services/api-client";

interface Game {
    id: number,
    name: string,
};

interface FetchGameResponse {
    count: number,
    results: Game[],
};
const GameGrid = () => {

    // Storing Game Objects
    const [games, setGames] = useState<Game[]>([]);

    // Error Messages
    const [error, setError] = useState('');

    // Send Fetch Request to Backend
    useEffect(() => {
        apiClient.get<FetchGameResponse>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message));
    });

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    );
};

export default GameGrid;