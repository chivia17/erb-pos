import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from 'renderer/components/Menu/Sidebar';

export default function Layout() {
  const [collapsed, setSidebarCollapsed] = useState(true);
  const [showSidebar] = useState(false);

  return (
    <div className="bg-gray-200 w-screen h-screen flex">
      <Sidebar collapsed={collapsed}
        setCollapsed={setSidebarCollapsed}
        shown={showSidebar}/>
      <Outlet />
    </div>
  )
}
