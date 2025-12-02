"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import MovieCard from "@/components/movie-card/movie-card";
import { SearchMovies } from "@/utils/search-movies";

function Search() {
    const params = useParams();
    // Decode the query parameter to handle spaces and special characters
    const initialQuery = params.query ? decodeURIComponent(params.query) : "";

    const [query, setQuery] = useState(initialQuery);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchMovies = async (searchQuery) => {
        if (!searchQuery) return;
        setLoading(true);
        try {
            await SearchMovies(searchQuery, setMovies);
        } catch (error) {
            console.error("Error searching movies:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (initialQuery) {
            searchMovies(initialQuery);
        }
    }, [initialQuery]);

    const handleSearch = () => {
        searchMovies(query);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white p-8">
            <div className="max-w-7xl mx-auto">
                {/* Search Bar */}
                <div className="flex gap-4 mb-8 max-w-2xl mx-auto">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search for movies..."
                        className="flex-1 bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white placeholder-gray-400"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                    >
                        Search
                    </button>
                </div>

                {/* Search Results */}
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.movie_id}
                                movie={{
                                    ...movie,
                                    movie_title: movie.title, // Map API 'title' to MovieCard 'movie_title'
                                }}
                            />
                        ))}
                    </div>
                )}

                {!loading && movies.length === 0 && (
                    <div className="text-center text-gray-400 mt-12">
                        {query ? "No movies found." : "Search for a movie to see results."}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;