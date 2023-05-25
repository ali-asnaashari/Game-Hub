import {useEffect, useState} from "react";
import apiClient from "../Services/api-client";
import {CanceledError} from "axios";

interface Genre {
    id: number,
    name: string,
}

interface FetchGenresResponse {
    count: number,
    results: Genre[],
}

const useGenre = () => {
    const controller = new AbortController();

    // Storing genre Objects
    const [genres, setGenres] = useState<Genre[]>([]);
    // Error Messages
    const [error, setError] = useState('');
    // Loading Skeletons
    const [isLoading, setLoading] = useState(false);

    // Send Fetch Request to Backend
    useEffect(() => {
        setLoading(true);
        apiClient.get<FetchGenresResponse>('/genres', {signal: controller.signal})
            .then(res => {
                setGenres(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return {genres, error, isLoading};

}

export default useGenre;