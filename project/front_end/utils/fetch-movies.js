
export async function fetchMovies(setLoading, setMovies, path) {
    try {
        const api_endpoint = process.env.NODE_ENV == "development" ? "http://127.0.0.1:8000" : process.env.NEXT_PUBLIC_API_ENDPOINT;
        const url = `${api_endpoint}/${path}`;

        setLoading({ isLoading: true, isErrorAfterLoading: false, errorMessage: "" });
        const response = await fetch(url, { cache: 'force-cache', next: { revalidate: 3600 } });
        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.error || "Something went wrong");
        }

        setLoading({ isLoading: false, isErrorAfterLoading: false, errorMessage: "" });
        setMovies(responseData.movies);

    }
    catch (err) {
        setLoading({ isLoading: false, isErrorAfterLoading: true, errorMessage: err.message });
    }
}

