import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { GlossaryPage } from './pages/GlossaryPage'
import { Week01 } from './pages/Week01'
import { Week02 } from './pages/Week02'
import { Week03 } from './pages/Week03'
import { Week04 } from './pages/Week04'
import { Week05 } from './pages/Week05'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-paper bg-grain">
      <ScrollToTop />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/week-01" element={<Week01 />} />
          <Route path="/week-02" element={<Week02 />} />
          <Route path="/week-03" element={<Week03 />} />
          <Route path="/week-04" element={<Week04 />} />
          <Route path="/week-05" element={<Week05 />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
