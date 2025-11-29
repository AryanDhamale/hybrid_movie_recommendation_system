import NavBar from '../components/header-and-footer/nav-bar';
import Footer from '@/components/header-and-footer/footer';
import HeroSection from '../components/hero/hero-section';
import WatchAll from '@/components/movies/watch-all';
import Popular from '@/components/movies/popular';
import LatestTrailers from '@/components/movies-trailers/movie-trailers';

export default function Home() {
  return (
    <div className='bg-gray-50'>
      <NavBar />
      <main className='flex flex-col gap-10'>
        <HeroSection />
        <Popular />
        <WatchAll />
        <LatestTrailers />
      </main>
      <Footer />
    </div>
  );
}