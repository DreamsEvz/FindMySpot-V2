import { PlusIcon } from '@heroicons/react/solid'

export default function CircularButton() {
  return (
    <>
      <button
        type="button"
        className="rounded-full bg-blue-800 p-1 text-white shadow-sm hover:bg-indigo-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon className="h-7 w-7" aria-hidden="true" />
      </button>
    </>
    )
}