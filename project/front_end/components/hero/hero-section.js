"use client";
import { Play, Info, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

function HeroSection() {

    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target[0]?.value;
        console.log(query);
        if (query) {
            router.push(`/search/${query}`);
        }
        else {
            alert("Please enter a search query");
        }
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 max-w-4xl space-y-6 pt-20">

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
                    Discover Your Next <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                        Favorite Story
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed drop-shadow-md">
                    Dive into the world of epic adventures, thrilling action, and blockbuster heroes.
                    Explore millions of movies, TV shows, and people to discover.
                </p>

                {/* Search Bar */}
                <form onSubmit={handleSearch} className="w-full max-w-lg relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-4 py-4 border-none rounded-full leading-5 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white/20 backdrop-blur-md transition-all shadow-lg"
                        placeholder="Search for movies, tv shows, people..."
                    />
                    <button type="submit" className="absolute inset-y-1 right-1 px-6 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-colors shadow-md flex items-center">
                        Search
                    </button>
                </form>

                {/* CTA Buttons */}
                <div className="flex items-center gap-4 pt-4">
                    <button className="flex items-center gap-2 px-8 py-3 bg-white text-black font-bold rounded hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
                        <Play className="w-5 h-5 fill-black" />
                        Watch Now
                    </button>
                    <button className="flex items-center gap-2 px-8 py-3 bg-gray-600/60 text-white font-bold rounded backdrop-blur-md hover:bg-gray-600/80 transition-all transform hover:scale-105 shadow-lg border border-white/20">
                        <Info className="w-5 h-5" />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;