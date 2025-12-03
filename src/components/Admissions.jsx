const Admissions = () => {
  const admissionRequirements = [
    {
      level: "Day Care School",
      requirements: [
        "Birth Certificate",
        "Medical Certificate/Document from a reputable doctor"
      ]
    },
    {
      level: "Nursery/Kindergarten School",
      requirements: [
        "Birth Certificate",
        "Medical Certificate/Document from a reputable doctor",
        "Transfer certificate (if the student attended a previous school)"
      ]
    },
    {
      level: "Primary School",
      requirements: [
        "Birth Certificate",
        "Transfer certificate",
        "Previous School Report Card (where applicable)"
      ]
    },
    {
      level: "Junior Secondary School",
      requirements: [
        "Birth Certificate",
        "Transfer certificate",
        "Previous School Report Card (where applicable)"
      ]
    },
    {
      level: "Senior Secondary School",
      requirements: [
        "Birth Certificate",
        "Transfer certificate",
        "Previous School and BECE Report Cards (where applicable)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1a2456] mb-4">
            Admission Procedures
          </h1>
          <div className="w-24 h-1 bg-[#00c853] mx-auto"></div>
        </div>

        {/* Admission Requirements */}
        <div className="space-y-6 mb-8">
          {admissionRequirements.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-bold text-[#1a2456] mb-4">
                {index + 1}. {item.level}
              </h2>
              <ul className="space-y-2">
                {item.requirements.map((req, reqIndex) => (
                  <li key={reqIndex} className="flex items-start">
                    <span className="text-[#00c853] mr-3 mt-1">•</span>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="bg-[#1a2456] text-white rounded-lg p-6 mb-8">
          <p className="text-lg font-semibold">
            For new admissions at all levels (Primary to Senior Secondary School), pupils are required to take entrance exams and/or participate in interviews. NO EXCEPTIONS.
          </p>
        </div>

        {/* Withdrawal Policy */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-[#1a2456] mb-6">
            Withdrawal Policy
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Parents MUST provide written notice of withdrawal, and fees may apply depending on the timing of the withdrawal.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            No tuition fee is refundable if the student has received the school supplies and attended for one month or more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
