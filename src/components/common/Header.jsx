import React from "react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    }
  return (
    <header className="h-16 bg-white/70 backdrop-blur-lg border-b flex items-center justify-between px-8 sticky top-0 z-10">
      
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
          A
        </div>
        <span className="text-sm font-medium text-gray-700">Admin</span>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-sm font-medium text-blue-950 hover:text-red-500 transition cursor-pointer"
      >
        <LogOut size={20} />
        Logout
      </button>
    </header>
  );
};

export default Header;
