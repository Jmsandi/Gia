const WhyChoose = () => {
  const academicExcellence = [
    "Our curriculum aligns with the MBSSE, but has additional features to challenge and engage students, preparing them for success in college and beyond.",
    "Our Teachers are experienced, qualified, and passionate about teaching and learning.",
    "Our small class sizes ensure that each student receives personalized attention and support.",
    "Our classrooms are equipped with the latest modern technology and resources, providing an optimal learning environment."
  ];

  const holisticEducation = [
    "We offer a range of programs and activities that foster academic, artistic, and athletic excellence.",
    "We prioritize character development, teaching our students the values and skills they need to succeed in life.",
    "We encourage our students to participate in community service projects, fostering a sense of social responsibility and empathy.",
    "Our school is a safe and secure environment, with a focus on student well-being and safety.",
    "We foster global citizenship, teaching students about different cultures, perspectives, and issues."
  ];

  const teachingMethods = [
    "Our teachers use personalized learning approaches to cater to the needs and abilities of each student.",
    "We integrate technology into our teaching methods to enhance learning and prepare our students for the digital age."
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1a2456] mb-4">
            Why Choose Our School
          </h1>
          <div className="w-24 h-1 bg-[#00c853] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At GIA, we offer an outstanding educational experience that sets us apart from other schools. Here's why you can confidently choose our school for your child's education.
          </p>
        </div>

        {/* Academic Excellence */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-[#1a2456] mb-6">
            Academic Excellence
          </h2>
          <ul className="space-y-4">
            {academicExcellence.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#00c853] text-xl mr-3 mt-1">•</span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Holistic Education */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-[#1a2456] mb-6">
            Holistic Education
          </h2>
          <ul className="space-y-4">
            {holisticEducation.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#00c853] text-xl mr-3 mt-1">•</span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Teaching Methods */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-[#1a2456] mb-6">
            Teaching Methods
          </h2>
          <ul className="space-y-4">
            {teachingMethods.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#00c853] text-xl mr-3 mt-1">•</span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
