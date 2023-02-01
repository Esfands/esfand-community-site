import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon, BellAlertIcon, CloudArrowDownIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "Can I contribute to the extension?",
        answer: "The extension is open source! You are free to contribute changes in the Esfands github team repo.",
    },
    {
        question: "How do I disable notifications?",
        answer: "You can click the settings button in the extension and choose which notifications you would like to recieve."
    },
    {
        question: "Does it collect any user data?",
        answer: "The extension collects no user data. I unfortunately have a degree of moral integrity and turn down the offers to sell user data that come into my email."
    },
    {
        question: "Is it a crypto miner?",
        answer: "The extension is not a crypto miner. It is completely open source so you can check for yourself. I lose money hosting the extension services."
    },
    {
        question: "My question isn't here. Where can I ask something more specific?",
        answer: "You can reach out to me via email by contacting me at guac@guacsenpai.com"
    }
]
const features = [
    {
      name: 'Keep up to date',
      description:
        'The extension will provide information on when Esfand goes live, uploads a new video, sends a new tweet, and show the latest schedule.',
      href: '#',
      icon: BellAlertIcon,
    },
    {
      name: 'Download Now',
      description:
        'The extension is available for any chromium based browser and firefox. Just click the links below to get started.',
      href: '#',
      icon: CloudArrowDownIcon,
    },
    {
      name: 'Open Source',
      description:
        'The extension is open source! We created it with transparency so users can see what the extension does behind the scenes.',
      href: '#',
      icon: CodeBracketIcon,
    },
  ]

export default function Extension() {
    return (
        <div>
            <main className="-mt-24 pb-8">
                <h1 className="text-white font-bold text-2xl text-center pb-6">
                    Esfand Updates Extension
                </h1>
                <div className="bg-white py-24 sm:py-32 mx-auto">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Keep up with everything Esfand does
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                The browser extension makes things simple. Just install and get notifications for the topics that interest you.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                                {features.map((feature) => (
                                    <div key={feature.name} className="flex flex-col">
                                        <dt className="text-base font-semibold leading-7 text-gray-900">
                                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </div>
                                            {feature.name}
                                        </dt>
                                        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                            <p className="flex-auto">{feature.description}</p>
                                            <p className="mt-6">
                                                <a href={feature.href} className="text-base font-semibold leading-7 text-indigo-600">
                                                    Learn more <span aria-hidden="true">→</span>
                                                </a>
                                            </p>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="text-white">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
                        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                            <h2 className="text-2xl font-bold leading-10 tracking-tight">Frequently asked questions</h2>
                            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                                {faqs.map((faq) => (
                                    <Disclosure as="div" key={faq.question} className="pt-6">
                                        {({ open }) => (
                                            <>
                                                <dt>
                                                    <Disclosure.Button className="flex w-full items-start justify-between text-left">
                                                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                        <span className="ml-6 flex h-7 items-center">
                                                            {open ? (
                                                                <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                            ) : (
                                                                <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </dt>
                                                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                    <p className="text-base leading-7">{faq.answer}</p>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
