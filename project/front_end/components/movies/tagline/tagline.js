
function Tagline({ tagline, message }) {
    return (
        <div className="flex items-end justify-between mb-6 px-6">
            <div>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    {tagline}
                    <span className="text-primary">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                </h2>
                <p className="text-muted-foreground text-sm mt-1 font-medium">{message}</p>
            </div>

            <button className="group flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                View Library
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}

export default Tagline;