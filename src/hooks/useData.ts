import {useEffect, useState} from "react";
import apiClient from "../Services/api-client";
import {CanceledError} from "axios";

interface FetchResponse<T> {
    count: number,
    results: T[],
}

const useData = <T>(endpoint: string) => {
    // Storing Data Objects
    const [data, setData] = useState<T[]>([]);
    // Error Messages
    const [error, setError] = useState('');
    // Loading Skeletons
    const [isLoading, setLoading] = useState(false);

    // Send Fetch Request to Backend
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
            .then(res => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return {data, error, isLoading};
}

export default useData;