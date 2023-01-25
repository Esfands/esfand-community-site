import { useEffect, useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import DOMPurify from 'dompurify';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export const TwitterPanel = ({ tweets }) => {
    const [displayTweets, setTweets] = useState<any[]>([]);
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
    }

    useEffect(() => {


        const fetchTwitter = async () => {
            try {
                if (!isLoaded) {
                    setTweets(tweets.data.slice(0, 3));
                }
                setIsLoaded(true);
            } catch {
                setError(true);
            }
        };

        fetchTwitter();

        return () => {
            setIsLoaded(false);
            setError(false);
        };
    }, []);

    if (!isLoaded && !isError) {
        return (
            <div className="rounded-lg bg-[#1b2126] shadow">
                <div className="p-4">
                    <div className="flow-root">
                        <div role="status">
                            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else if (isError) {
        return (
            <div className="rounded-lg bg-[#1b2126] shadow">
                <div className="p-4">
                    <div className="flow-root">
                        <div className="text-white">
                            <span>There was an error loading the latest tweets. Please try again later.</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="rounded-lg bg-[#1b2126] shadow">
                <div className="p-4">
                    <div className="flow-root">
                        <div className="flex">
                            <a href='https://twitter.com/esfandtv' target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-400">
                                <span className="sr-only">Recent Tweets</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <p className="text-center text-sm pl-3 leading-5 font-medium text-white">
                                Recent Tweets
                            </p>
                        </div>
                        <ul role="list" className="-mb-8">
                            {displayTweets.map((tweet, tweetIndex) => (
                                <li key={tweet.id}>
                                    <div className="relative pb-4 pt-4">
                                        <div className="relative flex items-start space-x-3 space-y-3">
                                            <>
                                                <div className="relative">
                                                    <img
                                                        className="flex h-12 w-12 items-center justify-center rounded-full"
                                                        src="esfand_avatar.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <div>
                                                        <div className="text-sm">
                                                            <a href="https://twitter.com/esfandtv" target="_blank" rel="noreferrer" className="font-medium text-white">
                                                                @EsfandTV
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 text-sm text-white" dangerouslySetInnerHTML={{
                                                        __html: DOMPurify.sanitize(urlify(tweet.text)),
                                                    }}>
                                                    </div>
                                                    <div className="relative h-4 w-4 float-right text-white mb-3 hover:text-gray-300">
                                                        <a href={tweet.url} target="_blank" rel="noreferrer"><ArrowTopRightOnSquareIcon className="[&>path]:stroke-[2]" /></a>
                                                    </div>
                                                </div>
                                            </>
                                        </div>
                                    </div>
                                    {tweetIndex === 0 || tweetIndex === 1 ? (
                                        <div className="relative">
                                            <div className="absolute inset-0 flex items-center -py-3" aria-hidden="true">
                                                <div className="w-full border-t border-gray-300" />
                                            </div>
                                        </div>
                                    ) : null}
                                     
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}