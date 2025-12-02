
export async function SearchMovies(searchQuery, setMovies) {
    try {
        const api_endpoint = process.env.NODE_ENV == "development" ? "http://127.0.0.1:8000" : process.env.NEXT_PUBLIC_API_ENDPOINT;
        const url = `${api_endpoint}/search?query=${searchQuery}`;

        const response = await fetch(url, { cache: 'force-cache', next: { revalidate: 60 } });
        const data = await response.json();
        setMovies(data.movies);

    }
    catch (err) {
        throw err;
    }
}
