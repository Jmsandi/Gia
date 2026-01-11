import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const q = query(collection(db, 'announcements'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAnnouncements(items);
    } catch (error) {
      console.error('Error fetching announcements:', error);
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

  const getPriorityStyles = (priority) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-500 text-white';
      case 'high':
        return 'bg-orange-500 text-white';
      case 'normal':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  if (loading) {
    return (
      <section className="bg-gray-50 py-16 md:py-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a2456] mb-4">Announcements</h1>
            <div className="w-24 h-1 bg-[#00c853] mx-auto"></div>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-1/4 mb-3"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Show placeholder if no announcements
  if (announcements.length === 0) {
    return (
      <section className="bg-gray-50 py-16 md:py-20 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-12 md:p-16">
            <div className="flex justify-center mb-6">
              <div className="bg-[#1a2456] rounded-full p-6">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a2456] mb-4">Announcements</h1>
            <div className="w-24 h-1 bg-[#00c853] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 mb-4">No Announcements Yet</p>
            <p className="text-gray-600 leading-relaxed">
              Check back later for important updates and announcements from GIA.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-16 md:py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2456] mb-4">Announcements</h1>
          <div className="w-24 h-1 bg-[#00c853] mx-auto"></div>
        </div>

        {/* Announcements List */}
        <div className="space-y-6">
          {announcements.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getPriorityStyles(item.priority)}`}>
                    {item.priority || 'normal'}
                  </span>
                  <span className="text-sm text-[#00c853] font-medium">
                    {formatDate(item.date)}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#1a2456] mb-3">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
