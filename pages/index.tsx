import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Esfand Community Site</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="-mt-24 pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Page title</h1>
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="section-1-title">
                  <h2 className="sr-only" id="section-1-title">
                    Section title
                  </h2>
                  <div className="overflow-auto rounded-lg bg-white shadow">
                    <div>
                      <iframe
                        className=" h-full aspect-video"
                        src="https://embed.twitch.tv/?channel=esfandtv&allowfullscreen=true&parent=www.esfans.net&layout=video&height=100%25&width=100%25"
                        allowFullScreen={true}
                        height={'100%'}
                        width={'100%'}
                        muted>
                      </iframe>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-1 gap-4">
                <section aria-labelledby="section-2-title">
                  <h2 className="sr-only" id="section-2-title">
                    Schedule
                  </h2>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6">
                    <ul role="list" className="divide-y divide-gray-200">
                        <li className="flex py-4">
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">Stream Name 1</p>
                            <p className="text-sm text-gray-500">Game Name</p>
                          </div>
                        </li>
                        <li className="flex py-4">
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">Stream Name 2</p>
                            <p className="text-sm text-gray-500">Game Name</p>
                          </div>
                        </li>
                        <li className="flex py-4">
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">Stream Name 3</p>
                            <p className="text-sm text-gray-500">Game Name</p>
                          </div>
                        </li>
                    </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
    </>
  )
}
