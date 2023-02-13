import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon, BellAlertIcon, CloudArrowDownIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import Head from "../../components/head";

const faqs = [
  {
      question: "Question 1 Placeholder",
      answer: "Answer 1 Placeholder",
  },
  {
    question: "Question 2 Placeholder",
    answer: "Answer 2 Placeholder",
  },
  
]

export default function DiscordUnban() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('yo');
    const data = {
      discordTag: event.target.discordTag.value,
      banRange: event.target.banRange.value,
      reason: event.target.reason.value,
    }

    const jsonData = JSON.stringify(data);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    }

    const response = await fetch(`${process.env.URL}api/unban`, options);
    const result = await response.json();
  }

  return (
    <>
      {Head("Discord Unban Request")}

      <main className="-mt-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="overflow-hidden bg-[#1b2126] shadow rounded-lg">
              <div className="flex justify-center text-white pt-4 text-2xl font-bold leading-10 tracking-tight">Discord Unban Request</div>
              <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200">
                  <div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 justify-items-center">
                      <div className="sm:col-span-6">
                        <label htmlFor="discordTag" className="block text-sm font-medium text-white">
                          Discord Tag
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                            Discord Tag
                          </span>
                          <input
                            type="text"
                            name="discordTag"
                            id="discordTag"
                            required
                            className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-6">
                        <label htmlFor="banRange" className="block text-sm font-medium text-white">
                          When were you banned?
                        </label>
                        <div className="mt-1">
                          <select
                            id="banRange"
                            name="banRange"
                            className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                          >
                            <option>Less than 1 month ago</option>
                            <option>Less than 6 months ago</option>
                            <option>Less than 1 year ago</option>
                            <option>More than 1 year ago</option>
                          </select>
                        </div>
                      </div>
                      <div className="sm:col-span-6">
                        <label htmlFor="reason" className="block text-sm font-medium text-white">
                          Reason you should be unbanned
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="reason"
                            name="reason"
                            rows={3}
                            className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                            defaultValue={''}
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Write a few sentences about why you should be unbanned.</p>
                      </div>
                      <div className="sm:col-span-6 pb-5">
                        <button type="submit" className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2">
                          Request Unban
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-500" />
                        </div>
                    </div>
                    <div className="text-white pb-7">
                        <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
                            <div className="mx-auto max-w-7xl divide-y divide-gray-300/10">
                                <h2 className="text-2xl font-bold leading-10 tracking-tight flex justify-center">Frequently asked questions</h2>
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
