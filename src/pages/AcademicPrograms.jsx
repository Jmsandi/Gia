const AcademicPrograms = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-lg shadow-lg p-12 md:p-16">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#1a2456] rounded-full p-6">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2456] mb-4">
            Curriculum Overview
          </h1>
          <div className="w-24 h-1 bg-[#00c853] mx-auto mb-6"></div>

          {/* Message */}
          <p className="text-xl text-gray-700 mb-4">
            Content Coming Soon
          </p>
          <p className="text-gray-600 leading-relaxed">
            This page is currently being updated. Please check back later for detailed information about our curriculum and academic programs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;
