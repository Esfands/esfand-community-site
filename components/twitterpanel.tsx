import { useEffect, useState } from "react";
import { Fragment } from 'react'
import { ChatBubbleLeftEllipsisIcon, TagIcon, UserCircleIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export const TwitterPanel = () => {
    const [tweets, setTweets] = useState<any>({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setError] = useState(false);
    const errorMessage = 'There was an error loading the latest tweet. Please try again later.';

    function urlify(text: string) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(
            urlRegex,
            (url) =>
                '<a style="color:#970e0f" target="_blank" href="' +
                url +
                '" rel="noopener noreferrer">' +
                url +
                '</a>'
        );
        return text.replace(
            urlRegex,
            (url) =>
                '<a style="color:#970e0f" target="_blank" href="' +
                url +
                '" rel="noopener noreferrer">' +
                url +
                '</a>'
        );
    }

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchTwitter = async () => {
            try {
                const response = await fetch('https://cdn.otkdata.com/api/posts/esfandtv', {
                    method: 'GET',
                    mode: 'cors',
                    signal: signal,
                });

                if (!isLoaded) {
                    const jsonResponse = await response.json();
                    setTweets(jsonResponse.data.slice(0, 2));
                }
                setIsLoaded(true);
            } catch {
                setError(true);
            }
        };

        fetchTwitter();

        return () => {
            abortController.abort();
            setTweets({});
            setIsLoaded(false);
            setError(false);
        };
    }, []);

    if (isLoaded) {


        return (
            <div className="rounded-lg bg-white shadow h-96">
                <div className="p-4">
                    <div className="flow-root  content-between">
                        <div className="mx-auto max-w-7xl flex flex-row md:items-center pb-5">
                            <div className="relative">
                                <a href='https://twitter.com/esfandtv' className="text-blue-500 hover:text-blue-400 relative">
                                    <span className="sr-only">Recent Tweets</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>

                                </a>

                            </div>
                            <div className="relative">
                                <div className="mt-8 md:mt-0 relative">
                                    <p className="text-center text-sm leading-5 font-medium text-black">
                                        Recent Tweets
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ul role="list" className="-mb-8">
                            {tweets.map((tweet) => (
                                <li key={tweet.id}>
                                    <div className="relative pb-4 pt-2">
                                        <div className="relative flex items-start space-x-3">
                                            <>
                                                <div className="relative">
                                                    <img
                                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                                                        src="esfand_avatar.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <div>
                                                        <div className="text-sm">
                                                            <a href="" className="font-medium text-gray-900">
                                                                @EsfandTV
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 text-sm text-gray-700">
                                                        <p>{tweet.text}</p>
                                                    </div>
                                                </div>
                                            </>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center -py-2" aria-hidden="true">
                                            <div className="w-full border-t border-gray-300" />
                                        </div>
                                    </div> 
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}