import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon, BellAlertIcon, CloudArrowDownIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import Head from '../components/head';

const faqs = [
    {
        question: "Can I contribute to the extension?",
        answer: "The extension is open source! You are free to contribute changes in the Esfands github team repo.",
    },
    {
        question: "How do I disable notifications?",
        answer: "You can click the settings button in the extension and choose which notifications you would like to receive."
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
        name: 'Available for most browsers',
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
            <Head title='Extension'/>
            <main className="-mt-24 pb-8">
                <h1 className="text-white font-bold text-2xl text-center pb-6">
                    Esfand Updates Extension
                </h1>
                <div className="py-24 sm:py-32 mx-auto divide-y divide-gray-300/10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Keep up with everything Esfand does
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-400">
                                The browser extension makes things simple. Just install and get notifications for the topics that interest you.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                                {features.map((feature) => (
                                    <div key={feature.name} className="flex flex-col">
                                        <dt className="text-base font-semibold leading-7 text-gray-700">
                                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1b2126]">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </div>
                                            <div className="text-white">{feature.name}</div>
                                        </dt>
                                        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400">
                                            <p className="flex-auto">{feature.description}</p>
                                            {feature.name === 'Available for most browsers' ? 
                                                <div className="grid grid-cols-2 pt-2 -space-x-24 justify-center">
                                                    <a href="https://l.mahcks.com/HhWcReXfh" target="_blank" rel="noreferrer">
                                                        <svg fill="white" viewBox="0 0 512 512" className="h-12 text-white hover:fill-current hover:text-gray-300">
                                                            <path 
                                                                fillRule="evenodd"
                                                                d="M0 256C0 209.4 12.47 165.6 34.27 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.19 98.47C101 38.53 174 0 256 0C350.8 0 433.5 51.48 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </a>
                                                    <a href="https://l.mahcks.com/__GANt6p9" target="_blank" rel="noreferrer">
                                                        <svg fill="white" viewBox="0 0 512 512" className="h-12 text-white hover:fill-current hover:text-gray-300">
                                                            <path 
                                                                fillRule="evenodd"
                                                                d="M130.22 127.548C130.38 127.558 130.3 127.558 130.22 127.548V127.548ZM481.64 172.898C471.03 147.398 449.56 119.898 432.7 111.168C446.42 138.058 454.37 165.048 457.4 185.168C457.405 185.306 457.422 185.443 457.45 185.578C429.87 116.828 383.098 89.1089 344.9 28.7479C329.908 5.05792 333.976 3.51792 331.82 4.08792L331.7 4.15792C284.99 30.1109 256.365 82.5289 249.12 126.898C232.503 127.771 216.219 131.895 201.19 139.035C199.838 139.649 198.736 140.706 198.066 142.031C197.396 143.356 197.199 144.87 197.506 146.323C197.7 147.162 198.068 147.951 198.586 148.639C199.103 149.327 199.76 149.899 200.512 150.318C201.264 150.737 202.096 150.993 202.954 151.071C203.811 151.148 204.676 151.045 205.491 150.768L206.011 150.558C221.511 143.255 238.408 139.393 255.541 139.238C318.369 138.669 352.698 183.262 363.161 201.528C350.161 192.378 326.811 183.338 304.341 187.248C392.081 231.108 368.541 381.784 246.951 376.448C187.487 373.838 149.881 325.467 146.421 285.648C146.421 285.648 157.671 243.698 227.041 243.698C234.541 243.698 255.971 222.778 256.371 216.698C256.281 214.698 213.836 197.822 197.281 181.518C188.434 172.805 184.229 168.611 180.511 165.458C178.499 163.75 176.392 162.158 174.201 160.688C168.638 141.231 168.399 120.638 173.51 101.058C148.45 112.468 128.96 130.508 114.8 146.428H114.68C105.01 134.178 105.68 93.7779 106.25 85.3479C106.13 84.8179 99.022 89.0159 98.1 89.6579C89.5342 95.7103 81.5528 102.55 74.26 110.088C57.969 126.688 30.128 160.242 18.76 211.318C14.224 231.701 12 255.739 12 263.618C12 398.318 121.21 507.508 255.92 507.508C376.56 507.508 478.939 420.281 496.35 304.888C507.922 228.192 481.64 173.82 481.64 172.898Z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                            : null}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-500" />
                    </div>
                </div>
                <div className="text-white">
                    <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
                        <div className="mx-auto max-w-7xl divide-y divide-gray-300/10">
                            <h2 className="text-2xl font-bold leading-10 tracking-tight">Frequently asked questions</h2>
                            <dl className="mt-10 space-y-6 divide-y divide-gray-300/10">
                                {faqs.map((faq) => (
                                    <Disclosure as="div" key={faq.question} className="pt-6">
                                        {({ open }) => (
                                            <>
                                                <dt>
                                                    <Disclosure.Button className="flex w-full items-start justify-between text-left">
                                                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                        <span className="ml-6 flex h-7 items-center">
                                                            {open ? (
                                                                <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                            ) : (
                                                                <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </dt>
                                                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                    <p className="text-base leading-7 text-gray-400">{faq.answer}</p>
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
