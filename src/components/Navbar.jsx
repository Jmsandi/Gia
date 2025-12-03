import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png?url';
import map from '../assets/map.png?url';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      title: 'About us',
      items: [
        { name: 'Proprietor', path: '/proprietor' },
        { name: 'About', path: '/about' },
        { name: 'Board of Directors', path: '/board-of-directors' },
        { name: 'Principal and Staff', path: '/principal-staff' }
      ]
    },
    {
      title: 'Admissions',
      items: [
        { name: 'Admission Process & Policy', path: '/admissions' },
        { name: 'Student Admission Forms', path: '/admission-forms' },
        { name: 'School Tuition/Charges', path: '/tuition-charges' }
      ]
    },
    {
      title: 'Curriculum',
      items: [
        { name: 'Curriculum Overview', path: '/curriculum' }
      ]
    },
    {
      title: 'News & Events',
      items: [
        { name: 'Announcement', path: '/announcements' },
        { name: 'School Activities/Events', path: '/activities-events' }
      ]
    },
    {
      title: 'Students/Parents',
      items: [
        { name: 'GIA Calendar', path: '/calendar' },
        { name: 'Student Handbook', path: '/student-handbook' }
      ],
      isGreen: true
    }
  ];

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Section with Logo, Title, and Map */}
      <div className="bg-[#1a2456] py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="GIA Logo" className="h-20 w-20 sm:h-24 sm:w-24" />
          </div>

          {/* School Name */}
          <div className="flex-1 text-center px-4">
            <h1 className="text-white text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold">
              GBONKOLENKEN INTERNATIONAL ACADEMY MAKENI - SL
            </h1>
          </div>

          {/* Map */}
          <div className="flex-shrink-0">
            <img src={map} alt="Sierra Leone Map" className="h-20 w-20 sm:h-24 sm:w-24" />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-4 py-4 text-base font-bold transition-colors ${
                    item.isGreen
                      ? 'text-[#00c853] hover:text-[#00e676]'
                      : 'text-[#1a2456] hover:text-[#00c853]'
                  }`}
                >
                  {item.title}
                </button>

                {/* Dropdown Menu */}
                {item.items.length > 0 && activeDropdown === index && (
                  <div className="absolute left-0 top-full bg-white border border-gray-200 py-2 min-w-[250px] z-50 animate-fadeIn">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className={`group relative block px-6 py-3 font-bold transition-all duration-300 hover:pl-10 ${
                          item.isGreen
                            ? 'text-[#00c853] hover:bg-gray-100'
                            : 'text-[#1a2456] hover:bg-gray-100'
                        }`}
                      >
                        <span className="absolute left-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          →
                        </span>
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center justify-between py-4">
            <span className="text-[#1a2456] font-bold text-lg">Menu</span>
            <button
              onClick={toggleMobileMenu}
              className="text-[#1a2456] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pb-4">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === index ? null : index)
                    }
                    className={`w-full text-left px-4 py-3 font-bold flex items-center justify-between ${
                      item.isGreen
                        ? 'text-[#00c853]'
                        : 'text-[#1a2456]'
                    }`}
                  >
                    {item.title}
                    {item.items.length > 0 && (
                      <svg
                        className={`w-5 h-5 transition-transform ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Mobile Dropdown Items */}
                  {item.items.length > 0 && activeDropdown === index && (
                    <div className="bg-gray-50">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className={`group relative block px-8 py-2 font-semibold transition-all duration-300 hover:pl-12 ${
                            item.isGreen
                              ? 'text-[#00c853]'
                              : 'text-[#1a2456]'
                          }`}
                        >
                          <span className="absolute left-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            →
                          </span>
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
