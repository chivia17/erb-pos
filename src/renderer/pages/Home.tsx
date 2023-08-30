import { useState } from 'react';
import Sidebar from 'renderer/components/Menu/Sidebar';

export default function Home () {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  return(
    <div className="bg-gray-200 w-screen h-screen flex">
      <Sidebar collapsed={collapsed}
        setCollapsed={setSidebarCollapsed}
        shown={showSidebar}/>
      <div className='w-full'>
          Hello wordl!....................
      </div>
    </div>
  );
}
