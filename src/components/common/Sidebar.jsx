import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Speaker, 
  Headphones, 
  Headset, 
  X,
  Menu 
} from "lucide-react";
import { routes } from '../../utils/routes';
import logo from 'assets/images/logo.JPG';
import { cn } from '../../utils/cn';

const SidebarItem = ({ icon, label, to, active }) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-4 p-4 rounded-xl font-medium text-sm transition-all duration-300 border-l-4 group hover:shadow-md",
        active
          ? "bg-blue-50/90 border-blue-500 text-blue-900 shadow-sm"
          : "text-gray-600 hover:bg-gray-50/70 hover:text-gray-900 hover:border-gray-200 border-transparent"
      )}
    >
      <div className={cn(
        "p-2.5 rounded-lg flex-shrink-0 transition-all duration-300",
        active 
          ? "bg-blue-100 text-blue-600 shadow-sm" 
          : "bg-gray-100 hover:bg-blue-50"
      )}>
        {React.cloneElement(icon, { 
          size: 20,
          className: cn(
            icon.props.className, 
            active ? "text-blue-600" : "text-gray-500"
          )
        })}
      </div>
      <span className="font-medium tracking-wide whitespace-nowrap">{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: routes.dashBoard, icon: LayoutDashboard, label: "Dashboard" },
    { to: routes.speakers, icon: Speaker, label: "Speakers" },
    { to: routes.headphones, icon: Headphones, label: "Headphones" },
    { to: routes.earbuds, icon: Headset, label: "Earbuds" },
  ];

  return (
    <>
      {/* Mobile Toggle Button - FIXED Z-INDEX */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-3 left-5 z-[1000] p-3 bg-white shadow-xl border border-gray-200 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
      >
        <Menu size={22} className="text-gray-800" />
      </button>

      {/* Mobile Overlay - FIXED Z-INDEX */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile Sidebar - FIXED POSITIONING */}
          <aside className="fixed inset-y-0 left-0 w-80 bg-white shadow-2xl border-r border-gray-200 transform transition-transform duration-300 ease-in-out z-[10000] md:hidden translate-x-0">
            
            {/* Mobile Header with Close */}
            <div className="p-6 border-b border-gray-100 bg-white sticky top-0 z-10 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center shadow-md">
                    <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 tracking-tight">Dashboard</h2>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Admin</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 p-6 space-y-2 overflow-y-auto max-h-[calc(100vh-140px)]">
              {navItems.map(({ to, icon: Icon, label }) => (
                <SidebarItem
                  key={to}
                  to={to}
                  icon={<Icon />}
                  label={label}
                  active={location.pathname === to}
                />
              ))}
            </nav>

            {/* Mobile Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 sticky bottom-0">
              <div className="text-center space-y-2">
                <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <p className="font-semibold text-gray-900">Admin User</p>
                  <p className="truncate">admin@company.com</p>
                </div>
              </div>
            </div>
          </aside>
        </>
      )}

      {/* Desktop Sidebar - UNCHANGED */}
      <aside className="w-72 bg-white border-r border-gray-200 shadow-lg hidden md:flex md:flex-col h-screen sticky top-0 z-40">
        <div className="h-16 border-b border-gray-100 px-6 flex items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center shadow-md">
              <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 tracking-tight">Dashboard</h2>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Admin Panel</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-1 overflow-y-auto">
          {navItems.map(({ to, icon: Icon, label }) => (
            <SidebarItem
              key={to}
              to={to}
              icon={<Icon />}
              label={label}
              active={location.pathname === to}
            />
          ))}
        </nav>

        <div className="p-3 border-t border-gray-100 bg-gray-50/50 shrink-0">
          <div className="text-center space-y-2">
            <div className="w-10 h-10 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-5 h-5 bg-white rounded-full shadow-md" />
            </div>
            <div className="text-xs text-gray-500 space-y-1">
              <p className="font-semibold text-gray-900">Admin User</p>
              <p className="truncate">admin@company.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
