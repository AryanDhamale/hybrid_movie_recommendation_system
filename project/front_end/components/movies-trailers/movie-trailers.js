'use client';

import { useState, useRef } from 'react';
import { Play, ChevronRight, Calendar, Clock } from 'lucide-react';

const LatestTrailers = () => {
    const [activeVideo, setActiveVideo] = useState(null);
    const scrollContainerRef = useRef(null);

    // Sample trailer data
    const trailers = [
        {
            id: '1',
            title: 'Dune: Part Three',
            youtubeId: 'Way9Dexny3w',
            releaseDate: 'Coming 2026',
            duration: '2:45',
            thumbnail: 'https://img.youtube.com/vi/Way9Dexny3w/maxresdefault.jpg'
        },
        {
            id: '2',
            title: 'The Batman Part II',
            youtubeId: 'mqqft2x_Aa4',
            releaseDate: 'October 2025',
            duration: '2:30',
            thumbnail: 'https://img.youtube.com/vi/mqqft2x_Aa4/maxresdefault.jpg'
        },
        {
            id: '3',
            title: 'Deadpool & Wolverine',
            youtubeId: '73_1biulkYk',
            releaseDate: 'In Theaters Now',
            duration: '2:15',
            thumbnail: 'https://img.youtube.com/vi/73_1biulkYk/maxresdefault.jpg'
        },
        {
            id: '4',
            title: 'Stranger Things 5',
            youtubeId: 'D8Qxxq0Oh9M',
            releaseDate: 'November 2025',
            duration: '1:31',
            thumbnail: 'https://img.youtube.com/vi/D8Qxxq0Oh9M/maxresdefault.jpg'
        },
        {
            id: '5',
            title: 'Parasite - Official Trailer (2019)',
            youtubeId: '5xH0HfJHsaY',
            releaseDate: 'August 2019',
            duration: '2:16',
            thumbnail: 'https://img.youtube.com/vi/5xH0HfJHsaY/maxresdefault.jpg'
        },
        {
            id: '6',
            title: 'The Call ',
            youtubeId: 'hxkKeniT-0Q',
            releaseDate: 'October 20',
            duration: '1:51',
            thumbnail: 'https://img.youtube.com/vi/hxkKeniT-0Q/maxresdefault.jpg'
        }
    ];

    const handlePlayClick = (videoId) => {
        setActiveVideo(videoId);
    };

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="w-full py-16 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Header */}
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-2">
                            Latest Trailers
                        </h2>
                        <p className="text-muted-foreground font-medium">
                            Watch the newest trailers for upcoming movies
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex gap-2">
                            <button
                                onClick={() => scroll('left')}
                                className="p-2 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                                aria-label="Scroll left"
                            >
                                <ChevronRight className="w-5 h-5 rotate-180" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="p-2 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                                aria-label="Scroll right"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                        <button className="group flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                            View All
                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>

                {/* Trailers Carousel */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {trailers.map((trailer) => (
                        <div
                            key={trailer.id}
                            className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center group relative"
                        >
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted shadow-lg ring-1 ring-white/10 transition-all duration-500 hover:shadow-2xl hover:ring-primary/20 hover:-translate-y-1">
                                {activeVideo === trailer.youtubeId ? (
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${trailer.youtubeId}?autoplay=1&rel=0`}
                                        title={trailer.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <>
                                        {/* Thumbnail Image */}
                                        <img
                                            src={trailer.thumbnail}
                                            alt={trailer.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70" />

                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center z-10">
                                            <button
                                                onClick={() => handlePlayClick(trailer.youtubeId)}
                                                className="group/btn relative flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20"
                                                aria-label={`Play ${trailer.title}`}
                                            >
                                                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover/btn:opacity-100" />
                                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                                            </button>
                                        </div>

                                        {/* Content Overlay */}
                                        <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                            <div className="transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-1 drop-shadow-md">
                                                    {trailer.title}
                                                </h3>
                                                <div className="flex items-center gap-4 text-sm text-gray-300">
                                                    <div className="flex items-center gap-1.5">
                                                        <Calendar className="w-4 h-4 text-primary" />
                                                        <span>{trailer.releaseDate}</span>
                                                    </div>
                                                    {trailer.duration && (
                                                        <div className="flex items-center gap-1.5">
                                                            <Clock className="w-4 h-4 text-primary" />
                                                            <span>{trailer.duration}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestTrailers;