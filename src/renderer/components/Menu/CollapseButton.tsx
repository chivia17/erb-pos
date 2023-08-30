import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

export default function CollapseButton({collapsed, setCollapsed}) {
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;

  return(
    <div className={classNames({
      'flex items-center border-b border-gray-200 transition-none': true,
      'p-4 justify-between': !collapsed,
      'py-4 justify-center': collapsed,
      })}>
      {!collapsed && <span className="whitespace-nowrap">My logo</span>}
      <button className="grid place-content-center border border-gray-200 hover:border-0 hover:bg-sky-700 w-10 h-10 rounded-full opacity-0 md:opacity-100"
        onClick={() => setCollapsed(!collapsed)}>
        <Icon className="w-5 h-5" />
      </button>
    </div>
  );
}
