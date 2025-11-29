import Tagline from "../movies/tagline/tagline";
import Cards from "../movies/cards/cards";


function MoiveRecommnedation({ movie_id, count = 10 }) {
    return (
        <div className="mt-16 w-full md:w-[95%] mx-auto py-8">
            <Tagline tagline="Recommended Movies" message="You may also like these movies .. " />
            <div className="flex gap-6 pb-8 px-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
                <Cards path={`http://127.0.0.1:8000/movies/${movie_id}/recommend?count=${count}`} />
            </div>
        </div>
    );
}

export default MoiveRecommnedation;