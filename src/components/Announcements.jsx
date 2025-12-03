const Announcements = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-lg shadow-lg p-12 md:p-16">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#1a2456] rounded-full p-6">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2456] mb-4">
            Announcements
          </h1>
          <div className="w-24 h-1 bg-[#00c853] mx-auto mb-6"></div>

          {/* Message */}
          <p className="text-xl text-gray-700 mb-4">
            Content Coming Soon
          </p>
          <p className="text-gray-600 leading-relaxed">
            This page is currently being updated. Please check back later for the latest announcements and news from GIA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
