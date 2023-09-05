import { ArrowDownTrayIcon, ArrowUpTrayIcon, PrinterIcon } from '@heroicons/react/24/outline';
import AddNewItemButton from './AddNewItemButton';

export default function BulkActions(props) {
  const { addItem, print, download, upload, type } = props;

  return (
    <div className='flex flex-row-reverse w-1/4 gap-5'>
      <AddNewItemButton addItem={addItem} type={type} />
      <button onClick={download} className='border border-slate-300 rounded-lg px-2.5 hover:bg-slate-200'>
        <ArrowDownTrayIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </button>
      <button onClick={print} className='border border-slate-300 rounded-lg px-2.5 hover:bg-slate-200'>
        <PrinterIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </button>
      <button onClick={upload} className='border border-slate-300 rounded-lg px-2.5 hover:bg-slate-200'>
        <ArrowUpTrayIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </button>
    </div>
  );
}
