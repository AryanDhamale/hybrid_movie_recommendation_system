
export async function fetchMovies(setLoading, setMovies, path) {
    try {
        const url = path;

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

