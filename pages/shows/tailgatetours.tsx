import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Head from "../../components/head";
import { getThumbnail } from "../../utils";

const seasons = [
  {
    season: 1,
    episodes: [
      {
        title: "S1:E0 UCLA ft. WillNeff",
        url: "https://www.youtube.com/watch?v=aA2pC6cGftg",
      },
      {
        title: "S1:E1 Texas ft. Danny Brown",
        url: "https://www.youtube.com/watch?v=jW8FqCxCyjI",
      },
      {
        title: "S1:E2 Iowa State ft. erobb221",
        url: "https://www.youtube.com/watch?v=1wfsDC9Sxe0",
      },
      {
        title: "S1:E3 Oklahoma ft. Russel",
        url: "https://www.youtube.com/watch?v=wpG2bO5QRqs",
      },
      {
        title: "S1:E4 SMU ft. Jaycgee",
        url: "https://www.youtube.com/watch?v=rwznn7FyCrg&list=PLUwsvlrbXgCm2oAxFVNaGGxCp1yXwgOZA&index=1",
      },
      {
        title: "S1:E5 University of Oklahoma",
        url: "https://www.youtube.com/watch?v=ESSFurpLLYk&list=PLUwsvlrbXgCm2oAxFVNaGGxCp1yXwgOZA&index=2s",
      },
      {
        title: "S1:E6 F1 US Grand Prix ft. Alinity",
        url: "https://www.youtube.com/watch?v=_pIOsgIb6Tk&list=PLUwsvlrbXgCm2oAxFVNaGGxCp1yXwgOZA&index=3"
      },
      {
        title: "S1:E7 Texas A&M",
        url: "https://www.youtube.com/watch?v=gYOxwQnTAKY&list=PLUwsvlrbXgCm2oAxFVNaGGxCp1yXwgOZA&index=4"
      },
      {
        title: "S1:E8 Alabama ft. Jinnytty",
        url: "https://www.youtube.com/watch?v=Z1AtTbj5ArE&list=PLUwsvlrbXgCm2oAxFVNaGGxCp1yXwgOZA&index=5"
      },
      {
        title: "S1:E9 Auburn vs Alabama Iron Bowl ft. Maya",
        url: "https://www.youtube.com/watch?v=2lmkL6Bppvg&list=PLUwsvlrbXgCm2oAxFVNaGGxCp1yXwgOZA&index=6s"
      }
    ],
  },
  {
    season: 2,
    episodes: [
      {
        title: "S2:E1 Texas ft. Tectone",
        url: "https://www.youtube.com/watch?v=MWzQB5rumOI",
      },
      {
        title: "S2:E2 University of Minnesota ft. BonnieRabbit",
        url: "https://www.youtube.com/watch?v=iRszBU5KXcQ",
      },
      {
        title: "S2:E3 Texas A&M ft. erobb221",
        url: "https://www.youtube.com/watch?v=M8PLr9Xer9I",
      },
      {
        title: "S2:E4 Georgia ft. Graycen",
        url: "https://www.youtube.com/watch?v=uTlb27YXItc",
      },
      {
        title: "S2:E6 Texas ft. BonnieRabbit",
        url: "https://www.youtube.com/watch?v=BMeAeo-Up48",
      },
    ],
  },
];

export default function TailgateTours() {
  return (
    <>
      {Head("Tailgate Tours")}

      <div>
        <main className="-mt-24 pb-8">
          <div className="mx-auto">
            <div className="bg-[#101316]">
              <div className="relative isolate overflow-hidden">
                <div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40 lg:px-8">
                  <div className="px-6 lg:px-0 lg:pt-4">
                    <div className="mx-auto max-w-2xl">
                      <div className="max-w-lg">
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                          Tailgate Tours
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-400">
                        Tailgating is an important part of college life and it&apos;s an opportunity for students and fans to come together, celebrate and show their support for their favorite teams. Esfand&apos;s Tailgate Tours captures the excitement and energy of these events, bringing the viewer right into the action. 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sm:mt-10 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                    <video src="https://img.otkdata.com/esfandtv/esfans/Tailgate_Tour_Intro.mp4" typeof="video/mp4" muted autoPlay className="w-full h-96 left-0 top-0 overflow-hidden rounded-lg" />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 sm:h-32" />
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-500" />
            </div>
          </div>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <dl className="space-y-6 divide-y divide-gray-300/10">
                {seasons.map((season) => (
                  <Disclosure as="div" key={season.season} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left">
                            <span className="text-lg text-white font-semibold leading-7">
                              Season {season.season}
                            </span>
                            <span className="ml-6 flex h-7 items-center text-white">
                              {open ? (
                                <MinusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 px-2">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {season.episodes.map((episode, episodeIndex) => (
                              <div key={episodeIndex}>
                                <a
                                  rel="noreferrer"
                                  target="_blank"
                                  href={episode.url}
                                >
                                  <div className="">
                                    <img
                                      className="-m-[10% 0] w-[100%] rounded-lg"
                                      alt="thumbnail"
                                      src={getThumbnail(episode.url)}
                                    />
                                  </div>
                                </a>
                                <p className="text-base leading-7 text-gray-300 font-bold">
                                  {episode.title}
                                </p>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
