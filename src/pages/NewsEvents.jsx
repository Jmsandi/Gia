import hero from '../assets/hero.jpg?url';
import hero2 from '../assets/hero2.png?url';
import hero3 from '../assets/hero3.png?url';

const NewsEvents = () => {
  const newsCards = [
    {
      id: 1,
      image: hero,
      title: 'Annual Sports Day 2024',
      description: 'Our students showcased their athletic talents and team spirit at the annual sports day celebration. A day filled with competitions, sportsmanship, and unforgettable moments.',
      date: 'November 15, 2024'
    },
    {
      id: 2,
      image: hero2,
      title: 'Science Fair Success',
      description: 'GIA students presented innovative science projects that impressed judges and parents alike. Our young scientists continue to push boundaries in STEM education.',
      date: 'November 10, 2024'
    },
    {
      id: 3,
      image: hero3,
      title: 'Community Outreach Program',
      description: 'Our students participated in a community service initiative, demonstrating the values of compassion and social responsibility that we instill at GIA.',
      date: 'November 5, 2024'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Green Line */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2456] inline-block pb-3 border-b-4 border-[#00c853]">
            News & Events
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsCards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-200 overflow-hidden transition-transform duration-300 hover:border-[#00c853] hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-sm text-[#00c853] font-semibold mb-2">
                  {card.date}
                </p>
                <h3 className="text-xl font-bold text-[#1a2456] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {card.description}
                </p>
                <button className="text-[#1a2456] font-semibold hover:text-[#00c853] transition-colors duration-300 flex items-center gap-2">
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
