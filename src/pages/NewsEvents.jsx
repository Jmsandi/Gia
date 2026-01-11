import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

// Fallback images for news items without custom images
import hero from '../assets/hero.jpg?url';
import hero2 from '../assets/hero2.png?url';
import hero3 from '../assets/hero3.png?url';

const fallbackImages = [hero, hero2, hero3];

const NewsCard = ({ card, formatDate, fallbackImages }) => {
  const images = card.images && card.images.length > 0 ? card.images : [card.image || card.imageUrl].filter(Boolean);
  const displayImage = images.length > 0 ? images[0] : fallbackImages[0];

  return (
    <div className="group bg-white flex flex-col h-full transition-all duration-300">
      {/* Card Image */}
      <div className="w-full aspect-[16/10] overflow-hidden relative mb-5 rounded-sm">
        <Link to={`/news/${card.id}`} className="block w-full h-full">
          <img
            src={displayImage}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.target.src = fallbackImages[0];
            }}
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </Link>

        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-[#00c853] text-white text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm shadow-sm">
            School News
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 px-1">
        <div className="mb-3">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            {formatDate(card.date)}
          </p>
        </div>

        <Link to={`/news/${card.id}`}>
          <h3 className="text-xl md:text-2xl font-extrabold text-[#1a2456] mb-3 leading-[1.2] group-hover:text-[#00c853] transition-colors duration-300 decoration-[#00c853] decoration-2 underline-offset-4 group-hover:underline">
            {card.title}
          </h3>
        </Link>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {card.description}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <Link
            to={`/news/${card.id}`}
            className="text-[12px] font-black text-[#1a2456] uppercase tracking-tighter hover:text-[#00c853] transition-colors duration-300 flex items-center gap-2 group/link"
          >
            Full Story
            <svg
              className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

const NewsEvents = () => {
  const [newsCards, setNewsCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const q = query(collection(db, 'news'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map((doc, index) => ({
        id: doc.id,
        ...doc.data(),
        // Support for both imageUrl (legacy) and images array
      }));

      // If no items in Firestore, use default content
      if (items.length === 0) {
        setNewsCards([
          {
            id: 'd1',
            image: hero,
            title: 'Annual Sports Day 2024',
            description: 'Our students showcased their athletic talents and team spirit at the annual sports day celebration. A day filled with competitions, sportsmanship, and unforgettable moments.',
            date: 'November 15, 2024'
          },
          {
            id: 'd2',
            image: hero2,
            title: 'Science Fair Success',
            description: 'GIA students presented innovative science projects that impressed judges and parents alike. Our young scientists continue to push boundaries in STEM education.',
            date: 'November 10, 2024'
          },
          {
            id: 'd3',
            image: hero3,
            title: 'Community Outreach Program',
            description: 'Our students participated in a community service initiative, demonstrating the values of compassion and social responsibility that we instill at GIA.',
            date: 'November 5, 2024'
          }
        ]);
      } else {
        setNewsCards(items);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      setNewsCards([]);
    }
    setLoading(false);
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2456] inline-block pb-3 border-b-4 border-[#00c853]">
              News & Events
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-gray-200 overflow-hidden animate-pulse rounded-lg">
                <div className="w-full h-64 bg-gray-200"></div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Green Line */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2456] inline-block pb-3 border-b-4 border-[#00c853]">
              News & Events
            </h2>
            <p className="text-gray-600 mt-4 text-lg">Stay updated with the latest happenings at GIA</p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsCards.map((card) => (
            <NewsCard
              key={card.id}
              card={card}
              formatDate={formatDate}
              fallbackImages={fallbackImages}
            />
          ))}
          {newsCards.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 max-w-md mx-auto">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 2v6h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a2456] mb-2">No news items found</h3>
                <p className="text-gray-500">Check back later for exciting news and events from GIA.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
