import { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import logo from '../assets/logo.png?url';
import proprietorPhoto from '../assets/proprietor.png?url';
import schoolbuilding from '../assets/schoolbuilding.png?url';
import daycarePhoto from '../assets/daycare.jpg?url';
import kindergartenPhoto from '../assets/kindergarten.jpg?url';
import elementaryPhoto from '../assets/elementary.jpg?url';
import highschoolPhoto from '../assets/highschool.jpg?url';
import AdministrationPhoto from '../assets/administration.png?url';
import MaleUniformPhoto from '../assets/maleuniform.png?url';
import FeMaleUniformPhoto from '../assets/femaleuniform.png?url';
import ICTlabPhoto from '../assets/ICTlab.jpg?url';

const Prospectus = () => {
  const flipBookRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 800,
    height: 1100,
    isMobile: false
  });

  useEffect(() => {
    const updateDimensions = () => {
      const isMobile = window.innerWidth < 768;

      let width, height;

      if (isMobile) {
        width = Math.min(window.innerWidth * 0.9, 350);
        height = Math.min(window.innerWidth * 1.3, 520);
      } else {
        // Desktop: Much larger flip book size
        width = Math.min(window.innerWidth * 0.4, 1200); // Larger width per page, responsive to screen size
        height = Math.min(window.innerHeight * 0.8, 1600); // Larger height, responsive to screen size
      }

      setDimensions({ width, height, isMobile });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const pages = [
    // Page 1 - Cover & Table of Contents
    {
      title: 'PROSPECTUS',
      content: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a2456] to-[#2a3466] text-white p-8">
          <img src={logo} alt="GIA Logo" className="w-32 h-32 mb-6" />
          <h1 className="text-4xl font-bold text-center mb-2">GBONKOLENKEN</h1>
          <h2 className="text-3xl font-bold text-center mb-2">INTERNATIONAL ACADEMY</h2>
          <p className="text-xl text-center mb-8">MAKENI - SIERRA LEONE</p>
          <div className="w-24 h-1 bg-[#00c853] mb-8"></div>
          <h3 className="text-2xl font-semibold">School Prospectus</h3>
          <p className="text-sm mt-4">2024-2025</p>
        </div>
      )
    },
    // Page 2 - Table of Contents
    {
      title: 'TABLE OF CONTENTS',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a2456] mb-4 md:mb-6 border-b-4 border-[#00c853] pb-2 inline-block">
            TABLE OF CONTENTS
          </h2>
          <div className="space-y-2 md:space-y-3 mt-4 md:mt-8 text-sm md:text-base">
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>Welcome Message</span>
              <span className="font-semibold">2</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>Brief School Background/History</span>
              <span className="font-semibold">3</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>School Mission, Vision, and Core Values</span>
              <span className="font-semibold">4</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>Academic Programs</span>
              <span className="font-semibold">5</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>Why You Should Choose Us</span>
              <span className="font-semibold">6</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>Testimonials</span>
              <span className="font-semibold">7</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>Facilities and Resources</span>
              <span className="font-semibold">8</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>Our Admission Process</span>
              <span className="font-semibold">9</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>Life in Our School</span>
              <span className="font-semibold">10</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>School Term Dates and Policies</span>
              <span className="font-semibold">11</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>Community-Teacher Association</span>
              <span className="font-semibold">12</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>How to Contact Us</span>
              <span className="font-semibold">13</span>
            </div>
          </div>
        </div>
      )
    },
    // Page 3 - Welcome Message
    {
      title: 'Welcome Message',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a2456] mb-4 md:mb-6 border-b-4 border-[#00c853] pb-2 inline-block">
            Welcome Message from the Proprietor
          </h2>
          <div className="mt-4 md:mt-6 space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
            
            <img
              src={proprietorPhoto}
              alt="Proprietor"
              className="w-full h-48 object-cover mb-4 border-0 "
            />

            <p>Dear parents, students, and community members,</p>

            <p>
              It is my pleasure to welcome you to Gbonkolenken International Academy. As the owner, I am proud of our unique learning environment, which sparks curiosity, encourages creativity, and fosters a love for learning.
            </p>

            <p>
              Our school offers a comprehensive education that goes beyond textbooks. We aim to provide students with the knowledge, skills, and values needed for academic success and navigating modern challenges.
            </p>

            <p>
              We maintain a safe and inclusive environment that celebrates diversity and fosters a sense of belonging. Our resolute teachers help students discover their strengths and reach their potential. I invite you to join us on this journey of growth and achievement.
            </p>

            <p>
              Together, we can cultivate a love for learning, build resilience, and prepare students to become responsible global citizens. Thank you for considering our school. I look forward to collaborating with parents, teachers, and students to build a supportive community and a lucrative educational experience.
            </p>

            <p className="mt-6 font-semibold">Sincerely,</p>
            <p className="font-semibold text-[#1a2456]">Issa Koroma – Proprietor</p>
          </div>
        </div>
      )
    },
    // Page 4 - Brief History
    {
      title: 'Our Brief History',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a2456] mb-4 md:mb-6 border-b-4 border-[#00c853] pb-2 inline-block">
            Our Brief History
          </h2>
          <div className="mt-4 md:mt-6 space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
            <p>
              Gbonkolenken International Academy (GIA), established in September 2023 by Mr. Issa Koroma—a visionary educator—has developed into a leading educational institution that offers numerous opportunities for students, parents, and community members. Created to provide quality education at an affordable rate, it has become a hub of academic and technological excellence accessible to people of all economic backgrounds.
            </p>

            <p>
              Our dedication to nurturing young minds and fostering a love for learning remains unwavering. Today, we take pride in being a top institution preparing students for success in a constantly evolving world.
            </p>

          
            <img
              src={schoolbuilding}
              alt="School Building"
              className="w-full h-48 object-cover mb-4 border-0 "
            />
            <p>
              A sturdy fence encloses the school. It features a three-story building with thirty classrooms, an expanded administrative wing, a learning resource center/library, a science lab, an ICT room, and a kindergarten playground. It benefits from 24/7 electricity, reliable internet, dependable, safe drinking water, and modern sanitation facilities.
            </p>
          </div>
        </div>
      )
    },
    // Page 5 - Mission, Vision, Core Values (Part 1)
    {
      title: 'Mission, Vision & Core Values',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1a2456] mb-3 md:mb-4">OUR MISSION</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Guided by a commitment to excellence, GIA strives to provide a transformative educational experience. Our mission is to inspire a passion for lifelong learning, ethical leadership, and civic engagement in our students. Through a collaborative and supportive community, we prepare individuals who make meaningful contributions to society.
          </p>

          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1a2456] mb-3 md:mb-4">OUR VISION</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Looking ahead, GIA aims to be a beacon of educational innovation and excellence. Our vision is to nurture a community of learners equipped with sustainable knowledge and skills who thrive in a dynamic and interconnected world. We aspire to be recognized for fostering creativity, adaptability, and a strong sense of responsibility in our students.
          </p>

          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1a2456] mb-3 md:mb-4">OUR CORE VALUES</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At GIA, we are committed to cultivating a community that upholds Godliness, respect, accountability, commitment, and excellence. These core values underpin our school's culture and influence our decisions and actions. We are best encapsulated by the acronym <span className="font-bold text-[#00c853]">GRACE</span>, which embodies our key principles.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#1a2456] mb-2">Godliness</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We believe that cultivating Godliness is essential for achieving success in life. Our goal is to provide a comprehensive and engaging education that stresses character development through values such as honesty, love, peace, and compassion for others.
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Page 6 - Core Values (Part 2)
    {
      title: 'Core Values (continued)',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#1a2456] mb-2">Respect</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We believe that respect is crucial for building and maintaining relationships, as well as for forming partnerships with students, parents, and community members. We teach our learners to value others' opinions, even when they differ.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1a2456] mb-2">Accountability</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We believe that taking responsibility for one's actions, whether positive or negative, is crucial for meaningful change. Accountability encourages students to own their learning, which can lead to better grades and academic success.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1a2456] mb-2">Commitment</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We emphasize training our students to value commitment because it offers significant academic, personal, and social advantages. A strong commitment to learning enhances motivation and raises self-confidence.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1a2456] mb-2">Excellence</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We firmly believe that striving for excellence distinguishes us from other educational institutions. By inspiring our young learners to aim for excellence, we foster critical thinking and problem-solving skills.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-[#1a2456] mb-2">Our Future</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                As we look optimistically to the future, we stay dedicated to our mission and core values, while welcoming new ideas and initiatives that help us remain innovative.
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Page 7 - Academic Programs (Part 1)
    {
      title: 'Academic Programs',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a2456] mb-4 md:mb-6 border-b-4 border-[#00c853] pb-2 inline-block">
            Academic Programs
          </h2>
          <div className="mt-4 md:mt-6 space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
            <p>
              The GIA curriculum is officially recognized and approved by the Ministry of Basic and Senior Secondary School Education (MBSSE) in Sierra Leone, West Africa. While GIA operates as a private school, it is mandated to follow the curriculum established by the MBSSE. Its students sit for all the national examinations, which include NPSSE, BECE, and WASSCE, conducted by the West African Examinations Council (WAEC).
            </p>

            <h3 className="text-xl font-bold text-[#1a2456] mt-6 mb-3">GIA offers the following programs:</h3>
            <ul className="list-decimal ml-6 space-y-2">
              <li>Day Care School</li>
              <li>Nursery (Kindergarten) School</li>
              <li>Primary (Elementary) School</li>
              <li>Junior Secondary School (JSS)</li>
              <li>Senior Secondary School (SSS)</li>
            </ul>

            <img
              src={daycarePhoto}
              alt="Day Care School"
              className="w-full h-48 object-cover mb-4 border-0"
            />
            <span>children having fun at daycare</span>
            <img
              src={kindergartenPhoto}
              alt="kindergarten"
              className="w-full h-48 object-cover mb-4 border-0"
            />
            <span>children having fun at kindergarten</span>
            <img
              src={elementaryPhoto}
              alt="Elementary School"
              className="w-full h-48 object-cover mb-4 border-0"
            />
            <span>students at elementary school</span>
            <img
              src={highschoolPhoto}
              alt="High School"
              className="w-full h-48 object-cover mb-4 border-0"
            />
            <span>students at high school</span>
          </div>
        </div>
      )
    },
    // Page 8 - Academic Programs (Part 2) - Admissions
    {
      title: 'Admission Procedures',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1a2456] mb-3 md:mb-4">ADMISSION PROCEDURES</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <h4 className="font-bold text-[#1a2456]">1. Day Care School</h4>
              <p>Parents/Guardians are required to provide a Birth Certificate and a Medical Certificate/Document from a reputable doctor.</p>
            </div>

            <div>
              <h4 className="font-bold text-[#1a2456]">2. Nursery/Kindergarten School</h4>
              <p>Provide a Birth Certificate and Medical Certificate/Document from a reputable doctor. (A transfer certificate is required if the student attends a previous school)</p>
            </div>

            <div>
              <h4 className="font-bold text-[#1a2456]">3. Primary School</h4>
              <p>Provide a Birth Certificate, a transfer certificate, and a previous School Report Card, where applicable.</p>
            </div>

            <div>
              <h4 className="font-bold text-[#1a2456]">4. Junior Secondary School</h4>
              <p>Provide a Birth Certificate, transfer certificate, and previous School Report Card, where applicable.</p>
            </div>

            <div>
              <h4 className="font-bold text-[#1a2456]">5. Senior Secondary School</h4>
              <p>Provide a Birth Certificate, transfer certificate, and previous School and BECE Report Cards, where applicable.</p>
            </div>

            <p className="font-semibold mt-4">
              For new admissions at all levels (Primary to Senior Secondary School), pupils are required to take entrance exams and/or participate in interviews. NO EXCEPTIONS.
            </p>

            <h3 className="text-xl font-bold text-[#1a2456] mt-6 mb-3">Withdrawal Policy</h3>
            <p>
              Parents MUST provide written notice of withdrawal, and fees may apply depending on the timing of the withdrawal. No tuition fee is refundable if the student has received the school supplies and attended for one month or more.
            </p>
          </div>
        </div>
      )
    },
    // Page 9 - School Administration
    {
      title: 'School Administration',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1a2456] mb-3 md:mb-4">School Administration</h2>
          <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-700">
            <p>
              The School Administration functions within a hierarchical structure, with the owners of the institution at the top of decision-making. The Board Members play a key role in recruiting staff, managing the school budget, and overseeing the school's progress and growth.
            </p>
            <p>
              Key personnel also include the Director, Principal, Vice Principal, Senior Administrator/Counselor, and Finance Officer/HR, all of whom are responsible for managing daily school operations.
            </p>

              <img
               src={AdministrationPhoto}
               alt="Proprietor"
               className="w-full h-48 object-cover mb-4 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      )
    },
    // Page 10 - Why Choose Us
    {
      title: 'Why Choose Our School',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a2456] mb-4 md:mb-6 border-b-4 border-[#00c853] pb-2 inline-block">
            Why Choose Our School
          </h2>
          <div className="mt-6 space-y-4 text-sm text-gray-700">
            <p>
              At GIA, we offer an outstanding educational experience that sets us apart from other schools. Here's why you can confidently choose our school for your child's education.
            </p>

            <div>
              <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#1a2456] mb-2">Academic Excellence</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Our curriculum aligns with the MBSSE, but has additional features to challenge and engage students</li>
                <li>Our Teachers are experienced, qualified, and passionate about teaching and learning</li>
                <li>Our small class sizes ensure personalized attention and support</li>
                <li>Our classrooms are equipped with latest modern technology and resources</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#1a2456] mb-2">Holistic Education</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>We offer a range of programs that foster academic, artistic, and athletic excellence</li>
                <li>We prioritize character development, teaching values and skills needed to succeed in life</li>
                <li>We encourage community service projects, fostering social responsibility and empathy</li>
                <li>Our school is a safe and secure environment, with focus on student well-being</li>
                <li>We foster global citizenship, teaching students about different cultures and perspectives</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#1a2456] mb-2">Teaching Methods</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Our teachers use personalized learning approaches to cater to each student's needs</li>
                <li>We integrate technology into our teaching methods to enhance learning</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // Page 11 - School Uniforms
    {
      title: 'School Uniforms',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1a2456] mb-3 md:mb-4">Our School Uniforms</h2>
          <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-700">
            <p className="text-sm mb-4">
              The colors of the school uniform are butter color for the shirt and navy blue for the pants or skirt, with different, but uniform styles for Kindergarten, Primary, JSS, and Senior Secondary students.
            </p>
            <p className="text-sm mb-4">
              Our uniforms foster a sense of unity and equality among students, irrespective of their background or socioeconomic status. Our uniforms contribute to the development of a professional and respectful attitude toward education and peers.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 text-xs">
                <thead className="bg-[#1a2456] text-white">
                  <tr>
                    <th className="border border-gray-300 px-3 py-2">Level</th>
                    <th className="border border-gray-300 px-3 py-2">Top (Shirt)</th>
                    <th className="border border-gray-300 px-3 py-2">Bottom</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-bold">DAY CARE</td>
                    <td className="border border-gray-300 px-3 py-2">Blue-Black & white purpling check</td>
                    <td className="border border-gray-300 px-3 py-2">Blue-Black Siphon</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-bold">NURSERY</td>
                    <td className="border border-gray-300 px-3 py-2">Blue-Black & white purpling check</td>
                    <td className="border border-gray-300 px-3 py-2">Blue-Black Siphon</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-bold">PRIMARY</td>
                    <td className="border border-gray-300 px-3 py-2">Weather shield (Butter color)</td>
                    <td className="border border-gray-300 px-3 py-2">Blue-Black Siphon</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-bold">JSS</td>
                    <td className="border border-gray-300 px-3 py-2">Weather shield (Butter color)</td>
                    <td className="border border-gray-300 px-3 py-2">Blue-Black Siphon</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-bold">SSS</td>
                    <td className="border border-gray-300 px-3 py-2">Weather shield (Butter color)</td>
                    <td className="border border-gray-300 px-3 py-2">Blue-Black Siphon</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-3 font-semibold">All students: Black shoes and blue-black socks</p>
             <span>Female uniform</span>
               <img
                src={FeMaleUniformPhoto}
               alt="female uniform"
              className="w-full h-full object-cover mb-4 border-0"
             />
             <span>Male uniform</span>
             <img
                src={MaleUniformPhoto}
               alt="male uniform"
              className="w-full h-full object-cover mb-4 border-0"
             />
          </div>
        </div>
      )
    },
    // Page 12 - Rental Policy
    {
      title: 'Rental Policy',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1a2456] mb-3 md:mb-4">Our Rental Policy</h2>
          <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-700">
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
              <h3 className="text-lg font-bold text-[#1a2456] mb-3">Graduation Gowns</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>A rental fee of NL 400 will be charged for the graduation gown</li>
                <li>The gown MUST be returned within five (5) days after the graduation ceremony</li>
                <li>Parents/students will be charged for any damage or loss to the gown</li>
              </ul>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
              <h3 className="text-lg font-bold text-[#1a2456] mb-3">Books</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>A rental fee of Le 300 per book will be charged for the academic year</li>
                <li>Books are rented for the entire academic year, and parents or students are responsible for returning them by the end of the year</li>
                <li>Parents or students will be billed for any damage to or loss of the books</li>
              </ul>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 bg-red-50">
              <h3 className="text-lg font-bold text-[#1a2456] mb-3">Penalties for Overdue</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Parents and students will be charged a late fee of Le 50 per day for any rented item not returned on time</li>
                <li>Parents and students will be charged the full replacement cost for any lost or damaged items</li>
              </ul>
            </div>

            <p className="text-xs mt-4">
              Payment for rental fees, late fees, and damage/loss fees can be made directly to the FINANCE OFFICER within seven (7) days of the notice letter.
            </p>
          </div>
        </div>
      )
    },
    // Page 13 - Testimonials
    {
      title: 'Testimonials',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a2456] mb-4 md:mb-6 border-b-4 border-[#00c853] pb-2 inline-block">
            Testimonials
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#1a2456] mb-3">Parent Stories</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 border-l-4 border-[#00c853]">
                  <p className="text-gray-700 italic mb-2">
                    "My child has thrived at GIA. The teachers are dedicated and passionate, and the curriculum is challenging and engaging. I couldn't be happier with the education my child is receiving."
                  </p>
                  <p className="text-sm font-semibold text-[#1a2456]">- Bobby Pain, Parent</p>
                </div>

                <div className="bg-gray-50 p-4 border-l-4 border-[#00c853]">
                  <p className="text-gray-700 italic mb-2">
                    "The sense of community at GIA is incredible. The school cares about each student and their family, and it shows in the way they support and nurture each child."
                  </p>
                  <p className="text-sm font-semibold text-[#1a2456]">- Princess Koroma, Parent</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a2456] mb-3">Community Leaders</h3>
              <div className="bg-gray-50 p-4 border-l-4 border-[#00c853]">
                <p className="text-gray-700 italic mb-2">
                  "GIA is an asset to our community. The school's commitment to service and engagement is inspiring, and the students are making real progress and differences in our Community."
                </p>
                <p className="text-sm font-semibold text-[#1a2456]">- Chief Samuel, Makama Community</p>
              </div>
            </div>

            {/* INSERT IMAGE HERE - Community/Students photo */}
            <div className="w-full h-32 bg-gray-200 flex items-center justify-center border border-gray-300">
              <span className="text-gray-500">[Community Photo]</span>
            </div>
          </div>
        </div>
      )
    },
    // Page 11 - Facilities and Resources
    {
      title: 'Facilities and Resources',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a2456] mb-4 md:mb-6 border-b-4 border-[#00c853] pb-2 inline-block">
            Facilities and Resources
          </h2>
          <div className="mt-4 md:mt-6 space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
            <p>
              At GIA, we take pride in our facilities that offer a safe, comfortable, and motivating environment for learning. We have spacious classrooms equipped with modern technology, including projectors and comfortable seating.
            </p>

            <p>
              Our science lab features the latest equipment and tools, allowing students to conduct experiments and investigations effectively. Additionally, the Learning Resource Center serves as a central learning hub, providing a wide range of books, journals, and online resources.
            </p>

            <img
                src={ICTlabPhoto}
               alt="ICT lab"
              className="w-full h-48 object-cover mb-4 border-0"
             />

            <p>
              Our librarian and teachers are always available to support students with research and reading needs.
            </p>

            <div className="mt-6">
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#1a2456] mb-2 md:mb-3">Safety and Security</h3>
              <p>
                At GIA, we prioritize the safety and security of our students. Our school features secure entry points and CCTV cameras monitoring activity around the premises. Staff members are consistently available to supervise students both inside and outside the classroom.
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Page 12 - School Policies and Term Dates
    {
      title: 'School Policies',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1a2456] mb-3 md:mb-4">School Term Dates and Policies</h2>

          <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-700">
            <div>
              <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#1a2456] mb-2">School Terms</h3>
              <p>Our academic year typically runs from September to July with three terms and regular breaks in between. Term dates are published on our website and communicated to parents via WhatsApp, emails, letters, or word of mouth in advance.</p>
            </div>

            <div>
              <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#1a2456] mb-2">Fees</h3>
              <p>
                GIA's tuition fees are competitive and affordable, with costs varying by grade level. For more information, contact the FINANCIAL OFFICER at +23232459300 (Local) or 0012159410594 (International). Payments are to be made in two installments: 75% of the total fees are due within the first two weeks, with the remaining 25% payable by the middle of the second term.
              </p>
            </div>

            <div>
              <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#1a2456] mb-2">School Policies</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Attendance Policy:</strong> Regular attendance is mandatory. Three unexcused absences will result in suspension until an explanation is provided.</li>
                <li><strong>Behavioral Policy:</strong> All students are expected to behave respectfully and responsibly.</li>
                <li><strong>Bullying Policy:</strong> We enforce a strict zero-tolerance policy on bullying.</li>
                <li><strong>Academic Integrity Policy:</strong> Plagiarism or cheating will not be tolerated.</li>
                <li><strong>Communication Policy:</strong> We value communication with parents and encourage regular updates.</li>
                <li><strong>Uniform Policy:</strong> Our uniform requirements are clearly outlined and strictly enforced.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // Page 13 - School Discipline
    {
      title: 'School Discipline',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1a2456] mb-3 md:mb-4">School Discipline</h2>
          <p className="text-sm text-gray-700 mb-4">
            The school has a Disciplinary Committee that consists of trained, qualified, and experienced staff members who have drawn up the following RULES AND REGULATIONS.
          </p>

          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <h3 className="font-bold text-[#1a2456] mb-2">THE DOS</h3>
              <ol className="list-decimal ml-4 space-y-1">
                <li>Always be punctual (8:00 A.M.)</li>
                <li>Always dress neatly in your school uniform</li>
                <li>Always speak ENGLISH in and out of uniform</li>
                <li>Show obedience to school Authorities</li>
                <li>Treat school property with love and respect</li>
                <li>Be open-minded and respect others' perspectives</li>
                <li>Always review your notes and do your best</li>
                <li>Go to the LIBRARY when you have free time</li>
                <li>Uphold our core values</li>
              </ol>
            </div>

            <div>
              <h3 className="font-bold text-[#1a2456] mb-2">THE DON'TS</h3>
              <ol className="list-decimal ml-4 space-y-1">
                <li>No late arrivals or absenteeism</li>
                <li>No stylish haircuts or fancy braids</li>
                <li>No smoking of cigarettes, marijuana, or kush</li>
                <li>No use of any harmful drugs</li>
                <li>No destruction of school property</li>
                <li>No fighting, stealing, or abusive language</li>
                <li>No loitering, truancy, or littering</li>
                <li>No form of sexual harassment</li>
                <li>No examination malpractice or plagiarism</li>
                <li>Do not criticize another person's religious beliefs</li>
              </ol>
            </div>
          </div>
        </div>
      )
    },
    // Page 14 - Community-Teacher Association
    {
      title: 'Community-Teacher Association',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a2456] mb-4 md:mb-6 border-b-4 border-[#00c853] pb-2 inline-block">
            Community-Teacher Association
          </h2>
          <div className="mt-4 md:mt-6 space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
            <p>
              The Community–Teacher Association (CTA) is a vital part of our school community, fostering collaboration and communication between parents, teachers, and staff. Our CTA is dedicated to supporting educational experiences for all students.
            </p>

            {/* INSERT IMAGE HERE - CTA & Admin photo */}
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center my-4 border border-gray-300">
              <span className="text-gray-500">[CTA & Administration Photo]</span>
            </div>

            <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#1a2456] mb-2 md:mb-3">Activities</h3>
            <p>The CTA organizes various activities throughout the academic year:</p>

            <ul className="list-disc ml-6 space-y-2">
              <li>The CTA helps facilitate parent-teacher conferences, providing a platform for parents and teachers to discuss student progress and set goals.</li>
              <li>The CTA coordinated volunteer opportunities for parents and community members, allowing them to contribute to the school's activities and events.</li>
              <li>The CTA organizes fundraising events to support school programs and initiatives, such as scholarships, extracurricular activities, and facility maintenance.</li>
            </ul>

            <p className="mt-4 font-semibold">
              We invite all parents, teachers, and staff members to join the CTA and become involved in our school community.
            </p>
          </div>
        </div>
      )
    },
    // Page 15 - Contact Us
    {
      title: 'Contact Us',
      content: (
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a2456] mb-4 md:mb-6 border-b-4 border-[#00c853] pb-2 inline-block">
            Contact Us
          </h2>
          <div className="mt-6 space-y-6 text-gray-700">
            <p className="text-lg">
              We are excited to hear from you. If you have any questions or would like to learn more about our school, please don't hesitate to contact us:
            </p>

            <div className="space-y-4 bg-gray-50 p-6 border border-gray-300">
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-[#1a2456] mb-1">Proprietor:</h4>
                  <p className="text-sm">Phone: +001-215-941-0594 / +232-34-819-794</p>
                  <p className="text-sm">Email: proprietor.giamakeni.sl@gmail.com</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1a2456] mb-1">School Administration:</h4>
                  <p className="text-sm">Phone: +232-79-485-638</p>
                  <p className="text-sm">Email: josephskabia88@gmail.com</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1a2456] mb-1">Admissions Office:</h4>
                  <p className="text-sm">Phone: +232-77-580-136</p>
                  <p className="text-sm">Email: karankaykoroma9534@gmail.com</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1a2456] mb-1">Finance Officer:</h4>
                  <p className="text-sm">Phone: +232-32-459-300</p>
                  <p className="text-sm">Email: mariamagia2008@gmail.com</p>
                </div>
              </div>
            </div>

            {/* INSERT IMAGE HERE - School map/location */}
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center border border-gray-300">
              <span className="text-gray-500">[School Location Map]</span>
            </div>

            <p className="text-center text-xl font-bold text-[#1a2456] mt-8">
              Thanks for choosing our school!
            </p>
          </div>
        </div>
      )
    },
    // Back Cover
    {
      title: 'Back Cover',
      content: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#00c853] to-[#00a843] text-white p-8">
          <img src={logo} alt="GIA Logo" className="w-24 h-24 mb-6 bg-white rounded-full p-4" />
          <h2 className="text-2xl font-bold text-center mb-4">GBONKOLENKEN INTERNATIONAL ACADEMY</h2>
          <p className="text-center text-lg mb-2">Makeni - Sierra Leone</p>
          <div className="w-16 h-1 bg-white mb-6"></div>
          <p className="text-center text-sm">
           Seat of Wisdom
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-1 md:py-2 pb-16">
      <div className="w-full mx-auto">
        <div className="text-center mb-1 md:mb-2">
          <h1 className="text-lg md:text-2xl font-bold text-[#1a2456] mb-0.5">GIA School Prospectus</h1>
          <p className="text-xs text-gray-600">Click and drag to flip pages</p>
        </div>

        <div className="flex justify-center mb-1 md:mb-2 w-full">
            <HTMLFlipBook
              width={dimensions.width}
              height={dimensions.height}
              size="fixed"
              minWidth={280}
              maxWidth={3000}
              minHeight={380}
              maxHeight={3000}
              maxShadowOpacity={0.5}
              showCover={false}
              mobileScrollSupport={true}
              usePortrait={dimensions.isMobile}
              ref={flipBookRef}
              className="demo-book"
            >
              {pages.map((page, index) => (
                <div key={index} className="page bg-white border border-gray-300 shadow-lg overflow-y-auto" style={{ height: '100%' }}>
                  {page.content}
                </div>
              ))}
            </HTMLFlipBook>
        </div>

        <div className="flex justify-center gap-3 mt-2">
          <button
            onClick={() => flipBookRef.current?.pageFlip().flipPrev()}
            className="px-5 py-1.5 bg-[#1a2456] text-white text-sm font-semibold hover:bg-[#2a3466] transition-colors rounded"
          >
            ← Previous
          </button>
          <button
            onClick={() => flipBookRef.current?.pageFlip().flipNext()}
            className="px-5 py-1.5 bg-[#00c853] text-white text-sm font-semibold hover:bg-[#00a843] transition-colors rounded"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prospectus;
