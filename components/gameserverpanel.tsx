import { CheckCircleIcon, InformationCircleIcon, LockClosedIcon, UserCircleIcon, ServerStackIcon, XCircleIcon } from '@heroicons/react/24/outline'

const servers = [
    {
        
        name: "Minecraft Server 1 Placeholder",
        info: "Java Edition - Vanilla No Mods",
        status: "Online",
        players: "0/20",
        serverIp: "mc.esfans.net:25566",
        aaa: "",
        art: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-144x192.jpg"
    },
    {
        
        name: "Minecraft Server 2 Placeholder",
        info: "Java Edition - Valhesia Mod",
        status: "Offline",
        players: "0/20",
        serverIp: "Pending",
        aaa: "",
        art: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-144x192.jpg"
    },
    {
        
        name: "Terraria Server 1 Placeholder",
        info: "Vanilla - No Mods",
        status: "Online",
        players: "0/20",
        serverIp: "tr.esfans.net",
        aaa: "esfand",
        art: "https://static-cdn.jtvnw.net/ttv-boxart/31376_IGDB-144x192.jpg"
    },
    {
        
        name: "Valheim Server 1 Placeholder",
        info: "Vanilla - No Mods",
        status: "Offline",
        players: "0/20",
        serverIp: "Pending",
        aaa: "",
        art: "https://static-cdn.jtvnw.net/ttv-boxart/508455_IGDB-144x192.jpg"
    },
  ]

  function getStatus(serverStatus: string) {
    if (serverStatus == "Online") {
        return (
            <p className="mt-2 flex items-center text-sm text-gray-500">
                <CheckCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400" aria-hidden="true" />
                {serverStatus}
            </p>
        );
    }

    return (
        <p className="mt-2 flex items-center text-sm text-gray-500">
            <XCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-red-600" aria-hidden="true" />
            {serverStatus}
        </p>
    );
    
  }

  function getAAA(serverAAA: string) {
    if (serverAAA != "") {
        return (
            <p className="mt-2 flex items-center text-sm text-gray-500">
                <LockClosedIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                {serverAAA}
            </p>
        );
    }
  }

export const GameServerPanel = () => {
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {servers.map((server) => (
          <li key={server.name}>
            <div className="block">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="flex min-w-0 flex-1 items-center">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-36" src={server.art} alt="" />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="truncate text-sm font-medium text-indigo-600">{server.name}</p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <InformationCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <span className="truncate">{server.info}</span>
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        {getStatus(server.status)}
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                            <ServerStackIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            {server.serverIp}
                        </p>
                        {getAAA(server.aaa)}
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                            <UserCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            Players {server.players}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    );
}