import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

const ActivitiesEvents = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const q = query(collection(db, 'activities'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setActivities(items);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
    setLoading(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <section className="bg-gray-50 py-16 md:py-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a2456] mb-4">School Activities & Events</h1>
            <div className="w-24 h-1 bg-[#00c853] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-1/3 mb-3"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Show placeholder if no activities
  if (activities.length === 0) {
    return (
      <section className="bg-gray-50 py-16 md:py-20 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-12 md:p-16">
            <div className="flex justify-center mb-6">
              <div className="bg-[#00c853] rounded-full p-6">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a2456] mb-4">School Activities & Events</h1>
            <div className="w-24 h-1 bg-[#00c853] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 mb-4">No Activities Yet</p>
            <p className="text-gray-600 leading-relaxed">
              Check back later for information about school activities, events, and upcoming programs at GIA.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-16 md:py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2456] mb-4">School Activities & Events</h1>
          <div className="w-24 h-1 bg-[#00c853] mx-auto"></div>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              {/* Card Top Accent */}
              <div className="h-2 bg-gradient-to-r from-[#1a2456] to-[#00c853]"></div>

              <div className="p-6">
                {/* Date Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#00c853] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {formatDate(item.date)}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-[#1a2456] mb-3 group-hover:text-[#00c853] transition-colors">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Location */}
                {item.location && (
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{item.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesEvents;
