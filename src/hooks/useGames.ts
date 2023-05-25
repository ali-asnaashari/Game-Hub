import {useEffect, useState} from "react";
import apiClient from "../Services/api-client";
import {CanceledError} from "axios";

interface Game {
    id: number,
    name: string,
}

interface FetchGameResponse {
    count: number,
    results: Game[],
}

const useGames = () => {

    const controller = new AbortController();

    // Storing Game Objects
    const [games, setGames] = useState<Game[]>([]);

    // Error Messages
    const [error, setError] = useState('');

    // Send Fetch Request to Backend
    useEffect(() => {
        apiClient.get<FetchGameResponse>('/games', {signal: controller.signal})
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });

        return () => controller.abort();
    }, []);

    return {games, error};
}

export default useGames;