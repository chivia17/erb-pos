import classNames from 'classnames';
import CollapseButton from './CollapseButton';
import LogoutButton from './LogoutButton';
import SidebarItems from './SidebarItems';

// add NavItem prop to component prop
type Props = {
  collapsed: boolean;
  setCollapsed(collapsed: boolean): void;
  shown: boolean;
};

const Sidebar = ({ collapsed, shown, setCollapsed }: Props) => {

  return (
    <div className={classNames({
      'h-screen bg-warmGray-50 text-black fixed md:static md:translate-x-0 z-20': true,
      'transition-all duration-300 ease-in-out': true,
      'w-[300px]': !collapsed,
      'w-16': collapsed,
      '-translate-x-full': !shown,
      })}>
      <div className='flex flex-col justify-between h-screen md:h-full sticky inset-0'>
        <CollapseButton collapsed={collapsed} setCollapsed={setCollapsed} />
        <SidebarItems collapsed={collapsed}></SidebarItems>
        <LogoutButton collapsed={collapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
