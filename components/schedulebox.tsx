import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export const ScheduleBox = ({ schedule }) => {

    const segments: any[] = schedule.data.segments.slice(0, 4);
    return (
        <div className="grid grid-cols-1 gap-4 lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-[#1b2126] shadow h-full border border-[#101316]">
                <div className="p-6">
                    <div className="flex">
                        <div className="relative h-5 w-5 text-white mb-3 hover:text-gray-300">
                            <a href="https://twitch.tv/esfandtv/schedule" target="_blank" rel="noreferrer"><CalendarDaysIcon className="[&>path]:stroke-[2]" /></a>
                    </div>
                    <p className="text-center text-sm pl-3 leading-5 font-medium text-white">
                        Upcoming Events
                    </p>
                
            </div>
            <ul role="list" className="divide-y divide-gray-200">
                {segments.map((segment, segmentIndex) => (
                    <li className="flex py-4" key={segmentIndex}>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-white">{segment.title}</p>
                            <p className="text-sm font-medium text-white">{segment.category.name}</p>
                            <p className="text-sm text-gray-500">{new Date(segment.start_time).toLocaleString('en-US')}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
            </div >
        </div >
    );
}