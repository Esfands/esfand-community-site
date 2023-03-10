import {
  CheckCircleIcon,
  InformationCircleIcon,
  LockClosedIcon,
  UserCircleIcon,
  ServerStackIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

interface Props {
  server: Server;
}

interface Server {
  name: string;
  info: string;
  status: boolean;
  players: string;
  address: string;
  aaa: string;
  art: string;
}

function getStatus(serverStatus: boolean) {
  if (serverStatus) {
    return (
      <p className="mt-2 flex items-center text-sm text-gray-400">
        <CheckCircleIcon
          className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
          aria-hidden="true"
        />
        Online
      </p>
    );
  }

  return (
    <p className="mt-2 flex items-center text-sm text-gray-400">
      <XCircleIcon
        className="mr-1.5 h-5 w-5 flex-shrink-0 text-red-600"
        aria-hidden="true"
      />
      Offline
    </p>
  );
}

function getAAA(serverAAA: string) {
  if (serverAAA != "") {
    return (
      <p className="mt-2 flex items-center text-sm text-gray-400">
        <LockClosedIcon
          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-300"
          aria-hidden="true"
        />
        {serverAAA}
      </p>
    );
  }
}

export const GameServerPanel = ({ server }: Props) => {
  return (
    <li key={server.name}>
      <div className="block">
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center">
            <div className="flex-shrink-0">
              <img className="h-48 w-36" src={server.art} alt="" />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="text-sm font-medium text-white">
                  {server.name}
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-400">
                  <InformationCircleIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-300"
                    aria-hidden="true"
                  />
                  <span>{server.info}</span>
                </p>
              </div>
              <div className="md:block">
                <div>
                  {getStatus(server.status)}
                  <p className="mt-2 flex items-center text-sm text-gray-400">
                    <ServerStackIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-300"
                      aria-hidden="true"
                    />
                    {server.address}
                  </p>
                  {getAAA(server.aaa)}
                  <p className="mt-2 flex items-center text-sm text-gray-400">
                    <UserCircleIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-300"
                      aria-hidden="true"
                    />
                    Players {server.players}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
