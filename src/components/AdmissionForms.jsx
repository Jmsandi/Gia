const AdmissionForms = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2456] mb-4">
            Student Admission Forms
          </h1>
          <div className="w-24 h-1 bg-[#00c853] mx-auto"></div>
        </div>

        <div className="bg-white rounded-lg  p-8 md:p-12">
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              Download the appropriate admission form for your child's grade level. Please fill out the form
              completely and submit it along with the required documents.
            </p>

            <div className="space-y-6">
              {/* Day Care Form */}
              <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a2456] mb-2">Day Care School Admission Form</h3>
                    <p className="text-sm text-gray-600">For children in day care program</p>
                  </div>
                  <button className="bg-[#00c853] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00a843] transition-colors">
                    Download
                  </button>
                </div>
              </div>

              {/* Nursery/Kindergarten Form */}
              <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a2456] mb-2">Nursery/Kindergarten Admission Form</h3>
                    <p className="text-sm text-gray-600">For children in nursery and kindergarten</p>
                  </div>
                  <button className="bg-[#00c853] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00a843] transition-colors">
                    Download
                  </button>
                </div>
              </div>

              {/* Primary School Form */}
              <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a2456] mb-2">Primary School Admission Form</h3>
                    <p className="text-sm text-gray-600">For students in primary/elementary school</p>
                  </div>
                  <button className="bg-[#00c853] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00a843] transition-colors">
                    Download
                  </button>
                </div>
              </div>

              {/* Junior Secondary Form */}
              <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a2456] mb-2">Junior Secondary School Admission Form</h3>
                    <p className="text-sm text-gray-600">For students in JSS (grades 7-9)</p>
                  </div>
                  <button className="bg-[#00c853] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00a843] transition-colors">
                    Download
                  </button>
                </div>
              </div>

              {/* Senior Secondary Form */}
              <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a2456] mb-2">Senior Secondary School Admission Form</h3>
                    <p className="text-sm text-gray-600">For students in SSS (grades 10-12)</p>
                  </div>
                  <button className="bg-[#00c853] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00a843] transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-[#1a2456] p-6">
              <h3 className="font-bold text-[#1a2456] mb-3">Required Documents</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Birth Certificate</li>
                <li>Medical Certificate (for Day Care and Nursery/Kindergarten)</li>
                <li>Transfer Certificate (if applicable)</li>
                <li>Previous School Report Card (if applicable)</li>
                <li>BECE Report Card (for Senior Secondary admission)</li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">
                For assistance with the admission forms, please contact our admissions office:
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-[#1a2456]">Phone: +232-79-485-638</p>
                <p className="font-semibold text-[#1a2456]">Email: proprietor.giamakeni.sl@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForms;
