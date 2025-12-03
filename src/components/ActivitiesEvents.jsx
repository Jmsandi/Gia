const ActivitiesEvents = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-lg shadow-lg p-12 md:p-16">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#00c853] rounded-full p-6">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2456] mb-4">
            School Activities & Events
          </h1>
          <div className="w-24 h-1 bg-[#00c853] mx-auto mb-6"></div>

          {/* Message */}
          <p className="text-xl text-gray-700 mb-4">
            Content Coming Soon
          </p>
          <p className="text-gray-600 leading-relaxed">
            This page is currently being updated. Please check back later for information about school activities, events, and upcoming programs at GIA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesEvents;
