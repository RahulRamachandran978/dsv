import React from "react";
import { LogOut, ChevronDown, Bell, Search, Menu, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";



const Header = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate("/");
  };
  const handleCart = ()=>{
    navigate("/dashboard/cart");
  }
  const { cart } = useCart();

const cartCount = cart.reduce(
  (total, item) => total + item.qty,
  0
);


  return (
    <header className="h-16 bg-white/90 backdrop-blur-xl border-b border-gray-200/60 shadow-sm sticky top-0 z-50">
      <div className="h-full px-4 sm:px-6 flex items-center justify-end">
        
        

        {/* Mobile Logo Placeholder - Just Space */}
        <div className="md:hidden w-12" />

        {/* Right Section: Mobile Menu, Search, Notifications, Profile, Logout */}
        <div className="flex items-center gap-2 sm:gap-3">
        
          {/* Quick Search - Collapsible on Mobile */}
          <div className="relative hidden lg:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Quick search..."
              className="w-64 pl-10 pr-4 py-2.5 bg-gray-100/80 backdrop-blur-sm border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/90 shadow-sm hover:shadow-md"
            />
          </div>

          {/* Mobile Search Button */}
          <button className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 hover:scale-105">
            <Search size={20} />
          </button>

          {/* Notifications */}
          {/* <button className="relative p-2.5 hover:cursor-pointer text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:scale-105 group">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 min-w-[18px] h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse shadow-lg">
              3
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -blur-[1px]" />
          </button> */}

          <button onClick={handleCart} className="relative p-2.5 hover:cursor-pointer text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:scale-105 group">
            <ShoppingCart size={18} />
            <span className="absolute -top-1 -right-1 min-w-[18px] h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse shadow-lg">
              {cartCount}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -blur-[1px]" />
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="group relative hover:cursor-pointer flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-50 to-red-100/80 border border-red-200/50 text-red-800 hover:bg-red-500/10 hover:text-red-600 hover:border-red-300/70 font-semibold text-sm rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden whitespace-nowrap"
          >
            <LogOut size={18} className="relative z-10 group-hover:-translate-x-0.5 transition-transform duration-200" />
            <span className="relative z-10 tracking-tight hidden sm:inline ">Logout</span>
            <span className="sm:hidden relative z-10">↗</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
