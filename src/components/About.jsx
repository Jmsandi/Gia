const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1a2456] mb-4">
            Our Brief History
          </h1>
          <div className="w-24 h-1 bg-[#00c853] mx-auto"></div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            Gbonkolenken International Academy (GIA), established in September 2023 by Mr. Issa Koroma—a visionary educator—has developed into a leading educational institution that offers numerous opportunities for students, parents, and community members. Created to provide quality education at an affordable rate, it has become a hub of academic and technological excellence accessible to people of all economic backgrounds.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our dedication to nurturing young minds and fostering a love for learning remains unwavering. Today, we take pride in being a top institution preparing students for success in a constantly evolving world.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A sturdy fence encloses the school. It features a three-story building with thirty classrooms, an expanded administrative wing, a learning resource center/library, a science lab, an ICT room, and a kindergarten playground. It benefits from 24/7 electricity, reliable internet, dependable, safe drinking water, and modern sanitation facilities.
          </p>
        </div>

        {/* School Administration */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-[#1a2456] mb-6">
            School Administration
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The School Administration functions within a hierarchical structure, with the owners of the institution at the top of decision-making. The Board Members play a key role in recruiting staff, managing the school budget, and overseeing the school's progress and growth. Key personnel also include the Director, Principal, Vice Principal, Senior Administrator/Counselor, and Finance Officer/HR, all of whom are responsible for managing daily school operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
