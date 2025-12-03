const MissionVision = () => {
  const coreValues = [
    {
      title: "Godliness",
      description: "We believe that cultivating Godliness is essential for achieving success in life. Our goal is to provide a comprehensive and engaging education that stresses character development through values such as honesty, love, peace, and compassion for others, regardless of background, race, sexual orientation, or economic status. Encouraging godliness in students can strengthen their faith and deepen their connection with God. Additionally, it promotes lifelong virtues like integrity and honesty."
    },
    {
      title: "Respect",
      description: "We believe that respect is crucial for building and maintaining relationships, as well as for forming partnerships with students, parents, and community members. We teach our learners to value others' opinions, even when they differ. Promoting respect helps students develop strong, positive relationships with peers, teachers, and staff. Furthermore, respect promotes self-awareness by helping students understand how their words and actions impact others."
    },
    {
      title: "Accountability",
      description: "We believe that taking responsibility for one's actions, whether positive or negative, is crucial for meaningful change. Accountability encourages students to own their learning, which can lead to better grades and academic success. When students are responsible for their work, they stay focused, motivated, and actively involved in their studies. Additionally, they learn how to communicate effectively with teachers and their peers."
    },
    {
      title: "Commitment",
      description: "We emphasize training our students to value 'commitment' because it offers significant academic, personal, and social advantages. A strong commitment to learning enhances motivation, raises self-confidence, which, combined with good time management skills, helps students prioritize tasks and manage their schedules efficiently. It also fosters teamwork, cultivates leadership abilities, and encourages accountability, as being dedicated to a goal or project means taking responsibility for their actions."
    },
    {
      title: "Excellence",
      description: "We firmly believe that striving for excellence distinguishes us from other educational institutions. By inspiring our young learners to aim for excellence, we foster critical thinking and problem-solving skills. Excellence promotes healthy competition and nurtures leadership qualities. It equips our students to succeed in academics, careers, and personal growth."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-[#1a2456] mb-6">
            Our Mission
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Guided by a commitment to excellence, GIA strives to provide a transformative educational experience. Our mission is to inspire a passion for lifelong learning, ethical leadership, and civic engagement in our students. Through a collaborative and supportive community, we prepare individuals who make meaningful contributions to society.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-[#1a2456] mb-6">
            Our Vision
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Looking ahead, GIA aims to be a beacon of educational innovation and excellence. Our vision is to nurture a community of learners equipped with sustainable knowledge and skills who thrive in a dynamic and interconnected world. We aspire to be recognized for fostering creativity, adaptability, and a strong sense of responsibility in our students.
          </p>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-[#1a2456] mb-4 text-center">
            Our Core Values
          </h1>
          <div className="w-24 h-1 bg-[#00c853] mx-auto mb-6"></div>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            At GIA, we are committed to cultivating a community that upholds Godliness, respect, accountability, commitment, and excellence. These core values underpin our school's culture and influence our decisions and actions. We are best encapsulated by the acronym <span className="font-bold text-[#00c853]">GRACE</span>, which embodies our key principles.
          </p>

          <div className="space-y-6">
            {coreValues.map((value, index) => (
              <div key={index} className="border-l-4 border-[#00c853] pl-6 py-2">
                <h3 className="text-2xl font-bold text-[#1a2456] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Future */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-[#1a2456] mb-6">
            Our Future
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            As we look optimistically to the future, we stay dedicated to our mission and core values, while welcoming new ideas and initiatives that help us remain innovative. We are excited to continue offering an affordable, top-quality education that prepares our students for success in an increasingly complex and connected world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
