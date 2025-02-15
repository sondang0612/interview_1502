import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const bds = [1, 2, 4, 11, 15, 16, 17];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6));

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatMonthYear = (date: Date) => {
    return date.toLocaleString("en-US", { month: "long", year: "numeric" });
  };

  const createDaysArray = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    const prevMonthDays = getDaysInMonth(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
      });
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const days = createDaysArray();

  return (
    <div
      className={`w-full p-4 bg-white rounded-3xl shadow border border-solid`}
    >
      <div className="flex items-center gap-2 mb-4 justify-center">
        <button onClick={handlePrevMonth} className="text-red-400">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-lg font-semibold text-gray-800">
          {formatMonthYear(currentDate)}
        </h2>
        <button onClick={handleNextMonth} className="text-red-400">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2 place-items-center auto-rows-fr">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-800"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 place-items-center auto-rows-fr">
        {days.map((day, index) => (
          <button
            key={index}
            className={`
              h-9 w-9 rounded-lg flex items-center justify-center text-sm font-medium
              ${
                !day.isCurrentMonth
                  ? "text-[#CCCCCC] cursor-not-allowed border border-[#DFDFDF] border-solid bg-[#F5F5F5]"
                  : bds.includes(day.day)
                  ? "border border-solid border-[#D7D7D7] text-[#999999]"
                  : "border border-primary text-secondary"
              }
            `}
            disabled={!day.isCurrentMonth}
          >
            {day.day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
