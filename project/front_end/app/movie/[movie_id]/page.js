"use client";
import { useState, useEffect } from "react";
import MovieMainInfo from "@/components/movie-id/movie-main-info";
import MovieSubInfo from "@/components/movie-id/movie-sub-info";
import MoiveRecommnedation from "@/components/movie-id/movie-recommendation";
import Loading from "@/components/loader/loader";
import { fetchMovies } from "@/components/utils/fetch-movies";
import MoviesLoadError from "@/components/movies-loading-error/movies-load-error";
import NavBar from "@/components/header-and-footer/nav-bar";
import Footer from "@/components/header-and-footer/footer";

function MoviePage({ params }) {

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState({ isLoading: true, isErrorAfterLoading: false, errorMessage: "" });
    const api_endpoint = process.env.NODE_ENV == "development" ? "http://127.0.0.1:8000" : process.env.NEXT_PUBLIC_API_ENDPOINT;

    useEffect(() => {

        async function getMoive() {
            const { movie_id } = await params;
            await fetchMovies(setLoading, setMovie, `${api_endpoint}/movies/${movie_id}`);
        }

        getMoive();

    }, []);


    if (loading.isLoading) {
        return <Loading />;
    }

    else if (loading.isErrorAfterLoading) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center ">
                <MoviesLoadError errorMessage={loading.errorMessage} />
            </div>
        );
    }

    return (
        <>
            <NavBar />
            <MovieMainInfo movie={movie} />
            <MovieSubInfo movie={movie} />
            <MoiveRecommnedation movie_id={movie.movie_id} count={10} />
            <Footer />
        </>
    );
}

export default MoviePage;