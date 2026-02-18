import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DashboardCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full border border-gray-200">
    <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
        Calendar
    </h3>

    <div className="flex justify-center">
        <Calendar
        onChange={setDate}
        value={date}
        />
    </div>
    </div>
  );
};

export default DashboardCalendar;
