import React, { useState } from "react";
import ExampleTableView from "../exampleTable";
import { tableData } from "../../utils/tableConfig";
import logo from 'assets/images/logo.JPG'
import {
  LayoutDashboard,
  Users,
  LogOut,
  UserCheck,
  Edit,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../layouts/mainLayout/header";

const Dashboard = () => {

    const [showUsers,setShowUsers] = useState(false)

    const totalUsers = tableData.length;
    const adminCount = tableData.filter(user => user.role === "Admin").length;
    const userCount = tableData.filter(user => user.role === "User").length;
    const editorCount = tableData.filter(user => user.role === "Editor").length;
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    }
  return (
    <div className="flex h-screen bg-slate-100">
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
          <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
        </nav>

        <div className="p-4 text-xs text-slate-400 border-t border-slate-700">
          © Dashboard
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* HEADER */}
        <header className="h-16 bg-white/70 backdrop-blur-lg border-b flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="relative w-80">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="text-sm font-medium text-gray-700">Admin</span>
            </div>
          </div>

          <div className="flex items-center gap-5">

            
            <button onClick={handleLogout}
             className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-red-500 transition hover:cursor-pointer"><LogOut scale={22} />Logout</button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto p-8 space-y-8">

          {/* TITLE */}
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
            <p className="text-gray-500 mt-1">
              Welcome back! Here's an overview.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={<Users size={22} />}
              label="Total Counts"
              value={totalUsers}
              color="blue"
            />
            <StatCard
             icon={<UserCheck size={22} />}
              label="Admins"
              value={adminCount}
              color="green"
            />
            <StatCard
              icon={<Users size={22} />}
              label="Users"
              value={userCount}
              color="purple"
            />
            <StatCard
              icon={<Edit size={22} />}
              label="Editors"
              value={editorCount}
              color="orange"
            />
          </div>

          {/* VIEW USERS BUTTON */}
            <div className="flex justify-end">
            <button
                onClick={() => setShowUsers(!showUsers)}
                className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition cursor-pointer"
            >
                {showUsers ? "Hide User List" : "View User List"}
            </button>
            </div>

          {/* TABLE */}
          {/* TABLE */}
            {showUsers && (
            <div className="p-0">
                <ExampleTableView />
            </div>
            )}
        </main>
      </div>
    </div>
  );
};

/* ---------- COMPONENTS ---------- */

const SidebarItem = ({ icon, label, active }) => (
  <a
    href="#"
    className={`flex items-center gap-3 p-3 rounded-lg transition ${
      active
        ? "bg-blue-600 shadow-md"
        : "hover:bg-slate-700 text-slate-300"
    }`}
  >
    {icon}
    <span>{label}</span>
  </a>
);

const StatCard = ({ icon, label, value, color }) => {
  const colors = {
     blue: {
      bg: "from-blue-500 to-blue-600",
      light: "bg-blue-500/10",
      text: "text-blue-600",
    },
    green: {
      bg: "from-green-500 to-green-600",
      light: "bg-green-500/10",
      text: "text-green-600",
    },
    purple: {
      bg: "from-purple-500 to-purple-600",
      light: "bg-purple-500/10",
      text: "text-purple-600",
    },
    orange: {
      bg: "from-orange-500 to-orange-600",
      light: "bg-orange-500/10",
      text: "text-orange-600",
    },
  };
  

  return (
     <div
      className="relative overflow-hidden rounded-2xl bg-white p-6 border border-gray-200
                 shadow-sm hover:shadow-xl transition-all duration-300
                 hover:-translate-y-1 cursor-pointer"
    >
      {/* Gradient Accent Bar */}
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors[color].bg}`}
      />

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 tracking-wide">
            {label}
          </p>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            {value}
          </p>
        </div>

        {/* Icon Bubble */}
        <div
          className={`h-12 w-12 rounded-xl flex items-center justify-center
                      ${colors[color].light} ${colors[color].text}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
