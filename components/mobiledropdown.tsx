import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { classNames } from "../utils";

type MobileDropdownProps = {
  title: string;
  tabIsActive: boolean;
  pathname: string;
  setTabActive: Dispatch<SetStateAction<boolean>>;
  childRoutes: MobileDropDownRouteProps[];
};

type MobileDropDownRouteProps = {
  title: string;
  path: string;
};

const MobileDropdown = ({
  title,
  pathname,
  tabIsActive,
  setTabActive,
  childRoutes,
}: MobileDropdownProps) => {
  let routes: string[] = [];
  childRoutes.forEach((route) => {
    routes.push(route.path);
  });

  return (
    /* Open the disclosure if a child route is selected */
    <Disclosure defaultOpen={routes.includes(pathname)}>
      {({ open }) => (
        <>
          <Disclosure.Button
            /* If one of the child routes is selected, make the parent highlighted */
            className={classNames(
              routes.includes(pathname)
                ? "bg-gray-700 text-white"
                : "text-white hover:bg-gray-500 hover:bg-opacity-75",
              "block rounded-md py-2 px-3 text-base font-medium w-full"
            )}
            onClick={() => {
              setTabActive(!tabIsActive);
            }}
          >
            <span>
              <div className="flex space-x-2 items-center">
                {open ? (
                  <ChevronDownIcon className="h-4 w-4 " aria-hidden="true" />
                ) : (
                  <ChevronRightIcon className="h-4 w-4 " aria-hidden="true" />
                )}
                <p>{title}</p>
              </div>
            </span>
          </Disclosure.Button>
          <Disclosure.Panel>
            <div className="flex flex-wrap space-y-2">
              {childRoutes.map((route, rIndex) => (
                <Disclosure.Button key={rIndex} className="w-full text-start">
                  <Link
                    href={route.path}
                    className={classNames(
                      pathname == route.path
                        ? "bg-gray-700 text-white"
                        : "text-white hover:bg-gray-500 hover:bg-opacity-75",
                      `block rounded-md py-2 px-3 text-base font-medium ml-8`
                    )}
                  >
                    {route.title}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MobileDropdown;
