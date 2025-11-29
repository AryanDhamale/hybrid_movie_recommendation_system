import React from 'react';

const MovieSubInfo = ({ movie }) => {
    if (!movie) return null;

    // Destructure and safely access properties
    // Handling potential variations in data structure (e.g., TMDB API vs custom backend)
    const cast = movie.cast || [];
    const directors = movie.crew || [];
    const keywords = movie.keywords || [];
    const budget = movie.budget || 0;
    const revenue = movie.revenue || 0;
    const genres = movie.genres || [];
    const status = movie.status || 'Unknown';
    const language = movie.original_language || 'Unknown';
    const releaseDate = movie.release_date?.split(' ')[0] || 'Unknown';

    // Format currency
    const formatCurrency = (amount) => {
        if (!amount) return 'N/A';
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    // Format language code to name (simple map or display code)
    const languageNames = new Intl.DisplayNames(['en'], { type: 'language' });
    const getLanguageName = (code) => {
        try {
            return languageNames.of(code);
        } catch (e) {
            return code;
        }
    };

    return (
        <div className="w-full md:w-[95%] mx-auto bg-white text-gray-900 py-12 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Key Stats & Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <h3 className="text-xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Movie Info</h3>

                            <div className="space-y-4">
                                <div>
                                    <span className="block text-sm text-gray-500 mb-1">Status</span>
                                    <span className="text-lg font-medium text-gray-900">{status}</span>
                                </div>

                                <div>
                                    <span className="block text-sm text-gray-500 mb-1">Release Date</span>
                                    <span className="text-lg font-medium text-gray-900">{releaseDate}</span>
                                </div>

                                <div>
                                    <span className="block text-sm text-gray-500 mb-1">Original Language</span>
                                    <span className="text-lg font-medium text-gray-900 capitalize">{getLanguageName(language)}</span>
                                </div>

                                <div>
                                    <span className="block text-sm text-gray-500 mb-1">Budget</span>
                                    <span className="text-lg font-medium text-emerald-600">{formatCurrency(budget)}</span>
                                </div>

                                {revenue > 0 && (
                                    <div>
                                        <span className="block text-sm text-gray-500 mb-1">Revenue</span>
                                        <span className="text-lg font-medium text-emerald-600">{formatCurrency(revenue)}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Genres */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-gray-800">Genres</h3>
                            <div className="flex flex-wrap gap-2">
                                {genres.map((genre, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-sm bg-white text-gray-700 rounded-full border border-gray-200 hover:border-gray-400 transition-colors cursor-default shadow-sm"
                                    >
                                        {genre}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Keywords */}
                        {keywords.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-gray-800">Keywords</h3>
                                <div className="flex flex-wrap gap-2">
                                    {keywords.map((keyword, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md border border-gray-200 hover:bg-gray-200 transition-colors"
                                        >
                                            #{keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Cast & Crew */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Directors */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                                <span className="w-1 h-6 bg-red-600 rounded-full"></span>
                                Director{directors.length > 1 ? 's' : ''}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {directors.length > 0 ? directors.map((director, index) => (
                                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm min-w-[200px]">
                                        <p className="font-semibold text-gray-900 text-lg">{director}</p>
                                        <p className="text-sm text-gray-500">Director</p>
                                    </div>
                                )) : (
                                    <p className="text-gray-500">No director information available.</p>
                                )}
                            </div>
                        </div>

                        {/* Cast */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                                <span className="w-1 h-6 bg-red-600 rounded-full"></span>
                                Top Cast
                            </h3>

                            {cast.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {cast.map((person, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all group shadow-sm"
                                        >
                                            <div className="flex-1 min-w-0">
                                                <p className="text-gray-900 font-medium truncate transition-colors">
                                                    {person}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate">
                                                    {person}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500">No cast information available.</p>
                            )}

                            {cast.length > 15 && (
                                <button className="mt-6 text-sm text-red-600 hover:text-red-700 font-medium transition-colors">
                                    View Full Cast & Crew →
                                </button>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieSubInfo;