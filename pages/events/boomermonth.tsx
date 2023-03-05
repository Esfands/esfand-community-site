import { useEffect, useState } from "react";
import Head from "../../components/head";
import { VodDropdown } from "../../components/voddropdown";

type GameDetail = {
    id: string,
    name: string,
    boxArt: string,
    igdbId: string
}

type Game = {
    id: number;
    vods: string[];
    played: boolean;
    data?: GameDetail;
}

type GameDetailResponse = {
    data: GameDetail[];
}

type BoomerMonthProps = {
    possibleGames: Game[];
    playedGames: Game[];
}

const games: Game[] = [
    {
        id: 980679052,
        vods: ['1719978446', '1721257663'],
        played: true
    },
    {
        id: 18893,
        vods: [
            'https://www.youtube.com/watch?v=FFvQK8NExBU',
            'https://www.youtube.com/watch?v=p66VFvV1fjQ',
            'https://www.youtube.com/watch?v=jxU30NtYH7o',
            'https://www.youtube.com/watch?v=VK7Bhl2gg6o',
            'https://www.youtube.com/watch?v=4se4D3lFdRE'
        ],
        played: true
    },
    {
        id: 8570120,
        vods: [
            'https://www.youtube.com/watch?v=_2OTyWcAZU4',
            'https://www.youtube.com/watch?v=CZWnsw781YE',
            'https://www.youtube.com/watch?v=-zhLs-c9NY0',
            'https://www.youtube.com/watch?v=UZoRvzzqNMo',
            'https://www.youtube.com/watch?v=nUB_Qvvw8cY'
        ],
        played: true
    },
    {
        id: 16119,
        vods: [],
        played: false
    },
    {
        id: 22890,
        vods: [],
        played: false
    },
    {
        id: 19423,
        vods: [
            'https://www.youtube.com/watch?v=om63tPpmzvg',
            'https://www.youtube.com/watch?v=bZLSUPbzm1A'
        ],
        played: true
    },
    {
        id: 2897,
        vods: ['1753654055?t=01h55m38s'],
        played: true
    },
    {
        id: 6737,
        vods: [],
        played: false
    },
    {
        id: 1293419931,
        vods: [],
        played: false
    },
    {
        id: 2009742488,
        vods: [],
        played: false
    },
    {
        id: 417969,
        vods: [],
        played: false
    },
    {
        id: 13420,
        vods: [],
        played: false
    },
    {
        id: 10033,
        vods: [],
        played: false
    },
    {
        id: 10322,
        vods: [],
        played: false
    },
    {
        id: 15820,
        vods: [],
        played: false
    }


]


export default function BoomerMonth({ playedGames, possibleGames }: BoomerMonthProps) {
    console.log(possibleGames);
    const [games, setGames] = useState<any[]>([]);
    const [playedGamesList, setPlayedGamesList] = useState<any[]>([]);
    const [possibleGamesList, setPossibleGamesList] = useState<any[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    useEffect(() => {
        const setupGameList = async () => {
            try {
                if (!isLoaded) {
                    console.log(possibleGames);
                    setPossibleGamesList(possibleGames);
                    setPlayedGamesList(playedGames);
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
                {Head("Boomer Month 2023")}
                <main className="-mt-24">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="px-4 py-8 sm:px-0">
                            <div className="overflow-hidden bg-[#1b2126] shadow rounded-lg pb-5">
                                <div className="flex justify-center text-white pt-4 text-2xl font-bold leading-10 tracking-tight pb-3">Boomer Month 2023</div>
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div className="w-full border-t border-gray-500" />
                                    </div>
                                </div>
                                <div className="flex justify-center text-gray-200 text-xl py-10 font-bold">
                                    <h1>Games Esfand Started/Played</h1>
                                </div>
                                <div>
                                    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-3 lg:grid-cols-6 xl:gap-x-2 place-items-center">
                                        {playedGamesList.map((game) => (
                                            <li key={game.id} className="relative">
                                                <div className="aspect-h-7 block overflow-hidden rounded-lg">
                                                    <img src={game.data.box_art_url.replace('{width}', 144).replace('{height}', 190)} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                                                </div>
                                                <p className="pointer-events-none w-36 mt-2 block truncate text-sm font-medium text-white">{game.data.name}</p>
                                                <VodDropdown buttonText="Vods" vods={game.vods} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex justify-center text-gray-200 text-xl py-2 pt-14 font-bold">
                                    <h1>Games Esfand Might Play</h1>
                                </div>
                                <div>
                                    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-3 lg:grid-cols-6 xl:gap-x-2 place-items-center">
                                        {possibleGamesList.map((game) => (
                                            <li key={game.id} className="relative">
                                                <div className="aspect-h-7 block overflow-hidden rounded-lg">
                                                    <img src={game.data.box_art_url.replace('{width}', 144).replace('{height}', 190)} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                                                </div>
                                                <p className="pointer-events-none w-36 mt-2 block truncate text-sm font-medium text-white">{game.data.name}</p>
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
    const allGames: Map<number, Game> = new Map();

    games.forEach(game => {
        allGames.set(game.id, game);
    });

    const getGamesUrl = `https://twitch.otkdata.com/api/games?id=${games.map(game => game.id).join(',')}`;
    const gamesResponse = await fetch(getGamesUrl, { method: "GET", mode: "cors" });
    const gamesData: GameDetailResponse = await gamesResponse.json();

    gamesData.data.forEach(game => {
        const gameItem = allGames.get(+game.id);
        if (gameItem != undefined) {
            gameItem.data = game;
        }
    });

    return {
        props: {
            possibleGames: Array.from(allGames).map(([, game]) => (game)).filter(x => !x.played),
            playedGames: Array.from(allGames).map(([, game]) => (game)).filter(x => x.played),
        },
        revalidate: 86400
    };
}
