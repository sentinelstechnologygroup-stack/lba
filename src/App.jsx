import { Toaster } from "@/components/ui/toaster"
import { Toaster as SonnerToaster } from "sonner"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider } from '@/lib/AuthContext';

import SiteLayout from '@/components/layout/SiteLayout';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Membership from '@/pages/Membership';
import FindChapter from '@/pages/FindChapter';
import StartChapter from '@/pages/StartChapter';
import Events from '@/pages/Events';
import Education from '@/pages/Education';
import Mentorship from '@/pages/Mentorship';
import Directory from '@/pages/Directory';
import Marketplace from '@/pages/Marketplace';
import Resources from '@/pages/Resources';
import Partners from '@/pages/Partners';
import SuccessStories from '@/pages/SuccessStories';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import Join from '@/pages/Join';
import MemberReadinessQuiz from '@/pages/MemberReadinessQuiz';
import SimpleInquiry from '@/pages/SimpleInquiry';
import EventRSVP from '@/pages/EventRSVP';
import MemberDashboard from '@/pages/MemberDashboard';
import FAQ from '@/pages/FAQ';
import GrowthCaseStudies from '@/pages/GrowthCaseStudies';

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/find-chapter" element={<FindChapter />} />
              <Route path="/start-chapter" element={<StartChapter />} />
              <Route path="/events" element={<Events />} />
              <Route path="/education" element={<Education />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/directory" element={<Directory />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/join" element={<Join />} />
              <Route path="/member-readiness-quiz" element={<MemberReadinessQuiz />} />
              <Route path="/ask-about-membership" element={<SimpleInquiry />} />
              <Route path="/request-introduction" element={<SimpleInquiry />} />
              <Route path="/list-your-business" element={<SimpleInquiry />} />
              <Route path="/list-your-services" element={<SimpleInquiry />} />
              <Route path="/ask-about-category" element={<SimpleInquiry />} />
              <Route path="/chapter-inquiry" element={<SimpleInquiry />} />
              <Route path="/sponsor-inquiry" element={<SimpleInquiry />} />
              <Route path="/event-rsvp" element={<EventRSVP />} />
              <Route path="/member-dashboard" element={<MemberDashboard />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/growth-case-studies" element={<GrowthCaseStudies />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Toaster />
        <SonnerToaster position="top-right" />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App