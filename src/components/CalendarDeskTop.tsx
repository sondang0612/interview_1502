import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const bds = [1, 2, 4, 11, 15, 16, 17];

const CalendarDeskTop = () => {
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
        status: "disabled",
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const status = !bds.includes(i) ? "Libre" : "Occupé";
      days.push({
        day: i,
        isCurrentMonth: true,
        status,
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
      className="w-full py-6 px-8 bg-white rounded-3xl shadow-primary"
      style={{ border: "1px solid rgba(86, 44, 44, 0.3)" }}
    >
      <div className="flex items-center justify-center w-full mb-8">
        <button onClick={handlePrevMonth} className="text-red-400">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-lg font-medium text-secondary w-[110px] mx-4 flex items-center justify-center">
          {formatMonthYear(currentDate)}
        </h2>
        <button onClick={handleNextMonth} className="text-red-400">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-3 mb-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-lg font-semibold text-secondary"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-3">
        {days.map((day, index) => (
          <button
            key={index}
            className={`
              h-[4.5rem] w-full rounded-lg flex flex-col items-center justify-center text-sm font-medium border
              bg-[#FAFAFA] ${
                !day.isCurrentMonth
                  ? "text-gray-300 border-[#D7D7D7] cursor-not-allowed"
                  : day.status === "Libre"
                  ? "border-primary"
                  : "border-[#D7D7D7]"
              }
            `}
            disabled={!day.isCurrentMonth}
          >
            <span
              className={`text-xl font-semibold ${
                !day.isCurrentMonth
                  ? "text-[#CCCCCC]"
                  : day.status === "Libre"
                  ? "text-secondary"
                  : "text-[#999999]"
              }`}
            >
              {day.day}
            </span>
            {day.isCurrentMonth && (
              <span
                className={`text-lg mt-1 h-6 ${
                  day.status === "Libre" ? "text-primary" : "text-[#AAAAAA]"
                }`}
              >
                {day.status}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalendarDeskTop;
