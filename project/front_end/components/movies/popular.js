import Tagline from './tagline/tagline';
import Cards from './cards/cards';

function Popular() {

    const api_endpoint = process.env.NODE_ENV == "development" ? "http://127.0.0.1:8000" : process.env.NEXT_PUBLIC_API_ENDPOINT;
    return (
        <div className="w-full py-8">
            <section>

                {/* heading section  */}
                <Tagline tagline="Popular" message="Trending movies everyone is watching" />

                {/* cards section  */}
                <div className="flex gap-6 pb-8 px-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
                    <Cards path={`${api_endpoint}/movies?count=${10}&random=${false}`} />
                </div>

            </section>
        </div>
    );
};

export default Popular;