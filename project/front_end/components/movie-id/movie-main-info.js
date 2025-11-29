import Link from "next/link";

const MovieMainInfo = ({ movie }) => {
    if (!movie) return null;

    const {
        movie_title,
        overview,
        vote_average,
        release_date,
        genres,
        poster_path,
        backdrop_path,
        runtime,
        homepage,
    } = movie;

    const imageUrl = poster_path || "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop";

    const backdropUrl = backdrop_path || "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop";

    return (
        <div className="pt-10 md:px-10 relative w-full min-h-[60vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
            {/* Background Image with Overlay */}
            {backdropUrl && (
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-100"
                    style={{ backgroundImage: `url(${backdropUrl})` }}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 items-center md:items-start">

                {/* Poster Image */}
                <div className="w-64 md:w-80 flex-shrink-0 rounded-xl overflow-hidden shadow-2xl border border-gray-700/50">
                    <img
                        src={imageUrl}
                        alt={movie_title}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Movie Details */}
                <div className="flex-1 flex flex-col gap-4 text-center md:text-left">

                    {/* Title and Year */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            {movie_title}
                        </h1>
                        <p className="text-lg text-gray-400 mt-1">
                            {release_date?.split(' ')[0].split('-')[0]} • {runtime} min
                        </p>
                    </div>

                    {/* Genres */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {genres?.map((genre) => (
                            <span
                                key={genre}
                                className="px-3 py-1 text-sm font-medium bg-white/10 border border-white/10 rounded-full backdrop-blur-sm"
                            >
                                {genre}
                            </span>
                        ))}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-500 text-yellow-500 font-bold text-lg">
                            {vote_average?.toFixed(1)}
                        </div>
                        <span className="text-sm text-gray-300">User Score</span>
                    </div>

                    {/* Overview */}
                    <div className="max-w-2xl">
                        <h3 className="text-xl font-semibold mb-2 text-gray-200">Overview</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {overview}
                        </p>
                    </div>

                    {/* Actions (Example buttons) */}
                    <div className="flex gap-4 mt-4 justify-center md:justify-start">
                        <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors border border-gray-700">
                            Add to List
                        </button>
                        <Link href={homepage}>
                            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                                Watch Trailer
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MovieMainInfo;