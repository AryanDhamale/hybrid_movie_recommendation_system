"use client";
import { useState, useEffect } from 'react';
import { fetchMovies } from '@/components/utils/fetch-movies';
import MovieCard from '@/components/movie-card/movie-card';
import MovieCardSkeleton from '@/components/movie-card/movie-card-skeleton';
import MoviesLoadError from '@/components/movies-loading-error/movies-load-error';

function Cards({ path }) {

    const [loading, setLoading] = useState({ isLoading: true, isErrorAfterLoading: false, errorMessage: "" });
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies(setLoading, setMovies, path);
    }, []);

    if (loading.isLoading) {
        return new Array(10).fill(0).map((el, idx) => <div key={idx} className="snap-start"> <MovieCardSkeleton /></div>)
    }

    else if (loading.isErrorAfterLoading) {
        return <MoviesLoadError errorMessage={loading.errorMessage} />
    }

    return (
        movies?.map((movie, idx) => <div key={`${movie.movie_id}-${idx}`} className="snap-start"> <MovieCard movie={movie} /> </div>)
    )


}

export default Cards;