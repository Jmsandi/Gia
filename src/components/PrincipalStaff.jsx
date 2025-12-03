const PrincipalStaff = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2456] mb-4">
            Principal and Staff
          </h1>
          <div className="w-24 h-1 bg-[#00c853] mx-auto"></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-[#1a2456] mb-6">School Leadership</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our dedicated team of educational professionals is committed to providing excellence in education
            and creating a nurturing environment for all students.
          </p>

          {/* Principal Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[#1a2456] mb-6">Principal</h3>
            <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-40 h-40 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-500">[Principal Photo]</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#1a2456] text-xl mb-2">[Principal Name]</h4>
                  <p className="text-sm text-gray-600 mb-3">Principal</p>
                  <p className="text-gray-700 leading-relaxed">
                    [Brief bio and message from the principal]
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vice Principal Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[#1a2456] mb-6">Vice Principal</h3>
            <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-40 h-40 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-500">[Vice Principal Photo]</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#1a2456] text-xl mb-2">[Vice Principal Name]</h4>
                  <p className="text-sm text-gray-600 mb-3">Vice Principal</p>
                  <p className="text-gray-700 leading-relaxed">
                    [Brief bio and message from the vice principal]
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Staff Grid */}
          <div>
            <h3 className="text-xl font-bold text-[#1a2456] mb-6">Our Teaching Staff</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((staff) => (
                <div key={staff} className="bg-gray-100 p-4 rounded-lg text-center border border-gray-300">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">[Photo]</span>
                  </div>
                  <h4 className="font-bold text-[#1a2456] mb-1">[Staff Name]</h4>
                  <p className="text-xs text-gray-600">[Subject/Position]</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalStaff;
