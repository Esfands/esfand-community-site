import Head from 'next/head'
import { SocialCloud } from '../components/socialcloud'
import { TwitchPanel } from '../components/twitchpanel'
import { TwitterPanel } from '../components/twitterpanel'
import { YoutubePanel } from '../components/youtubepanel'

export default function Home(props) {
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
            <h1 className="sr-only">Esfand Home Page</h1>
            {/* Main 12 column grid */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8">
              {/* Twitch Embed */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-8">
                  <TwitchPanel />
              </div>

              {/* Schedule Column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-4">
                <div className="overflow-hidden rounded-lg bg-[#1b2126] shadow h-full border border-[]">
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
              </div>
              {/* 2nd row youtube & twitter */}
                <div className="grid grid-cols-1 gap-0 lg:row-start-2 lg:col-span-5">
                  <TwitterPanel tweets={props.tweets} />
                </div>
                <div className="grid grid-cols-1 gap-0 lg:row-start-2 lg:col-span-7">
                  <YoutubePanel video={props.video} />
                </div>
              {/* 3rd row social cloud */}
              <div className="grid grid-cols-1 lg:row-start-3 lg:col-span-12 gap-0 p-0">
                <SocialCloud/>
              </div>
            </div>
          </div>
        </main>
    </>
  )
}

export async function getStaticProps() {

  // get tweets
  const tweetResponse = await fetch('https://cdn.otkdata.com/api/posts/esfandtv', { method: 'GET', mode: 'cors'});
  const tweets = await tweetResponse.json();
  // get latest youtube video
  const youtubeResponse = await fetch('https://cdn.otkdata.com/api/videos/esfandtv?count=1', { method: 'GET', mode: 'cors'});
  const video = await youtubeResponse.json();
  // get schedule
  const scheduleResponse = await fetch('https://twitch.otkdata.com/api/streamers/esfandtv/schedule', { method: 'GET', mode: 'cors'});
  const schedule = await scheduleResponse.json();

  return {
    props: {
      tweets,
      video,
      schedule,
    },
  }

}
