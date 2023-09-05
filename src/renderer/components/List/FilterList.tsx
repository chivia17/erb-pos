import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function FilterList() {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input type="search" id="default-search" className="block w-1/3 p-4 pl-10 text-sm border rounded-lg" placeholder="Search" required />
      </div>
    </div>
  );
}
