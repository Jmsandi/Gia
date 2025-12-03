import logo from '../assets/logo.png?url';

const Footer = () => {
  return (
    <footer className="bg-[#1a2456] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start">
            <img
              src={logo}
              alt="GIA Logo"
              className="h-32 w-32 grayscale opacity-80"
            />
            <p className="mt-4 text-sm text-gray-300 text-center lg:text-left">
              Seat of Wisdom
            </p>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="/proprietor" className="hover:text-[#00c853] transition-colors">
                  Proprietor
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#00c853] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/board-of-directors" className="hover:text-[#00c853] transition-colors">
                  Board of Directors
                </a>
              </li>
              <li>
                <a href="/principal-staff" className="hover:text-[#00c853] transition-colors">
                  Principal & Staff
                </a>
              </li>
            </ul>
          </div>

          {/* Admissions Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Admissions</h3>
            <ul className="space-y-2">
              <li>
                <a href="/admissions" className="hover:text-[#00c853] transition-colors">
                  Admission Process & Policy
                </a>
              </li>
              <li>
                <a href="/admission-forms" className="hover:text-[#00c853] transition-colors">
                  Student Admission Forms
                </a>
              </li>
              <li>
                <a href="/tuition-charges" className="hover:text-[#00c853] transition-colors">
                  School Tuition/Charges
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/curriculum" className="hover:text-[#00c853] transition-colors">
                  Curriculum Overview
                </a>
              </li>
              <li>
                <a href="/announcements" className="hover:text-[#00c853] transition-colors">
                  Announcements
                </a>
              </li>
              <li>
                <a href="/activities-events" className="hover:text-[#00c853] transition-colors">
                  Activities & Events
                </a>
              </li>
              <li>
                <a href="/calendar" className="hover:text-[#00c853] transition-colors">
                  GIA Calendar
                </a>
              </li>
              <li>
                <a href="/student-handbook" className="hover:text-[#00c853] transition-colors">
                  Student Handbook
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <p className="text-gray-300">
                Gbonkolenken International Academy
                <br />
                Makeni - Sierra Leone
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-6">
                {/* Facebook */}
                <a
                  href="#"
                  className="text-white hover:text-[#00c853] transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* X (formerly Twitter) */}
                <a
                  href="#"
                  className="text-white hover:text-[#00c853] transition-colors"
                  aria-label="X"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="text-white hover:text-[#00c853] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Gbonkolenken International Academy Makeni - SL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
