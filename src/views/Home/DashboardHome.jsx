import React, { useState , useRef} from "react";
import ExampleTableView from "../exampleTable";
import { tableData } from "../../utils/tableConfig";
import {
  LayoutDashboard,
  Users,
  LogOut,
  UserCheck,
  Edit,
  Users as UsersIcon,
  TrendingUp,
  DollarSign,
  X,
} from "lucide-react";  
import { useNavigate } from "react-router-dom";
import UserRoleChart from "./UserRoleChart";
import DashboardCalendar from "./DashboardCalendar";

const DashboardHome = () => {
  const [showUsers, setShowUsers] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const tableRef = useRef(null);
  
  const totalUsers = tableData.length;
  const adminCount = tableData.filter(user => user.role === "Admin").length;
  const userCount = tableData.filter(user => user.role === "User").length;
  const editorCount = tableData.filter(user => user.role === "Editor").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <main className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end gap-4">
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 bg-white border hover:cursor-pointer border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-gray-300 text-gray-900 font-semibold text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
            >
              <Users size={18} />
              View Users
            </button>
          </div>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard
            icon={<Users size={24} />}
            label="Total Users"
            value={totalUsers.toLocaleString()}
            change="+12.5%"
            color="blue"
            isPositive
          />
          <StatCard
            icon={<UserCheck size={24} />}
            label="Admins"
            value={adminCount.toLocaleString()}
            change="+2%"
            color="green"
            isPositive
          />
          <StatCard
            icon={<UsersIcon size={24} />}
            label="Regular Users"
            value={userCount.toLocaleString()}
            change="+8.3%"
            color="purple"
            isPositive
          />
          <StatCard
            icon={<Edit size={24} />}
            label="Editors"
            value={editorCount.toLocaleString()}
            change="-1.2%"
            color="orange"
            isPositive={false}
          />
        </div>

         {/* CHART + CALENDAR SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <UserRoleChart
              adminCount={adminCount}
              userCount={userCount}
              editorCount={editorCount}
            />

            <DashboardCalendar />
          </div>

          <UsersModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
      </main>
    </div>
  );
};

/* STAT CARD COMPONENT */
const StatCard = ({ icon, label, value, change, color, isPositive }) => {
  const colors = {
    blue: {
      bg: "from-blue-500 to-blue-600",
      light: "bg-blue-100",
      text: "text-blue-700",
      border: "border-blue-200",
    },
    green: {
      bg: "from-emerald-500 to-emerald-600",
      light: "bg-emerald-100",
      text: "text-emerald-700",
      border: "border-emerald-200",
    },
    purple: {
      bg: "from-purple-500 to-purple-600",
      light: "bg-purple-100",
      text: "text-purple-700",
      border: "border-purple-200",
    },
    orange: {
      bg: "from-orange-500 to-orange-600",
      light: "bg-orange-100",
      text: "text-orange-700",
      border: "border-orange-200",
    },
  };

 

  return (
    <div className="group relative bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden h-full">
      {/* Top Gradient Bar */}
      <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${colors[color].bg}`} />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <p className={`text-sm font-semibold ${colors[color].text} tracking-wide`}>
              {label}
            </p>
            <p className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
              {value}
            </p>
          </div>
          
          {/* Icon */}
          <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${colors[color].light} ${colors[color].text} shadow-lg group-hover:scale-110 transition-transform duration-300 ml-4 flex-shrink-0`}>
            {React.cloneElement(icon, { size: 28 })}
          </div>
        </div>
        
        {/* Change Indicator */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className={`text-sm font-medium flex items-center gap-1 ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
            <TrendingUp size={16} className={`transform ${isPositive ? 'rotate-0' : 'rotate-180'}`} />
            <span>{change}</span>
          </div>
          <span className="text-xs text-gray-500 font-medium">Since yesterday</span>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
    </div>
  );
};

const UsersModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-[95%] max-w-6xl max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Users List
            </h2>
            <p className="text-sm text-gray-500">
              View all user accounts
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500
             text-lg hover:cursor-pointer  font-semibold"
          >
           <X size={25} />
          </button>
        </div>

        {/* Table Section */}
          <div className="max-h-[60vh] overflow-y-auto pr-2">
            <ExampleTableView />
          </div>
        </div>
    </div>
  );
};


export default DashboardHome;
