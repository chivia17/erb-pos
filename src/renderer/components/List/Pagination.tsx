import { ArrowSmallLeftIcon, ArrowSmallRightIcon } from '@heroicons/react/24/outline';

export default function Pagination() {
  const itemsPerPage = [10,20,30,40];
  return (
    <div className="w-full grid grid-cols-2 items-center">
      <div className="flex gap-2 items-center">
        Results per page:
        <select className='border border-slate-300 rounded-lg py-1 px-2'>
          {itemsPerPage.map(quantity => {
            return (
              <option key={quantity} value={quantity}>{quantity}</option>
            );
          })}
        </select>
      </div>
      <div className="flex gap-3 items-center justify-end">
        <button className='flex gap-2 items-center border border-slate-300 rounded-lg py-1 px-2 hover:bg-slate-200'>
          <ArrowSmallLeftIcon className="w-4 h-4" /> Previous
        </button>
        <div className='flex gap-2 items-center'>
          <button className='border border-slate-300 rounded-lg py-1 px-2 hover:bg-slate-200'>
            1
          </button>
          <button className='border border-slate-300 rounded-lg py-1 px-2 hover:bg-slate-200'>
            2
          </button>
          <button className='border border-slate-300 rounded-lg py-1 px-2 hover:bg-slate-200'>
            3
          </button>
        </div>
        <button className='flex gap-2 items-center border border-slate-300 rounded-lg py-1 px-2 hover:bg-slate-200'>
          Previous
          <ArrowSmallRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
