import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ProprietorWelcome from './pages/ProprietorWelcome'
import NewsEvents from './pages/NewsEvents'
import Calendar from './pages/Calendar'
import About from './pages/About'
import PrincipalStaff from './pages/PrincipalStaff'
import AcademicPrograms from './pages/AcademicPrograms'
import Admissions from './pages/Admissions'
import AdmissionForms from './pages/AdmissionForms'
import TuitionCharges from './pages/TuitionCharges'
import Announcements from './pages/Announcements'
import ActivitiesEvents from './pages/ActivitiesEvents'
import Prospectus from './pages/Prospectus'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <div className="print:hidden">
          <Navbar />
        </div>

        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <Hero />

              {/* Proprietor Welcome Section */}
              <ProprietorWelcome />

              {/* News & Events Section */}
              <NewsEvents />
            </>
          } />

          {/* About Pages */}
          <Route path="/proprietor" element={<ProprietorWelcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/principal-staff" element={<PrincipalStaff />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Admissions Pages */}
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/admission-forms" element={<AdmissionForms />} />
          <Route path="/tuition-charges" element={<TuitionCharges />} />

          {/* Curriculum Pages */}
          <Route path="/curriculum" element={<AcademicPrograms />} />

          {/* News & Events Pages */}
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/activities-events" element={<ActivitiesEvents />} />

          {/* Students/Parents Pages */}
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/student-handbook" element={<Prospectus />} />
        </Routes>

        <div className="print:hidden">
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
