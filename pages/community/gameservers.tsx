import { GameServerPanel } from "../../components/gameserverpanel";

interface Server {
  name: string;
  info: string;
  status: boolean;
  players: string;
  address: string;
  aaa: string;
  art: string;
}

const servers: Server[] = [
  {
    name: "Minecraft Server 1 Placeholder",
    info: "Java Edition - Vanilla No Mods",
    status: true,
    players: "0/20",
    address: "mc.esfans.net:25566",
    aaa: "",
    art: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-144x192.jpg",
  },
  {
    name: "Minecraft Server 2 Placeholder",
    info: "Java Edition - Valhesia Mod",
    status: false,
    players: "0/20",
    address: "Pending",
    aaa: "",
    art: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-144x192.jpg",
  },
  {
    name: "Terraria Server 1 Placeholder",
    info: "Vanilla - No Mods",
    status: true,
    players: "0/20",
    address: "tr.esfans.net",
    aaa: "esfand",
    art: "https://static-cdn.jtvnw.net/ttv-boxart/31376_IGDB-144x192.jpg",
  },
  {
    name: "Valheim Server 1 Placeholder",
    info: "Vanilla - No Mods",
    status: false,
    players: "0/20",
    address: "Pending",
    aaa: "",
    art: "https://static-cdn.jtvnw.net/ttv-boxart/508455_IGDB-144x192.jpg",
  },
];

export default function Gameservers() {
  return (
    <main className="-mt-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="overflow-hidden bg-white shadow rounded-lg">
            <ul role="list" className="divide-y divide-gray-200">
              {servers.map((server) => (
                <GameServerPanel server={server} key={server.name} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
