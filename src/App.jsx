import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProprietorWelcome from './components/ProprietorWelcome'
import NewsEvents from './components/NewsEvents'
import Footer from './components/Footer'
import Calendar from './components/Calendar'
import About from './components/About'
import PrincipalStaff from './components/PrincipalStaff'
import AcademicPrograms from './components/AcademicPrograms'
import Admissions from './components/Admissions'
import AdmissionForms from './components/AdmissionForms'
import TuitionCharges from './components/TuitionCharges'
import Announcements from './components/Announcements'
import ActivitiesEvents from './components/ActivitiesEvents'
import Prospectus from './components/Prospectus'

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
