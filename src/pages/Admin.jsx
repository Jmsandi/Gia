import { useState, useEffect } from 'react';
import imageCompression from 'browser-image-compression';
import { db, storage } from '../firebase';
import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    deleteDoc,
    doc,
    updateDoc,
    orderBy,
    query,
    serverTimestamp
} from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState('news');
    const [loading, setLoading] = useState(false);
    const [loginLoading, setLoginLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    // Data states
    const [newsItems, setNewsItems] = useState([]);
    const [announcements, setAnnouncements] = useState([]);
    const [activities, setActivities] = useState([]);

    // Form states
    const [newsForm, setNewsForm] = useState({ title: '', description: '', imageUrl: '', date: '' });
    const [announcementForm, setAnnouncementForm] = useState({ title: '', content: '', priority: 'normal', date: '' });
    const [activityForm, setActivityForm] = useState({ title: '', description: '', date: '', location: '' });

    // Image upload states (multiple images)
    const [imageFiles, setImageFiles] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploading, setUploading] = useState(false);

    // Edit states
    const [editingNews, setEditingNews] = useState(null);
    const [editingAnnouncement, setEditingAnnouncement] = useState(null);
    const [editingActivity, setEditingActivity] = useState(null);

    // Handle multiple image file selection with compression
    const handleImageSelect = async (e) => {
        const files = Array.from(e.target.files);
        const validFiles = [];
        const previews = [];

        setLoading(true);
        setMessage({ type: 'info', text: 'Optimizing images...' });

        const options = {
            maxSizeMB: 0.5, // 500KB
            maxWidthOrHeight: 2560, // Increased for higher resolution
            useWebWorker: true
        };

        try {
            for (const file of files) {
                if (!file.type.startsWith('image/')) {
                    setMessage({ type: 'error', text: 'Please select only image files' });
                    continue;
                }

                try {
                    const compressedFile = await imageCompression(file, options);
                    validFiles.push(compressedFile);
                    previews.push(URL.createObjectURL(compressedFile));
                } catch (error) {
                    console.error('Compression error:', error);
                    validFiles.push(file); // Fallback to original if compression fails
                    previews.push(URL.createObjectURL(file));
                }
            }

            setImageFiles(prev => [...prev, ...validFiles]);
            setImagePreviews(prev => [...prev, ...previews]);
            setMessage({ type: 'success', text: `Images optimized successfully!` });
        } catch (error) {
            console.error('Selection error:', error);
            setMessage({ type: 'error', text: 'Error processing images' });
        } finally {
            setLoading(false);
            // Clear message after 3 seconds if it's a success
            setTimeout(() => setMessage({ type: '', text: '' }), 3000);
        }
    };

    // Remove a specific image from selection
    const removeImage = (index) => {
        setImageFiles(prev => prev.filter((_, i) => i !== index));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    // Upload single image to Firebase Storage
    const uploadImage = async (file, index, total) => {
        return new Promise((resolve, reject) => {
            const fileName = `news/${Date.now()}_${index}_${file.name}`;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const fileProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    const overallProgress = ((index * 100) + fileProgress) / total;
                    setUploadProgress(Math.round(overallProgress));
                },
                (error) => {
                    console.error('Upload error:', error);
                    reject(error);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve(downloadURL);
                }
            );
        });
    };

    // Upload all selected images
    const uploadAllImages = async (files) => {
        const urls = [];
        for (let i = 0; i < files.length; i++) {
            const url = await uploadImage(files[i], i, files.length);
            urls.push(url);
        }
        return urls;
    };

    // Clear all image selections
    const clearImages = () => {
        setImageFiles([]);
        setImagePreviews([]);
        setUploadProgress(0);
    };

    // Fetch admin password from Firestore and validate
    // To set password: In Firebase Console, create collection "settings" with document "admin"
    // Add field "password" with your desired admin password
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginLoading(true);
        try {
            const settingsRef = doc(db, 'settings', 'admin');
            const settingsDoc = await getDoc(settingsRef);

            if (!settingsDoc.exists()) {
                setMessage({
                    type: 'error',
                    text: 'Admin settings not found. Please set up password in Firebase Console: settings/admin/password'
                });
                setLoginLoading(false);
                return;
            }

            const adminPassword = settingsDoc.data().password;

            if (password === adminPassword) {
                setIsAuthenticated(true);
                setMessage({ type: '', text: '' });
            } else {
                setMessage({ type: 'error', text: 'Invalid password' });
            }
        } catch (error) {
            console.error('Error checking password:', error);
            setMessage({ type: 'error', text: 'Error connecting to database. Please try again.' });
        }
        setLoginLoading(false);
    };

    // Fetch all data
    useEffect(() => {
        if (isAuthenticated) {
            fetchNews();
            fetchAnnouncements();
            fetchActivities();
        }
    }, [isAuthenticated]);

    const fetchNews = async () => {
        try {
            const q = query(collection(db, 'news'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setNewsItems(items);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    const fetchAnnouncements = async () => {
        try {
            const q = query(collection(db, 'announcements'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setAnnouncements(items);
        } catch (error) {
            console.error('Error fetching announcements:', error);
        }
    };

    const fetchActivities = async () => {
        try {
            const q = query(collection(db, 'activities'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setActivities(items);
        } catch (error) {
            console.error('Error fetching activities:', error);
        }
    };

    // News CRUD
    const handleAddNews = async (e) => {
        e.preventDefault();
        setLoading(true);
        setUploading(true);
        try {
            let images = [];

            // Upload all selected images
            if (imageFiles.length > 0) {
                images = await uploadAllImages(imageFiles);
            }

            // Add any URL if no files uploaded
            if (newsForm.imageUrl && images.length === 0) {
                images.push(newsForm.imageUrl);
            }

            await addDoc(collection(db, 'news'), {
                title: newsForm.title,
                description: newsForm.description,
                date: newsForm.date,
                images, // Array of image URLs
                imageUrl: images[0] || '', // Keep first image as main for backward compatibility
                createdAt: serverTimestamp()
            });
            setNewsForm({ title: '', description: '', imageUrl: '', date: '' });
            clearImages();
            setMessage({ type: 'success', text: 'News item added successfully!' });
            fetchNews();
        } catch (error) {
            setMessage({ type: 'error', text: 'Error adding news: ' + error.message });
        }
        setLoading(false);
        setUploading(false);
    };

    const handleUpdateNews = async (e) => {
        e.preventDefault();
        setLoading(true);
        setUploading(true);
        try {
            // Get existing images from editingNews
            let images = editingNews.images || [];

            // Upload new images if any selected
            if (imageFiles.length > 0) {
                const newUrls = await uploadAllImages(imageFiles);
                images = [...images, ...newUrls];
            }

            // Add URL if provided and no new files
            if (newsForm.imageUrl && !images.includes(newsForm.imageUrl)) {
                images.push(newsForm.imageUrl);
            }

            await updateDoc(doc(db, 'news', editingNews.id), {
                title: newsForm.title,
                description: newsForm.description,
                date: newsForm.date,
                images,
                imageUrl: images[0] || ''
            });
            setEditingNews(null);
            setNewsForm({ title: '', description: '', imageUrl: '', date: '' });
            clearImages();
            setMessage({ type: 'success', text: 'News item updated successfully!' });
            fetchNews();
        } catch (error) {
            setMessage({ type: 'error', text: 'Error updating news: ' + error.message });
        }
        setLoading(false);
        setUploading(false);
    };

    const handleDeleteNews = async (id) => {
        if (!confirm('Are you sure you want to delete this news item?')) return;
        try {
            await deleteDoc(doc(db, 'news', id));
            setMessage({ type: 'success', text: 'News item deleted successfully!' });
            fetchNews();
        } catch (error) {
            setMessage({ type: 'error', text: 'Error deleting news: ' + error.message });
        }
    };

    // Announcement CRUD
    const handleAddAnnouncement = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addDoc(collection(db, 'announcements'), {
                ...announcementForm,
                createdAt: serverTimestamp()
            });
            setAnnouncementForm({ title: '', content: '', priority: 'normal', date: '' });
            setMessage({ type: 'success', text: 'Announcement added successfully!' });
            fetchAnnouncements();
        } catch (error) {
            setMessage({ type: 'error', text: 'Error adding announcement: ' + error.message });
        }
        setLoading(false);
    };

    const handleUpdateAnnouncement = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateDoc(doc(db, 'announcements', editingAnnouncement.id), announcementForm);
            setEditingAnnouncement(null);
            setAnnouncementForm({ title: '', content: '', priority: 'normal', date: '' });
            setMessage({ type: 'success', text: 'Announcement updated successfully!' });
            fetchAnnouncements();
        } catch (error) {
            setMessage({ type: 'error', text: 'Error updating announcement: ' + error.message });
        }
        setLoading(false);
    };

    const handleDeleteAnnouncement = async (id) => {
        if (!confirm('Are you sure you want to delete this announcement?')) return;
        try {
            await deleteDoc(doc(db, 'announcements', id));
            setMessage({ type: 'success', text: 'Announcement deleted successfully!' });
            fetchAnnouncements();
        } catch (error) {
            setMessage({ type: 'error', text: 'Error deleting announcement: ' + error.message });
        }
    };

    // Activity CRUD
    const handleAddActivity = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addDoc(collection(db, 'activities'), {
                ...activityForm,
                createdAt: serverTimestamp()
            });
            setActivityForm({ title: '', description: '', date: '', location: '' });
            setMessage({ type: 'success', text: 'Activity added successfully!' });
            fetchActivities();
        } catch (error) {
            setMessage({ type: 'error', text: 'Error adding activity: ' + error.message });
        }
        setLoading(false);
    };

    const handleUpdateActivity = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateDoc(doc(db, 'activities', editingActivity.id), activityForm);
            setEditingActivity(null);
            setActivityForm({ title: '', description: '', date: '', location: '' });
            setMessage({ type: 'success', text: 'Activity updated successfully!' });
            fetchActivities();
        } catch (error) {
            setMessage({ type: 'error', text: 'Error updating activity: ' + error.message });
        }
        setLoading(false);
    };

    const handleDeleteActivity = async (id) => {
        if (!confirm('Are you sure you want to delete this activity?')) return;
        try {
            await deleteDoc(doc(db, 'activities', id));
            setMessage({ type: 'success', text: 'Activity deleted successfully!' });
            fetchActivities();
        } catch (error) {
            setMessage({ type: 'error', text: 'Error deleting activity: ' + error.message });
        }
    };

    // Login Screen
    if (!isAuthenticated) {
        return (
            <section className="min-h-screen bg-gradient-to-br from-[#1a2456] to-[#0d1333] flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="bg-[#00c853] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-[#1a2456]">Admin Login</h1>
                        <p className="text-gray-600 mt-2">Enter your password to access the dashboard</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c853] focus:border-transparent transition-all"
                                placeholder="Enter admin password"
                                required
                            />
                        </div>

                        {message.type === 'error' && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                                {message.text}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loginLoading}
                            className="w-full bg-[#1a2456] hover:bg-[#0d1333] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loginLoading ? 'Verifying...' : 'Login'}
                        </button>
                    </form>
                </div>
            </section>
        );
    }

    // Admin Dashboard
    return (
        <section className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-[#1a2456] text-white py-6 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold">GIA Admin Dashboard</h1>
                        <p className="text-gray-300 text-sm">Manage news, announcements, and activities</p>
                    </div>
                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Message Alert */}
            {message.text && (
                <div className="max-w-7xl mx-auto px-4 md:px-8 mt-4">
                    <div className={`px-4 py-3 rounded-lg ${message.type === 'success' ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'}`}>
                        {message.text}
                        <button onClick={() => setMessage({ type: '', text: '' })} className="float-right font-bold">×</button>
                    </div>
                </div>
            )}

            {/* Tabs */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6">
                <div className="flex gap-2 border-b border-gray-200">
                    {['news', 'announcements', 'activities'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 font-medium capitalize transition-colors ${activeTab === tab ? 'text-[#00c853] border-b-2 border-[#00c853]' : 'text-gray-600 hover:text-[#1a2456]'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
                {/* News Tab */}
                {activeTab === 'news' && (
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Form */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-bold text-[#1a2456] mb-6">
                                {editingNews ? 'Edit News Item' : 'Add News Item'}
                            </h2>
                            <form onSubmit={editingNews ? handleUpdateNews : handleAddNews} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                    <input
                                        type="text"
                                        value={newsForm.title}
                                        onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c853] focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea
                                        value={newsForm.description}
                                        onChange={(e) => setNewsForm({ ...newsForm, description: e.target.value })}
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c853] focus:border-transparent"
                                        required
                                    />
                                    <p className="text-[10px] text-gray-400 mt-1 italic">
                                        Tip: Type <span className="font-bold text-[#00c853]">[IMAGE]</span> anywhere in the text to place the 'Middle' photo at that exact spot.
                                    </p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Images</label>

                                    {/* Multiple Image Previews Grid with Placement Labels */}
                                    {(imagePreviews.length > 0 || (editingNews?.images?.length > 0)) && (
                                        <div className="mb-4">
                                            <p className="text-[10px] font-black uppercase tracking-tighter text-gray-400 mb-2">Image Placement Guide</p>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                {/* Existing images when editing */}
                                                {editingNews?.images?.map((url, index) => {
                                                    let label = index === 0 ? "Hero" : index === 1 ? "Intro" : index === 2 ? "Middle" : `Gallery ${index - 2}`;
                                                    return (
                                                        <div key={`existing-${index}`} className="relative group">
                                                            <img
                                                                src={url}
                                                                alt={`Existing ${index + 1}`}
                                                                className="w-full h-24 object-cover rounded-sm border border-gray-200"
                                                            />
                                                            <div className="absolute top-0 left-0 w-full h-full bg-black/20 group-hover:bg-black/40 transition-colors" />
                                                            <span className="absolute top-2 left-2 bg-[#1a2456] text-white text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-sm shadow-sm">
                                                                {label}
                                                            </span>
                                                            <span className="absolute bottom-2 right-2 bg-blue-500/90 text-white text-[8px] font-bold px-1 rounded-sm">
                                                                Saved
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                                {/* New image previews */}
                                                {imagePreviews.map((preview, index) => {
                                                    // Offset label by existing images if editing
                                                    const totalIdx = (editingNews?.images?.length || 0) + index;
                                                    let label = totalIdx === 0 ? "Hero" : totalIdx === 1 ? "Intro" : totalIdx === 2 ? "Middle" : `Gallery ${totalIdx - 2}`;

                                                    return (
                                                        <div key={`new-${index}`} className="relative group">
                                                            <img
                                                                src={preview}
                                                                alt={`Preview ${index + 1}`}
                                                                className="w-full h-24 object-cover rounded-sm border-2 border-[#00c853]/50"
                                                            />
                                                            <div className="absolute top-0 left-0 w-full h-full bg-black/10 group-hover:bg-black/30 transition-colors" />
                                                            <span className="absolute top-2 left-2 bg-[#00c853] text-white text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-sm shadow-sm">
                                                                {label}
                                                            </span>
                                                            <button
                                                                type="button"
                                                                onClick={() => removeImage(index)}
                                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600 shadow-md z-10"
                                                            >
                                                                ×
                                                            </button>
                                                            <span className="absolute bottom-2 right-2 bg-green-500/90 text-white text-[8px] font-bold px-1 rounded-sm">
                                                                New
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {/* Upload Progress */}
                                    {uploading && uploadProgress > 0 && (
                                        <div className="mb-3">
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-[#00c853] h-2 rounded-full transition-all duration-300"
                                                    style={{ width: `${uploadProgress}%` }}
                                                ></div>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">Uploading... {uploadProgress}%</p>
                                        </div>
                                    )}

                                    {/* File Input - Multiple */}
                                    <div className="flex gap-2">
                                        <label className="flex-1 cursor-pointer">
                                            <div className="flex items-center justify-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#00c853] transition-colors">
                                                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-sm text-gray-600">
                                                    {imageFiles.length > 0 ? `${imageFiles.length} image(s) selected` : 'Choose images'}
                                                </span>
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                onChange={handleImageSelect}
                                                className="hidden"
                                            />
                                        </label>
                                        {imageFiles.length > 0 && (
                                            <button
                                                type="button"
                                                onClick={clearImages}
                                                className="px-3 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 text-sm"
                                            >
                                                Clear All
                                            </button>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Select multiple images (max 5MB each) or add URL below</p>
                                    <input
                                        type="url"
                                        value={newsForm.imageUrl}
                                        onChange={(e) => setNewsForm({ ...newsForm, imageUrl: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c853] focus:border-transparent mt-2"
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                    <input
                                        type="date"
                                        value={newsForm.date}
                                        onChange={(e) => setNewsForm({ ...newsForm, date: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c853] focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="flex-1 bg-[#00c853] hover:bg-[#00a844] text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                                    >
                                        {loading ? 'Saving...' : (editingNews ? 'Update' : 'Add News')}
                                    </button>
                                    {editingNews && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setEditingNews(null);
                                                setNewsForm({ title: '', description: '', imageUrl: '', date: '' });
                                            }}
                                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>

                        {/* List */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-bold text-[#1a2456] mb-6">News Items ({newsItems.length})</h2>
                            <div className="space-y-4 max-h-[600px] overflow-y-auto">
                                {newsItems.map((item) => (
                                    <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:border-[#00c853] transition-colors">
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-[#1a2456]">{item.title}</h3>
                                                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                                                <p className="text-xs text-[#00c853] mt-2">{item.date}</p>
                                            </div>
                                            <div className="flex gap-2 ml-4">
                                                <button
                                                    onClick={() => {
                                                        setEditingNews(item);
                                                        setNewsForm({ title: item.title, description: item.description, imageUrl: item.imageUrl || '', date: item.date });
                                                    }}
                                                    className="text-blue-600 hover:text-blue-800"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteNews(item.id)}
                                                    className="text-red-600 hover:text-red-800"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {newsItems.length === 0 && (
                                    <p className="text-gray-500 text-center py-8">No news items yet. Add your first one!</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Announcements Tab */}
                {activeTab === 'announcements' && (
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Form */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-bold text-[#1a2456] mb-6">
                                {editingAnnouncement ? 'Edit Announcement' : 'Add Announcement'}
                            </h2>
                            <form onSubmit={editingAnnouncement ? handleUpdateAnnouncement : handleAddAnnouncement} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                    <input
                                        type="text"
                                        value={announcementForm.title}
                                        onChange={(e) => setAnnouncementForm({ ...announcementForm, title: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c853] focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                                    <textarea
                                        value={announcementForm.content}
                                        onChange={(e) => setAnnouncementForm({ ...announcementForm, content: e.target.value })}
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c853] focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                                    <select
                                        value={announcementForm.priority}
                                        onChange={(e) => setAnnouncementForm({ ...announcementForm, priority: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c853] focus:border-transparent"
                                    >
                                        <option value="low">Low</option>
                                        <option value="normal">Normal</option>
                                        <option value="high">High</option>
                                        <option value="urgent">Urgent</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                    <input
                                        type="date"
                                        value={announcementForm.date}
                                        onChange={(e) => setAnnouncementForm({ ...announcementForm, date: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c853] focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="flex-1 bg-[#00c853] hover:bg-[#00a844] text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                                    >
                                        {loading ? 'Saving...' : (editingAnnouncement ? 'Update' : 'Add Announcement')}
                                    </button>
                                    {editingAnnouncement && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setEditingAnnouncement(null);
                                                setAnnouncementForm({ title: '', content: '', priority: 'normal', date: '' });
                                            }}
                                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>

                        {/* List */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-bold text-[#1a2456] mb-6">Announcements ({announcements.length})</h2>
                            <div className="space-y-4 max-h-[600px] overflow-y-auto">
                                {announcements.map((item) => (
                                    <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:border-[#00c853] transition-colors">
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-semibold text-[#1a2456]">{item.title}</h3>
                                                    <span className={`text-xs px-2 py-1 rounded-full ${item.priority === 'urgent' ? 'bg-red-100 text-red-700' :
                                                        item.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                                                            item.priority === 'normal' ? 'bg-blue-100 text-blue-700' :
                                                                'bg-gray-100 text-gray-700'
                                                        }`}>
                                                        {item.priority}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.content}</p>
                                                <p className="text-xs text-[#00c853] mt-2">{item.date}</p>
                                            </div>
                                            <div className="flex gap-2 ml-4">
                                                <button
                                                    onClick={() => {
                                                        setEditingAnnouncement(item);
                                                        setAnnouncementForm({ title: item.title, content: item.content, priority: item.priority, date: item.date });
                                                    }}
                                                    className="text-blue-600 hover:text-blue-800"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteAnnouncement(item.id)}
                                                    className="text-red-600 hover:text-red-800"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {announcements.length === 0 && (
                                    <p className="text-gray-500 text-center py-8">No announcements yet. Add your first one!</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Activities Tab */}
                {activeTab === 'activities' && (
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Form */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-bold text-[#1a2456] mb-6">
                                {editingActivity ? 'Edit Activity' : 'Add Activity'}
                            </h2>
                            <form onSubmit={editingActivity ? handleUpdateActivity : handleAddActivity} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                    <input
                                        type="text"
                                        value={activityForm.title}
                                        onChange={(e) => setActivityForm({ ...activityForm, title: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c853] focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea
                                        value={activityForm.description}
                                        onChange={(e) => setActivityForm({ ...activityForm, description: e.target.value })}
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c853] focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                    <input
                                        type="date"
                                        value={activityForm.date}
                                        onChange={(e) => setActivityForm({ ...activityForm, date: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c853] focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                    <input
                                        type="text"
                                        value={activityForm.location}
                                        onChange={(e) => setActivityForm({ ...activityForm, location: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c853] focus:border-transparent"
                                        placeholder="e.g., School Auditorium"
                                    />
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="flex-1 bg-[#00c853] hover:bg-[#00a844] text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                                    >
                                        {loading ? 'Saving...' : (editingActivity ? 'Update' : 'Add Activity')}
                                    </button>
                                    {editingActivity && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setEditingActivity(null);
                                                setActivityForm({ title: '', description: '', date: '', location: '' });
                                            }}
                                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>

                        {/* List */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-bold text-[#1a2456] mb-6">Activities ({activities.length})</h2>
                            <div className="space-y-4 max-h-[600px] overflow-y-auto">
                                {activities.map((item) => (
                                    <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:border-[#00c853] transition-colors">
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-[#1a2456]">{item.title}</h3>
                                                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                                                <div className="flex gap-4 mt-2">
                                                    <p className="text-xs text-[#00c853]">{item.date}</p>
                                                    {item.location && <p className="text-xs text-gray-500">📍 {item.location}</p>}
                                                </div>
                                            </div>
                                            <div className="flex gap-2 ml-4">
                                                <button
                                                    onClick={() => {
                                                        setEditingActivity(item);
                                                        setActivityForm({ title: item.title, description: item.description, date: item.date, location: item.location || '' });
                                                    }}
                                                    className="text-blue-600 hover:text-blue-800"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteActivity(item.id)}
                                                    className="text-red-600 hover:text-red-800"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {activities.length === 0 && (
                                    <p className="text-gray-500 text-center py-8">No activities yet. Add your first one!</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Admin;
