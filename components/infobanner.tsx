import { MegaphoneIcon} from '@heroicons/react/24/outline'

export const InfoBanner = () => {
    return (
        <div className="bg-red-600">
      <div className="mx-auto max-w-7xl py-1 px-2 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-red-800 p-2">
              <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:hidden">Website currently under construction.</span>
              <span className="hidden md:inline">Website currently under construction. Please forgive the mess.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}