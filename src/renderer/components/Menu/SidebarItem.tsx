import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default function SidebarItem({collapsed, index, icon, label, route}) {
  return (
    <li key={index} className={classNames({
      'text-black hover:bg-sky-700 flex': true, //colors
      'transition-colors duration-300': true, //animation
      'rounded-md p-2 mx-3 gap-4 ': !collapsed,
      'rounded-full p-2 mx-3 w-10 h-10': collapsed,
      })}>
        <Link to={route} className='flex gap-2'>
          {icon} <span>{!collapsed && label}</span>
        </Link>
    </li>
  )
}
