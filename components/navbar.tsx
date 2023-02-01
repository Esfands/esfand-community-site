import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import Dropdown from "./dropdown";
import { useState } from "react";
import MobileDropdown from "./mobiledropdown";
import { classNames } from "../utils";

export const Navbar = () => {
  const router = useRouter();

  // Bools to keep track if the cheveron logo should be facing down or right...
  // I'd like to make a simplier approach in the future.
  const [communityTabActive, setCommunityTabActive] = useState<boolean>(false);
  const [showsTabActive, setShowsTabActive] = useState<boolean>(false);

  return (
    <div className="bg-gray-800 pb-32">
      <Disclosure
        as="nav"
        className="border-b border-opacity-25 bg-gray-800 lg:border-none"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
              <div className="relative flex h-16 items-center justify-between lg:border-lg:border-b lg:bg-gray-800 lg:border-opacity-25">
                <div className="flex items-center px-2 lg:px-0">
                  <div className="flex-shrink-0">
                    <p className="text-white font-extrabold">ESF</p>
                  </div>
                  <div className="hidden lg:ml-10 lg:block">
                    <div className="flex space-x-4">
                      <Link
                        href="/"
                        className={classNames(
                          router.pathname == "/"
                            ? "bg-gray-700 text-white"
                            : "text-white hover:bg-gray-500 hover:bg-opacity-75",
                          "rounded-md py-2 px-3 text-sm font-medium"
                        )}
                      >
                        Home
                      </Link>

                      <Dropdown
                        title="Community"
                        entries={[
                          {
                            entry: "Recap",
                            path: "/community/recap",
                          },
                          {
                            entry: "Game Servers",
                            path: "/community/gameservers",
                          },
                          {
                            entry: "Discord Unbans",
                            path: "/community/discordunban",
                          },
                        ]}
                        pathname={router.pathname}
                      />

                      <Dropdown
                        title="Shows"
                        entries={[
                          {
                            entry: "Loot Goblins",
                            path: "/shows/lootgoblins",
                          },
                          {
                            entry: "Tailgate Tours",
                            path: "/shows/tailgatetours",
                          },
                        ]}
                        pathname={router.pathname}
                      />
                      <Link
                        href="/extension"
                        className={classNames(
                          router.pathname == "/extension"
                            ? "bg-gray-700 text-white"
                            : "text-white hover:bg-gray-500 hover:bg-opacity-75",
                          "rounded-md py-2 px-3 text-sm font-medium"
                        )}
                      >
                        Extension
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="ui-open inline-flex items-center justify-center rounded-md bg-gray-600 p-2 text-gray-200 hover:bg-gray-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                <Disclosure.Button as="a">
                  <Link
                    href="/"
                    className={classNames(
                      router.pathname == "/"
                        ? "bg-gray-700 text-white"
                        : "text-white hover:bg-gray-500 hover:bg-opacity-75",
                      "block rounded-md py-2 px-3 text-base font-medium"
                    )}
                  >
                    Home
                  </Link>
                </Disclosure.Button>

                <MobileDropdown
                  title="Community"
                  childRoutes={[
                    {
                      title: "Recap",
                      path: "/community/recap",
                    },
                    {
                      title: "Game Servers",
                      path: "/community/gameservers",
                    },
                    {
                      title: "Discord Unban",
                      path: "/community/discordunban",
                    },
                  ]}
                  pathname={router.pathname}
                  setTabActive={setCommunityTabActive}
                  tabIsActive={communityTabActive}
                />

                <MobileDropdown
                  title="Shows"
                  childRoutes={[
                    {
                      title: "Loot Goblins",
                      path: "/shows/lootgoblins",
                    },
                    {
                      title: "Tailgate Tours",
                      path: "/shows/tailgatetours",
                    },
                  ]}
                  pathname={router.pathname}
                  setTabActive={setShowsTabActive}
                  tabIsActive={showsTabActive}
                />
                <Disclosure.Button as="a">
                  <Link
                    href="/extension"
                    className={classNames(
                      router.pathname == "/extension"
                        ? "bg-gray-700 text-white"
                        : "text-white hover:bg-gray-500 hover:bg-opacity-75",
                      "block rounded-md py-2 px-3 text-base font-medium"
                    )}
                  >
                    Extension
                  </Link>
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
