import logo from '../assets/proprietor.png?url';

const ProprietorWelcome = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-1">
            <div className="relative">
              <img
                src={logo}
                alt="Proprietor"
                className="w-full h-auto object-cover "
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2456]">
              Message from the Proprietor
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Dear parents, students, and community members,
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              It is my pleasure to welcome you to Gbonkolenken International Academy. As the owner, I am proud of our unique learning environment, which sparks curiosity, encourages creativity, and fosters a love for learning.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Our school offers a comprehensive education that goes beyond textbooks. We aim to provide students with the knowledge, skills, and values needed for academic success and navigating modern challenges.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              We maintain a safe and inclusive environment that celebrates diversity and fosters a sense of belonging. Our resolute teachers help students discover their strengths and reach their potential. I invite you to join us on this journey of growth and achievement.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Together, we can cultivate a love for learning, build resilience, and prepare students to become responsible global citizens. Thank you for considering our school. I look forward to collaborating with parents, teachers, and students to build a supportive community and a lucrative educational experience.
            </p>
            <p className="text-base font-semibold text-[#1a2456] mt-4">
              Sincerely,<br/>
              Issa Koroma – Proprietor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProprietorWelcome;
