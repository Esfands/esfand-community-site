import { useEffect, useState } from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { ScheduleEvent } from "./scheduleevent";

interface Schedule {
    data: Segment[]
}

interface Segment {
    id: string,
    start_time: string,
    end_time: string,
    title: string,
    canceled_until: string | null,
    category: Category,
    
}

interface Category {
    id: string,
    name: string
}

export const ScheduleBox = ({ schedule } : Schedule) => {

    const [segments, setSegments] = useState<any[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setError] = useState(false);
    const errorMessage = 'There was an error loading the schedule segments. Please try again later.';

    useEffect(() => {
        const fetchScheduleSegments = async () => {
            try {
                if (!isLoaded) {
                    setSegments(schedule.data.segments.slice(0, 3));
                }
                setIsLoaded(true);
            } catch {
                setError(true);
            }
        };

        fetchScheduleSegments();

        return () => {
            setIsLoaded(false);
            setError(false);
        };
    }, []);

    if (!isLoaded && !isError) {
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
                        <ScheduleEvent segment={segment} key={segmentIndex} />
                    ))}
                </ul>
            </div>
                </div >
            </div >
        );
    } else if (isError) {
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
                <p>{errorMessage}</p>
            </div>
                </div >
            </div >
        );
    } else {
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
                        <ScheduleEvent segment={segment} key={segmentIndex} />
                    ))}
                </ul>
            </div>
                </div >
            </div >
        );
    }
    
}