import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png?url";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 8, 1)); // September 2024
  const [selectedFilters, setSelectedFilters] = useState(["academic"]);
  const eventsListRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  // GIA School Events - Academic Year 2024-2025
  const events = [
    {
      id: 1,
      date: new Date(2024, 8, 2),
      title: "First Term Begins - All Students",
      time: "8:00 AM",
      location: "GIA Main Campus, Makeni - Sierra Leone",
      category: "academic",
      type: "Academic Calendar",
    },
    {
      id: 2,
      date: new Date(2024, 8, 15),
      title: "Parent-Teacher Association (PTA) Meeting",
      time: "2:00 PM - 4:00 PM",
      location: "GIA Main Hall, Makeni",
      category: "general",
      type: "General School Events",
    },
    {
      id: 3,
      date: new Date(2024, 9, 1),
      title: "Independence Day Celebration",
      time: "9:00 AM - 1:00 PM",
      location: "GIA School Grounds, Makeni",
      category: "general",
      type: "General School Events",
    },
    {
      id: 4,
      date: new Date(2024, 9, 20),
      title: "Day Care & Nursery Parent Orientation",
      time: "10:00 AM - 12:00 PM",
      location: "GIA Kindergarten Wing, Makeni",
      category: "daycare",
      type: "Day Care & Nursery Events",
    },
    {
      id: 5,
      date: new Date(2024, 10, 15),
      title: "Primary School Science Exhibition",
      time: "9:00 AM - 2:00 PM",
      location: "GIA Science Lab, Makeni",
      category: "primary",
      type: "Primary School Events",
    },
    {
      id: 6,
      date: new Date(2024, 11, 15),
      title: "First Term Ends",
      time: "All Day",
      category: "academic",
      type: "Academic Calendar",
    },
    {
      id: 7,
      date: new Date(2025, 0, 6),
      title: "Second Term Begins",
      time: "8:00 AM",
      location: "GIA Main Campus, Makeni",
      category: "academic",
      type: "Academic Calendar",
    },
    {
      id: 8,
      date: new Date(2025, 1, 14),
      title: "JSS Inter-House Sports Competition",
      time: "8:00 AM - 3:00 PM",
      location: "GIA Sports Ground, Makeni",
      category: "jss",
      type: "Junior Secondary School Events",
    },
    {
      id: 9,
      date: new Date(2025, 2, 10),
      title: "SSS Career Guidance Workshop",
      time: "10:00 AM - 2:00 PM",
      location: "GIA Main Hall, Makeni",
      category: "sss",
      type: "Senior Secondary School Events",
    },
    {
      id: 10,
      date: new Date(2025, 3, 20),
      title: "Second Term Ends",
      time: "All Day",
      category: "academic",
      type: "Academic Calendar",
    },
    {
      id: 11,
      date: new Date(2025, 4, 5),
      title: "Third Term Begins",
      time: "8:00 AM",
      location: "GIA Main Campus, Makeni",
      category: "academic",
      type: "Academic Calendar",
    },
    {
      id: 12,
      date: new Date(2025, 5, 15),
      title: "NPSSE & BECE Mock Examinations",
      time: "8:00 AM - 12:00 PM",
      location: "GIA Examination Halls, Makeni",
      category: "academic",
      type: "Academic Calendar",
    },
    {
      id: 13,
      date: new Date(2025, 6, 10),
      title: "Graduation Ceremony - SSS & Primary 6",
      time: "10:00 AM - 2:00 PM",
      location: "GIA Main Hall, Makeni",
      category: "general",
      type: "General School Events",
    },
    {
      id: 14,
      date: new Date(2025, 6, 25),
      title: "Third Term Ends - Academic Year Closes",
      time: "All Day",
      category: "academic",
      type: "Academic Calendar",
    },
  ];

  const eventCategories = [
    { id: "academic", label: "Academic Calendar", checked: true },
    { id: "general", label: "General School Events" },
    { id: "daycare", label: "Day Care & Nursery Events" },
    { id: "primary", label: "Primary School Events" },
    { id: "jss", label: "Junior Secondary School (JSS) Events" },
    { id: "sss", label: "Senior Secondary School (SSS) Events" },
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const formatDate = (date) => {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return {
      month: months[date.getMonth()],
      day: date.getDate(),
      weekday: days[date.getDay()],
    };
  };

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const toggleFilter = (filterId) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((f) => f !== filterId)
        : [...prev, filterId],
    );
  };

  // Filter events based on selected categories and current month
  const filteredEvents = events
    .filter((event) => selectedFilters.includes(event.category))
    .filter(
      (event) =>
        event.date.getMonth() === currentDate.getMonth() &&
        event.date.getFullYear() === currentDate.getFullYear(),
    )
    .sort((a, b) => a.date - b.date);

  // Scroll to top of events list when filters change
  useEffect(() => {
    if (eventsListRef.current) {
      eventsListRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedFilters]);

  const hasEvent = (day) => {
    if (!day) return false;
    return filteredEvents.some((event) => event.date.getDate() === day);
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  return (
    <>
      {/* Watermark - Only visible when printing */}
      <div className="print-watermark">
        <img src={logo} alt="GIA Logo" />
      </div>

      <div className="min-h-screen bg-gray-50 py-8 print:bg-white print:py-0">
        <div className="max-w-7xl mx-auto px-4 print:max-w-full print:px-8">
          {/* Header */}
          <div className="bg-white rounded-t-lg p-6 border-b print:border-0 print:rounded-none print:text-center print:pt-8 print:pb-4">
            <div className="flex items-center justify-between print:flex-col print:gap-2">
              <h1 className="text-2xl font-bold text-gray-800 print:hidden">
                Events
              </h1>
              <h1 className="hidden print:block text-3xl font-bold text-gray-800">
                GIA Calendar - {monthNames[currentDate.getMonth()]}{" "}
                {currentDate.getFullYear()}
              </h1>
              <div className="flex items-center gap-4 print:hidden">
                <button
                  onClick={handlePrint}
                  className="text-sm text-gray-600 hover:text-gray-900 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  Print
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-b-lg border border-t-0 border-gray-200 print:rounded-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 print:grid-cols-2">
              {/* Left Side - Events List */}
              <div className="lg:col-span-4 border-r border-gray-200 p-6 ml-4 print:col-span-1 print:ml-0 print:border-r-0">
                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-6 print:hidden">
                  <button
                    onClick={previousMonth}
                    className="p-2 hover:bg-gray-100 rounded"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <h2 className="text-lg font-semibold">
                    {monthNames[currentDate.getMonth()]}{" "}
                    {currentDate.getFullYear()}
                  </h2>
                  <button
                    onClick={nextMonth}
                    className="p-2 hover:bg-gray-100 rounded"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Print Section Title */}
                <h3 className="hidden print:block text-xl font-bold text-gray-800 mb-4 border-b pb-2">
                  Events
                </h3>

                {/* Events List */}
                <div
                  ref={eventsListRef}
                  className="space-y-4 pr-4 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 print:overflow-visible print:max-h-none"
                >
                  {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => {
                      const dateInfo = formatDate(event.date);
                      return (
                        <div
                          key={event.id}
                          className="border-b border-gray-200 pb-4 last:border-b-0"
                        >
                          <div className="flex gap-4">
                            {/* Date Badge */}
                            <div className="flex-shrink-0 text-center">
                              <div className="text-sm font-bold text-gray-700">
                                {dateInfo.month}
                              </div>
                              <div className="text-3xl font-bold text-gray-900">
                                {dateInfo.day}
                              </div>
                              <div className="text-xs text-gray-600">
                                {dateInfo.weekday}
                              </div>
                            </div>

                            {/* Event Details */}
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-900 mb-1 break-words">
                                {event.title}
                              </h3>
                              <p className="text-sm text-gray-600 mb-1">
                                {event.time}
                              </p>
                              {event.location && (
                                <p className="text-xs text-gray-500 break-words">
                                  {event.location}
                                </p>
                              )}
                              {event.category && (
                                <span className="inline-block mt-2 text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                  {event.type}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>No events found for the selected categories.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side - Calendar Grid and Filters */}
              <div className="lg:col-span-8 p-6 print:col-span-1 print:mr-0">
                <div className="flex flex-col lg:flex-row gap-8 mr-4 print:mr-0">
                  {/* Calendar Grid */}
                  <div className="flex-1 lg:max-w-md print:max-w-full">
                    {/* Print Section Title */}
                    <h3 className="hidden print:block text-xl font-bold text-gray-800 mb-4 border-b pb-2">
                      Calendar
                    </h3>

                    <div className="mb-4">
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {dayNames.map((day) => (
                          <div
                            key={day}
                            className="text-center text-sm font-semibold text-gray-600 py-2"
                          >
                            {day}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-7 gap-1">
                        {getDaysInMonth(currentDate).map((day, index) => (
                          <div
                            key={index}
                            className={`
                            aspect-square flex items-center justify-center text-sm relative
                            ${day ? "hover:bg-gray-100 cursor-pointer rounded" : ""}
                            ${isToday(day) ? "bg-blue-500 text-white rounded font-bold" : "text-gray-700"}
                            ${hasEvent(day) && !isToday(day) ? "font-bold" : ""}
                          `}
                          >
                            {day}
                            {hasEvent(day) && !isToday(day) && (
                              <div className="absolute bottom-1 w-1 h-1 bg-blue-500 rounded-full"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Today and Calendar View buttons */}
                    <div className="flex gap-2 mt-4 print:hidden">
                      <button className="text-sm text-gray-600 hover:text-gray-900 underline">
                        Today
                      </button>
                      <button className="text-sm text-gray-600 hover:text-gray-900 underline">
                        Calendar View
                      </button>
                    </div>
                  </div>

                  {/* Filters */}
                  <div className="lg:ml-8 flex-shrink-0 print:hidden">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Calendars
                    </h3>
                    <div className="space-y-2">
                      {eventCategories.map((category) => (
                        <label
                          key={category.id}
                          className="flex items-start gap-2 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={selectedFilters.includes(category.id)}
                            onChange={() => toggleFilter(category.id)}
                            className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900">
                            {category.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
