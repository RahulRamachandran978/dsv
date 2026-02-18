import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#3B82F6", "#8B5CF6", "#F97316"];

const UserRoleChart = ({ adminCount, userCount, editorCount }) => {
  const data = [
    { name: "Admins", value: adminCount },
    { name: "Users", value: userCount },
    { name: "Editors", value: editorCount },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full">
      <h3 className="text-lg text-center font-semibold mb-4 text-gray-800">
        User Role Distribution
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserRoleChart;
