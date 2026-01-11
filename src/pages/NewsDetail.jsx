import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NewsDetail = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);
    const [relatedNews, setRelatedNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchNewsDetail();
        fetchRelatedNews();
    }, [id]);

    const fetchNewsDetail = async () => {
        setLoading(true);
        try {
            const docRef = doc(db, 'news', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setNews({ id: docSnap.id, ...docSnap.data() });
            }
        } catch (error) {
            console.error('Error fetching news detail:', error);
        }
        setLoading(false);
    };

    const fetchRelatedNews = async () => {
        try {
            const q = query(collection(db, 'news'), orderBy('createdAt', 'desc'), limit(10));
            const querySnapshot = await getDocs(q);
            const items = querySnapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(item => item.id !== id)
                .slice(0, 5);
            setRelatedNews(items);
        } catch (error) {
            console.error('Error fetching related news:', error);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-white animate-pulse">
                <div className="h-[60vh] bg-gray-100 w-full" />
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="h-12 bg-gray-100 w-3/4 rounded" />
                            <div className="h-6 bg-gray-100 w-1/4 rounded" />
                            <div className="space-y-4 pt-8">
                                <div className="h-4 bg-gray-100 w-full" />
                                <div className="h-4 bg-gray-100 w-full" />
                                <div className="h-4 bg-gray-100 w-2/3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!news) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl font-bold text-[#1a2456] mb-4">News Item Not Found</h2>
                <p className="text-gray-600 mb-8">The news article you are looking for might have been removed.</p>
                <Link to="/news-events" className="bg-[#00c853] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#00a844] transition-colors">
                    Back to News
                </Link>
            </div>
        );
    }

    const images = news.images && news.images.length > 0 ? news.images : [news.imageUrl].filter(Boolean);

    // Dynamic placement logic: Check for [IMAGE] tag first, then fallback to automatic split
    let firstHalf, secondHalf;
    const hasImageTag = news.description.includes('[IMAGE]');

    if (hasImageTag) {
        const parts = news.description.split('[IMAGE]');
        firstHalf = parts[0];
        secondHalf = parts.slice(1).join('[IMAGE]'); // In case there are multiple tags, join the rest
    } else {
        const paragraphs = news.description.split('\n\n');
        const midPoint = Math.ceil(paragraphs.length / 2);
        firstHalf = paragraphs.slice(0, midPoint).join('\n\n');
        secondHalf = paragraphs.slice(midPoint).join('\n\n');
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <main className="flex-1">
                {/* 1. Hero Section Image (images[0]) */}
                <div className="relative w-full h-[10vh] md:h-[65vh] bg-black overflow-hidden">
                    <img
                        src={images[0]}
                        alt={news.title}
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-16">
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-4">
                                <span className="bg-[#00c853] text-white text-xs font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm">
                                    School News
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] md:max-w-5xl mb-6">
                                {news.title}
                            </h1>
                            <div className="flex items-center gap-6 text-white/90 font-bold text-sm tracking-wide">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#00c853]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 13h-5V7h2v4h3v2z" />
                                    </svg>
                                    {formatDate(news.date)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Content Section */}
                <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
                    <div className="grid lg:grid-cols-12 gap-16">
                        {/* Main Article Content */}
                        <div className="lg:col-span-8 flex flex-col">

                            {/* 2. Intro Image (images[1]) */}
                            {images[1] && (
                                <div className="mb-12 rounded-sm overflow-hidden shadow-xl">
                                    <img src={images[1]} alt="" className="w-full h-auto object-cover" />
                                </div>
                            )}

                            <div className="prose prose-xl md:prose-2xl max-w-none text-gray-800 leading-[1.8] font-normal tracking-tight whitespace-pre-wrap">
                                {firstHalf}
                            </div>

                            {/* 3. Middle Image (images[2]) */}
                            {images[2] && (
                                <div className="my-16 md:my-20">
                                    <div className="relative group">
                                        <img src={images[2]} alt="" className="w-full h-auto rounded-sm shadow-2xl" />
                                        <div className="absolute bottom-4 left-4">
                                            <span className="bg-black/50 backdrop-blur-md text-white/90 text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                                                Visual Insight
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="prose prose-xl md:prose-2xl max-w-none text-gray-800 leading-[1.8] font-normal tracking-tight whitespace-pre-wrap">
                                {secondHalf}
                            </div>

                            {/* Additional Images (the rest) */}
                            {images.length > 3 && (
                                <div className="mt-16 grid grid-cols-2 gap-4">
                                    {images.slice(3).map((img, idx) => (
                                        <div key={idx} className="aspect-video rounded-sm overflow-hidden shadow-lg">
                                            <img src={img} alt="" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Share & Actions */}
                            <div className="mt-16 pt-10 border-t-2 border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="flex items-center gap-6">
                                    <span className="text-gray-400 font-black uppercase text-xs tracking-widest">Share this story</span>
                                    <div className="flex gap-4">
                                        <button className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-100 hover:border-[#00c853] hover:text-[#00c853] transition-all duration-300">
                                            <span className="font-bold text-xs">FB</span>
                                        </button>
                                        <button className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-100 hover:border-[#00c853] hover:text-[#00c853] transition-all duration-300">
                                            <span className="font-bold text-xs">X</span>
                                        </button>
                                        <button className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-100 hover:border-[#00c853] hover:text-[#00c853] transition-all duration-300">
                                            <span className="font-bold text-xs">WA</span>
                                        </button>
                                    </div>
                                </div>
                                <Link to="/news-events" className="inline-flex items-center gap-3 font-black text-[#1a2456] hover:text-[#00c853] uppercase text-xs tracking-[0.2em] transition-colors group">
                                    <svg className="w-5 h-5 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                    </svg>
                                    Back to Archive
                                </Link>
                            </div>
                        </div>

                        {/* Sidebar - Related News */}
                        <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-sm font-black text-[#1a2456] uppercase tracking-[0.3em] mb-8 pb-4 border-b-4 border-[#00c853] inline-block">
                                        More Updates
                                    </h3>
                                    <div className="flex flex-col gap-10">
                                        {relatedNews.map((item) => (
                                            <Link key={item.id} to={`/news/${item.id}`} className="group block">
                                                <div className="flex flex-col gap-3">
                                                    <p className="text-[10px] font-black text-[#00c853] uppercase tracking-widest">
                                                        {formatDate(item.date)}
                                                    </p>
                                                    <h4 className="text-lg font-extrabold text-[#1a2456] leading-snug group-hover:text-[#00c853] group-hover:underline decoration-2 underline-offset-4 transition-all transition-colors duration-300">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Newsletter/CTA Sticky Box */}
                                <div className="bg-[#1a2456] p-8 rounded-sm text-white shadow-2xl relative overflow-hidden group">
                                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#00c853] opacity-20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                                    <h3 className="text-xl font-black mb-4 relative z-10">GIA Community</h3>
                                    <p className="text-white/70 text-sm mb-8 leading-relaxed relative z-10">
                                        Join our mission to provide world-class education. Have questions about our news or events?
                                    </p>
                                    <Link to="/contact-us" className="inline-block w-full text-center bg-[#00c853] text-white py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#1a2456] transition-all relative z-10">
                                        Contact Administration
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NewsDetail;
