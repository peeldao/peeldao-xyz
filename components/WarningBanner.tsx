import { ExclamationIcon } from "@heroicons/react/solid";

export function WarningBanner() {
  return (
    <div className="rounded-md bg-yellow-50 p-4 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            This website is experimental.
          </h3>
          <div className="mt-2 font-normal text-sm text-yellow-700">
            <p>Don't spend funds you aren't prepared to lose.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
