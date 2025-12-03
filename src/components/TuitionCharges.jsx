const TuitionCharges = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2456] mb-4">
            School Tuition & Charges
          </h1>
          <div className="w-24 h-1 bg-[#00c853] mx-auto"></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-[#1a2456] mb-6">Tuition Fees</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              GIA's tuition fees are competitive and affordable, with costs varying by grade level.
              Extra charges may apply for extracurricular activities, sports, and other programs.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#1a2456] p-6 mb-8">
              <h3 className="font-bold text-[#1a2456] mb-3">Payment Schedule</h3>
              <p className="text-gray-700 mb-2">
                Payments are to be made in two installments:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li><strong>First Installment:</strong> 75% of the total fees (including tuition and additional charges) are due within the first two weeks of the school year</li>
                <li><strong>Second Installment:</strong> The remaining 25% is payable by the middle of the second term</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Parents are required to adhere to these payment terms. An Enrollment Contact Form will be provided for parents and guardians to sign during the admission and registration process.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#1a2456] mb-6">Fee Structure by Grade Level</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-[#1a2456] text-white">
                  <tr>
                    <th className="border border-gray-300 px-6 py-3 text-left">Grade Level</th>
                    <th className="border border-gray-300 px-6 py-3 text-left">Annual Tuition</th>
                    <th className="border border-gray-300 px-6 py-3 text-left">Additional Fees</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-3">Day Care School</td>
                    <td className="border border-gray-300 px-6 py-3">[Contact Office]</td>
                    <td className="border border-gray-300 px-6 py-3">[Contact Office]</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-3">Nursery/Kindergarten</td>
                    <td className="border border-gray-300 px-6 py-3">[Contact Office]</td>
                    <td className="border border-gray-300 px-6 py-3">[Contact Office]</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-3">Primary School</td>
                    <td className="border border-gray-300 px-6 py-3">[Contact Office]</td>
                    <td className="border border-gray-300 px-6 py-3">[Contact Office]</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-3">Junior Secondary School</td>
                    <td className="border border-gray-300 px-6 py-3">[Contact Office]</td>
                    <td className="border border-gray-300 px-6 py-3">[Contact Office]</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-3">Senior Secondary School</td>
                    <td className="border border-gray-300 px-6 py-3">[Contact Office]</td>
                    <td className="border border-gray-300 px-6 py-3">[Contact Office]</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#1a2456] mb-6">Rental Policies</h2>

            <div className="space-y-6 mb-8">
              <div className="border border-gray-300 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1a2456] mb-3">Graduation Gowns</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>A rental fee of NL 400 will be charged for the graduation gown</li>
                  <li>The gown MUST be returned within five (5) days after the graduation ceremony</li>
                  <li>Parents/students will be charged for any damage or loss to the gown</li>
                </ul>
              </div>

              <div className="border border-gray-300 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1a2456] mb-3">Textbooks</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>A rental fee of Le 300 per book will be charged for the academic year</li>
                  <li>Books are rented for the entire academic year, and parents or students are responsible for returning them by the end of the year</li>
                  <li>Parents or students will be billed for any damage to or loss of the books</li>
                </ul>
              </div>

              <div className="border border-gray-300 rounded-lg p-6 bg-red-50">
                <h3 className="text-xl font-bold text-[#1a2456] mb-3">Penalties for Overdue Items</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Parents and students will be charged a late fee of Le 50 per day for any rented item not returned on time</li>
                  <li>Parents and students will be charged the full replacement cost for any lost or damaged items</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#00c853] bg-opacity-10 border border-[#00c853] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#1a2456] mb-3">Contact Finance Office</h3>
              <p className="text-gray-700 mb-4">
                For detailed information about tuition fees and payment options, please contact our Financial Officer:
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-[#1a2456]">Phone (Local): +232-32-459-300</p>
                <p className="font-semibold text-[#1a2456]">Phone (International): +001-215-941-0594</p>
                <p className="font-semibold text-[#1a2456]">Email: mariamagia2008@gmail.com</p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Payment for rental fees, late fees, and damage/loss fees can be made directly to the Finance Officer within seven (7) days of the notice letter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuitionCharges;
