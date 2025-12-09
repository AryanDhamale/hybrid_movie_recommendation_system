"use client";
import Link from "next/link";
import { Info, Zap, Database, Monitor, Code, Clapperboard, Star, Github } from "lucide-react";

export default function MoreInfo() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
            {/* Hero Section */}
            <section className="relative py-24 px-6 lg:px-8 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-70"></div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-medium text-muted-foreground mb-6 backdrop-blur-sm">
                    <Star className="w-3.5 h-3.5 text-primary" fill="currentColor" />
                    <span>Powered by Advanced AI</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent mb-6 max-w-3xl">
                    Discover the Magic Behind the Recommendations
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
                    Our platform uses a sophisticated hybrid filtering system to analyze your unique taste and predict the movies you'll fall in love with next.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/"
                        className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 flex items-center gap-2"
                    >
                        <Clapperboard className="w-4 h-4" />
                        Explore Movies
                    </Link>
                    <a
                        href="https://github.com/AryanDhamale/hybrid_movie_recommendation_system"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-full bg-card border border-border hover:bg-muted/50 transition-colors font-medium flex items-center gap-2"
                    >
                        <Github className="w-4 h-4" />
                        View Source
                    </a>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<Zap className="w-6 h-6 text-yellow-500" />}
                        title="Hybrid Filtering Engine"
                        description="Combines collaborative filtering (user behavior) and content-based filtering (movie metadata) for unparalleled accuracy."
                    />
                    <FeatureCard
                        icon={<Database className="w-6 h-6 text-blue-500" />}
                        title="Comprehensive Database"
                        description="Access detailed information on thousands of titles, including cast, directors, genres, and production details."
                    />
                    <FeatureCard
                        icon={<Monitor className="w-6 h-6 text-purple-500" />}
                        title="Modern User Interface"
                        description="Built with a focus on aesthetics and usability, featuring a responsive design that looks great on any device."
                    />
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-20 px-6 lg:px-8 border-t border-border/40 bg-card/30">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Built With Modern Technologies</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <TechItem name="Next.js 15" role="Frontend Framework" />
                        <TechItem name="Tailwind CSS" role="Styling System" />
                        <TechItem name="FastAPI" role="Backend API" />
                        <TechItem name="Scikit-learn" role="Machine Learning" />
                    </div>
                </div>
            </section>

            {/* Footer / Credits */}
            <footer className="py-12 text-center text-sm text-muted-foreground border-t border-border/40">
                <p>© {new Date().getFullYear()} Movie Recommendation System. Crafted with passion.</p>
            </footer>
        </main>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div
            className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group"
        >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">
                {description}
            </p>
        </div>
    );
}

function TechItem({ name, role }) {
    return (
        <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-secondary/50 transition-colors cursor-default">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Code className="w-6 h-6" />
            </div>
            <span className="font-semibold text-foreground">{name}</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">{role}</span>
        </div>
    );
}
