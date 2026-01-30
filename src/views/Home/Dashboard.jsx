import React from "react";
import ExampleTableView from "../exampleTable";
import { tableData } from "../../utils/tableConfig";
import logo from 'assets/images/logo.JPG'
import {
  LayoutDashboard,
  Users,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../layouts/mainLayout/header";

const Dashboard = () => {

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
              Welcome back! Here's an overview of your system.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              //icon={<Users size={24} />}
              label="Total Counts"
              value={totalUsers}
              color="blue"
            />
            <StatCard
             // icon={<User size={24} />}
              label="Admins"
              value={adminCount}
              color="green"
            />
            <StatCard
              //icon={<TrendingUp size={24} />}
              label="Users"
              value={userCount}
              color="purple"
            />
            <StatCard
              //icon={<Activity size={24} />}
              label="Editors"
              value={editorCount}
              color="orange"
            />
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
              <h2 className="font-semibold text-gray-700">
                Users List
              </h2>
            </div>

            <div className="p-0">
              <ExampleTableView />
            </div>
          </div>
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
    blue: "bg-blue-500/10 text-blue-600",
    green: "bg-green-500/10 text-green-600",
    purple: "bg-purple-500/10 text-purple-600",
    orange: "bg-orange-500/10 text-orange-600",
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${colors[color]}`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
