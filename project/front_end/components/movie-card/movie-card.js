import Link from "next/link";

function MovieCard({ movie }) {

  const getRatingColor = (rating) => {
    if (rating >= 7.5) return 'text-green-400 border-green-400/30 bg-green-400/10';
    if (rating >= 6.0) return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
    return 'text-red-400 border-red-400/30 bg-red-400/10';
  };

  return (
    <Link href={`/movie/${movie.movie_id}`}>
      <div className="group relative flex-shrink-0 w-[200px] cursor-pointer">

        <div className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-1">

          {/* Image Container */}
          <div className="aspect-[2/3] w-full overflow-hidden">
            <img
              src={movie.poster_path || "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop"}
              alt={movie.movie_title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Rating Badge */}
          <div className={`absolute top-3 right-3 backdrop-blur-md px-2 py-1 rounded-lg border ${getRatingColor(movie.vote_average)} text-xs font-bold shadow-sm`}>
            {movie.vote_average}
          </div>


          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-bold text-white text-lg leading-tight line-clamp-2 mb-1 drop-shadow-md">
              {movie.movie_title}
            </h3>
            <div className="flex items-center gap-2 text-gray-300 text-xs font-medium">
              <span>{movie.release_date?.split(' ')[0] || ""}</span>
              <span className="w-1 h-1 rounded-full bg-gray-400" />
              <span>Movie</span>
            </div>
          </div>

        </div>

      </div>
    </Link>
  );
};

export default MovieCard;