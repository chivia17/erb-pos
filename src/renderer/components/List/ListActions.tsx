import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function ListActions() {
  return (
    <div className='flex justify-center items-center gap-4'>
      <button className="bg-sky-700 hover:bg-sky-900 text-white flex rounded-lg p-2 align-middle items-center gap-2" type="button">
        <PencilIcon className="w-4 h-4"></PencilIcon> Edit
      </button>
      <button className='bg-gray-200 hover:bg-gray-400 rounded py-2 px-1'>
        <TrashIcon className="w-5 h-5"></TrashIcon>
      </button>
    </div>
  );
}
