import Tagline from './tagline/tagline';
import Cards from './cards/cards';

function WatchAllComponent() {

  return (
    <div className="w-full py-8">
      <section>

        {/* heading section  */}
        <Tagline tagline="Watch All" message="Explore our entire collection of movies" />

        {/* cards section  */}
        <div className="flex gap-6 pb-8 px-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
          <Cards path={`movies?count=${10}&random=${true}`} />
        </div>

      </section>
    </div>
  );
};

export default WatchAllComponent;