import { useEffect, useState } from "react";
import Head from "../../components/head";

const playedGames = [
    {
        id: 980679052,
        vods: [1719978446, 1721257663]
    }
]

const possibleGames = [
   18893, 15866, 19423, 2897, 16376, 3412, 10322, 517769, 4523, 17464, 15820, 519558, 19156, 10033, 13420,
   6086, 1705, 1568081763, 15631, 9664
]

export default function BoomerMonth(props) {
    const [games, setGames] = useState<any[]>([]);
    const [playedGames, setPlayedGames] = useState<any[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    useEffect(() => {
        const setupGameList = async () => {
            try {
                if (!isLoaded) {
                    setGames(props.possibleGames.data);
                }
                setIsLoaded(true);
            } catch {
                setError(true);
            }
        };

        setupGameList();

        return () => {
            setIsLoaded(false);
            setError(false);
        };
    }, []);


    if (isLoaded) {
        return (
            <>
                {Head("Boomer Month")}
                <main className="-mt-24">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="px-4 py-8 sm:px-0">
                            <div className="overflow-hidden bg-[#1b2126] shadow rounded-lg pb-5">
                                <div className="flex justify-center text-white text-2xl py-2 font-bold">
                                    <h1>Games Esfand Might Play</h1>
                                </div>
                                <div>
                                    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 place-items-center">
                                        {games.map((game) => (
                                            <li key={game.id} className="relative">
                                            <div className="aspect-h-7 block overflow-hidden rounded-lg">
                                                <img src={game.box_art_url.replace('{width}', 144).replace('{height}', 192)} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                                            </div>
                                            <p className="pointer-events-none w-36 mt-2 block truncate text-sm font-medium text-white">{game.name}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }
    
}

export async function getStaticProps() {
    const getPossibleGamesUrl = `https://twitch.otkdata.com/api/games?id=${possibleGames.join(',')}`;
    const gameResponse = await fetch(getPossibleGamesUrl, { method: "GET", mode: "cors" });
    const possibleGamesData = await gameResponse.json();
    return {
      props: {
        possibleGames: possibleGamesData
      },
      revalidate: 86400
    };
  }
