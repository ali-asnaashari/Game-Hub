import {useEffect, useState} from "react";
import apiClient from "../Services/api-client";
import {CanceledError} from "axios";

export interface Platform {
    id: number,
    name: string,
    slug: string,
}

export interface Game {
    id: number,
    name: string,
    background_image: string,
    // Array of Objects
    parent_platforms: { platform: Platform }[],
    metacritic: number,
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
    // Loading Skeletons
    const [isLoading, setLoading] = useState(false);

    // Send Fetch Request to Backend
    useEffect(() => {
        setLoading(true);
        apiClient.get<FetchGameResponse>('/games', {signal: controller.signal})
            .then(res => {
                setGames(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return {games, error, isLoading};
}

export default useGames;