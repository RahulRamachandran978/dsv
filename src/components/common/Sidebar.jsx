import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Speaker, Headphones, Headset } from "lucide-react";
import { routes } from '../../utils/routes';
import logo from 'assets/images/logo.JPG'


const SidebarItem = ({ icon, label, to }) => {
    const location = useLocation(); 
    const active = location.pathname === to;
   return (
    <Link
      to={to}
      className={`flex items-center gap-3 p-3 rounded-lg transition ${
        active
          ? "bg-blue-600 text-white shadow-md"
          : "hover:bg-slate-700 text-slate-300"
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <>
        {/* SIDEBAR */}
      <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white hidden md:flex flex-col shadow-xl">
        <div className="h-16 flex items-center justify-center border-b border-slate-700">
            <img
                src={logo}
                alt="Logo"
                className="h-10 w-10 object-contain"
            />
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem  to={routes.dashBoard} icon={<LayoutDashboard size={20} />} label="Dashboard"  />
          <SidebarItem  to={routes.speakers} icon={<Speaker size={20} />} label="Speaker"  />
          <SidebarItem  to={routes.headphones} icon={<Headphones size={20} />} label="Headphones"  />
          <SidebarItem  to={routes.earbuds} icon={<Headset  size={20} />} label="Earbuds"  />
        </nav>

        <div className="p-4 text-xs text-slate-400 border-t border-slate-700">
          © Dashboard
        </div>
      </aside>
    </>
  )
}

export default Sidebar
