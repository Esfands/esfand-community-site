import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Head from "../../components/head";
import { getThumbnail } from "../../utils";

const seasons = [
  {
    season: 1,
    episodes: [
      {
        title: "S1:E1 ft. Mizkif, Emiru, Tectone & Tipsout",
        url: "https://www.youtube.com/watch?v=l-VPI42NC6M&list=PLUwsvlrbXgCnMN7fUSZ1hQSenZkvQ0Z6w&index=1",
      },
      {
        title: "S1:E2 ft. Cyr, Pokelawls, SpaceBoy & Nmplol",
        url: "https://www.youtube.com/watch?v=ZeFHjzMvObY&list=PLUwsvlrbXgCnMN7fUSZ1hQSenZkvQ0Z6w&index=2",
      },
      {
        title: "S1:E3 ft. Emiru, Schlatt, Maya & ConnorEatsPants",
        url: "https://www.youtube.com/watch?v=5wOzaSvEtVQ&list=PLUwsvlrbXgCnMN7fUSZ1hQSenZkvQ0Z6w&index=1",
      },
      {
        title: "S1:E4 ft. SpaceBoy, Saab, Penta & Kyle",
        url: "https://www.youtube.com/watch?v=9DxAwJTx8Rw&list=PLUwsvlrbXgCnMN7fUSZ1hQSenZkvQ0Z6w&index=2",
      },
      {
        title: "S1:E5 ft. Nmplol, Alinity, MitchJones & Malena",
        url: "https://www.youtube.com/watch?v=hGjGSqfoG9Y&list=PLUwsvlrbXgCnMN7fUSZ1hQSenZkvQ0Z6w&index=3",
      },
      {
        title: "S1:E6 ft. Tectone, RichWCampbell, Cyr & Graycen",
        url: "https://www.youtube.com/watch?v=dIdunDeUBNs&list=PLUwsvlrbXgCnMN7fUSZ1hQSenZkvQ0Z6w&index=4",
      },
      {
        title: "S1:E7 ft. JSchlatt, BBNO$, JustAMinx & Erobb221",
        url: "https://www.youtube.com/watch?v=MbA1Joaz1Go&list=PLUwsvlrbXgCnMN7fUSZ1hQSenZkvQ0Z6w&index=5",
      },
      {
        title: "S1:E8 Asmongold, Jessica Nigri, Bruce, Nmplol",
        url: "https://www.youtube.com/watch?v=u9_0tG-G1-4&list=PLUwsvlrbXgCnMN7fUSZ1hQSenZkvQ0Z6w&index=6",
      },
    ],
  },
  {
    season: 2,
    episodes: [
      {
        title: "S2:E1 ft. Jschlatt, Emiru, Esfand",
        url: "https://www.youtube.com/watch?v=8SVHf8hn-n4&list=PL1Zyb1lxxOyGM8-jFxZqt3LCsjanJwVA7&index=5",
      },
      {
        title: "S2:E2 ft. Veibae, Sodapoppin, Russel",
        url: "https://www.youtube.com/watch?v=QWr0ld1ai7A&list=PL1Zyb1lxxOyGM8-jFxZqt3LCsjanJwVA7&index=6",
      },
      {
        title: "S2:E3 ft. Mia Malkova, Alinity, Rich Campbell",
        url: "https://www.youtube.com/watch?v=emNEFDFFXns&list=PL1Zyb1lxxOyGM8-jFxZqt3LCsjanJwVA7&index=7",
      },
      {
        title: "S2:E4 ft. Moistcr1tikal, Emiru, Zoil",
        url: "https://www.youtube.com/watch?v=JXHXqfS1Pn4&list=PL1Zyb1lxxOyGM8-jFxZqt3LCsjanJwVA7&index=8",
      },
      {
        title: "S2:E5 ft. Erobb, NYYXXII, Cyr",
        url: "https://www.youtube.com/watch?v=RTw50gre0DI&list=PL1Zyb1lxxOyGM8-jFxZqt3LCsjanJwVA7&index=9",
      },
      {
        title: "S2:E6 ft. Fandy, HAchubby, SypherPK",
        url: "https://www.youtube.com/watch?v=R3Q_iRbVUqg&list=PL1Zyb1lxxOyGM8-jFxZqt3LCsjanJwVA7&index=10",
      },
      {
        title: "S2:E7 ft. Sodapoppin, Timmac, Burn",
        url: "https://www.youtube.com/watch?v=wOw8leisl_8&list=PL1Zyb1lxxOyGM8-jFxZqt3LCsjanJwVA7&index=11",
      },
      {
        title: "S2:E8 ft. Asmongold, AustinShow, PeachJars",
        url: "https://www.youtube.com/watch?v=96OZGFamvRU&list=PL1Zyb1lxxOyGM8-jFxZqt3LCsjanJwVA7&index=12",
      },
    ],
  },
];

export default function LootGoblins() {
  return (
    <>
      {Head("Loot Goblins")}

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
                          Loot Goblins
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-400">
                          Watch as our contestants take turns opening chests of
                          loot and answering twitch trivia. Guess correctly and
                          the loot is yours! Guess incorrectly and the audience
                          can steal your loot away!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sm:mt-10 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                    <iframe
                      src="https://streamable.com/e/dht8i2?autoplay=1&nocontrols=1"
                      frameBorder="0"
                      width="100%"
                      height="100%"
                      allowFullScreen
                      allow="autoplay"
                      className="w-full h-96 left-0 top-0 overflow-hidden rounded-lg"
                    ></iframe>
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
