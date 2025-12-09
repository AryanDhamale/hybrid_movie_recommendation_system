import Tagline from './tagline/tagline';
import Cards from './cards/cards';

function Popular() {

    return (
        <section id='popular'>
            <div className="w-full py-8">

                {/* heading section  */}
                <Tagline tagline="Popular" message="Trending movies everyone is watching" />

                {/* cards section  */}
                <div className="flex gap-6 pb-8 px-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
                    <Cards path={`movies?count=${10}&random=${false}`} />
                </div>

            </div>

        </section>
    );
};

export default Popular;