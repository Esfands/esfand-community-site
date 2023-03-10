import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

type DropdownProps = {
    buttonText: string;
    vods: string[];
}

export const VodDropdown = ({ buttonText, vods }: DropdownProps) => {

    function getPartUrl(url: string) {
        if (url.includes('https'))
            return url;
        else
            return `https://www.twitch.tv/videos/${url}`
    }

    return (
        <Menu as="div" className="relative text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100">
                    {buttonText}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {vods.map((vod, i) => (
                            <Menu.Item key={vod}>
                                <a href={getPartUrl(vod)} target="_blank" rel="noreferrer" className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-50'>
                                    Part #{i+1}
                                </a>
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}