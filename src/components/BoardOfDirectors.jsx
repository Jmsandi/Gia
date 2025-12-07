const BoardOfDirectors = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2456] mb-4">
            Board of Directors
          </h1>
          <div className="w-24 h-1 bg-[#00c853] mx-auto"></div>
        </div>

        <div className="bg-white rounded-lg  p-8 md:p-12">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-[#1a2456] mb-6">School Administration</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The School Administration functions within a hierarchical structure, with the owners of the
              institution at the top of decision-making. The Board Members play a key role in recruiting staff,
              managing the school budget, and overseeing the school's progress and growth.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Key personnel also include the Director, Principal, Vice Principal, Senior Administrator/Counselor,
              and Finance Officer/HR, all of whom are responsible for managing daily school operations.
            </p>

            {/* Board Members Grid - Placeholder for images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[1, 2, 3, 4, 5, 6].map((member) => (
                <div key={member} className="bg-gray-100 p-6 rounded-lg text-center border border-gray-300">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500">[Photo]</span>
                  </div>
                  <h3 className="font-bold text-[#1a2456] text-lg mb-1">[Board Member Name]</h3>
                  <p className="text-sm text-gray-600">[Position]</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors;
