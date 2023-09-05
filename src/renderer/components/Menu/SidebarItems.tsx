import {
  ArchiveBoxIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  HomeIcon,
  Squares2X2Icon,
  TruckIcon,
  UsersIcon
} from '@heroicons/react/24/outline';
import SidebarItem from './SidebarItem';

export default function SidebarItems({collapsed}) {
  const sidebarItems = [
    {
      label: "Home",
      href: "/home",
      icon: <HomeIcon className="w-6 h-6" />,
    },
    {
      label: "Products",
      href: "/product",
      icon: <ArchiveBoxIcon className="w-6 h-6" />,
    },
    {
      label: "Categories",
      href: "/category",
      icon: <Squares2X2Icon className="w-6 h-6" />,
    },
    {
      label: "Users",
      href: "/user",
      icon: <UsersIcon className="w-6 h-6" />,
    },
    {
      label: "Suppliers",
      href: "/provider",
      icon: <TruckIcon className="w-6 h-6" />,
    },
    {
      label: "Sales",
      href: "/sale",
      icon: <CurrencyDollarIcon className="w-6 h-6" />,
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <ChartBarIcon className="w-6 h-6" />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <Cog6ToothIcon className="w-6 h-6" />,
    }
  ];

  return (
    <nav className="flex-grow">
      <ul className='my-2 flex flex-col gap-2 items-stretch'>
        {sidebarItems.map((item, index) => {
          return (
            <SidebarItem key={index} collapsed={collapsed}
              index={index}
              icon={item.icon}
              label={item.label}
              route={item.href} />
          );
        })}
      </ul>
    </nav>
  )
}
