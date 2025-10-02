import React from 'react';
import SidebarItem from './SidebarItem';
import { useAuth } from '../../context/authContext';

const Sidebar = () => {
  const { user } = useAuth();
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", roles: ["superAdmin", "admin", "manager"] },
    { name: "Users", path: "/users", roles: ["superAdmin", "admin"] },
    { name: "Settings", path: "/settings", roles: ["superAdmin"] },
    { name: "Profile", path: "/profile", roles: ["superAdmin", "admin", "manager"] },
  ];
  const filteredMenu = user
    ? menuItems.filter((item) => item.roles.includes(user.role))
    : [];

    return (
    <aside className="w-64 h-full bg-white shadow-md flex flex-col">
      <div className="p-4 text-xl font-bold border-b">Smart Menu System</div>
      <nav className="flex-1 p-4">
        {filteredMenu.map((item, idx) => (
          <SidebarItem key={idx} label={item.name} path={item.path} />
        ))}
      </nav>
      <div className="p-4 border-t">
        <SidebarItem label="Settings" path="/settings" />
      </div>
    </aside>
    );
};
export default Sidebar;