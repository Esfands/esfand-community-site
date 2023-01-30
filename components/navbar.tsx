import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router';
import Link from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {

    const router = useRouter();
    
    return (
      <div className="bg-gray-800 pb-32">
          <Disclosure as="nav" className="border-b border-opacity-25 bg-gray-800 lg:border-none">
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
                          <Link href="/" className={ classNames(router.pathname == "/" ? 'bg-gray-700 text-white' : 'text-white hover:bg-gray-500 hover:bg-opacity-75', 'rounded-md py-2 px-3 text-sm font-medium')}>Home</Link>
                          <Link href="/community/gameservers" className={ classNames(router.pathname == "/community/gameservers" ? 'bg-gray-700 text-white' : 'text-white hover:bg-gray-500 hover:bg-opacity-75', 'rounded-md py-2 px-3 text-sm font-medium')}>Community</Link>
                          <Link href="/shows" className={ classNames(router.pathname == "/shows" ? 'bg-gray-700 text-white' : 'text-white hover:bg-gray-500 hover:bg-opacity-75', 'rounded-md py-2 px-3 text-sm font-medium')}>Shows</Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-600 p-2 text-gray-200 hover:bg-gray-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600">
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
                      <Link href="/" className={ classNames(router.pathname == "/" ? 'bg-gray-700 text-white' : 'text-white hover:bg-gray-500 hover:bg-opacity-75', 'block rounded-md py-2 px-3 text-base font-medium')}>Home</Link>
                    </Disclosure.Button>
                    <Disclosure.Button as="a">
                      <Link href="/community/gameservers" className={ classNames(router.pathname == "/community/gameservers" ? 'bg-gray-700 text-white' : 'text-white hover:bg-gray-500 hover:bg-opacity-75', 'block rounded-md py-2 px-3 text-base font-medium')}>Community</Link>
                    </Disclosure.Button>
                    <Disclosure.Button as="a">
                      <Link href="/shows" className={ classNames(router.pathname == "/shows" ? 'bg-gray-700 text-white' : 'text-white hover:bg-gray-500 hover:bg-opacity-75', 'block rounded-md py-2 px-3 text-base font-medium')}>Shows</Link>
                    </Disclosure.Button>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
    );
}
