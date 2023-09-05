import { PlusIcon } from '@heroicons/react/24/outline';

export default function AddNewItemButton({addItem, type}) {
  return (
    <button onClick={addItem} className='bg-sky-700 hover:bg-sky-900 text-white text-base flex rounded-lg px-3 py-2 align-middle items-center gap-2'>
      <PlusIcon className="w-4 h-4 text-white" />
      New {type}
    </button>
  );
}
