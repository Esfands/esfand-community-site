import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type DropdownProps = {
  title: string;
  pathname: string;
  entries: DropdownEntryProps[];
};

type DropdownEntryProps = {
  entry: string;
  path: string;
};

const Dropdown = ({ title, pathname, entries }: DropdownProps) => {
  // Checks if a child route of the dropdown is chosen, it'll highlight the parent as if it's chosen
  let childIsActive = false;
  for (let i = 0; i < entries.length; i++) {
    const element = entries[i];
    if (element.path === pathname) {
      childIsActive = true;
      break;
    }
  }

  return (
    <div
      className={`dropdown inline-block relative rounded-lg ${
        childIsActive === true ? "bg-gray-700" : ""
      }`}
    >
      <button className="hover:bg-gray-500 text-white text-sm py-2 px-4 rounded inline-flex items-center">
        <span className="mr-2">{title}</span>
        <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
      </button>
      <ul className="dropdown-menu absolute hidden w-36 text-gray-700 pt-1">
        {entries.map((entry, entryIndex) => (
          <li key={entryIndex}>
            <Link
              href={entry.path}
              className={`${
                entry.path === pathname ? "bg-gray-700" : "bg-[#1b2126]"
              } ${entryIndex === 0 ? "rounded-t" : ""} ${
                entryIndex + 1 === entries.length ? "rounded-b" : ""
              } hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm text-white`}
            >
              {entry.entry}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
