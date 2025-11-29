

function MoviesLoadError({ errorMessage }) {
    return (
        <div className="w-full h-50 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-red-500">{errorMessage}</h1>
            <p className="text-sm text-gray-500">Please if you found this message, report to the team</p>
        </div>
    );
}

export default MoviesLoadError