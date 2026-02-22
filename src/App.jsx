import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HomePage from './pages/HomePage'
import ProcessingPage from './pages/ProcessingPage'
import ResultsPage from './pages/ResultsPage'
import { generateMockResults } from './data/mockData'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const emptyForm = {
  skill: '',
  location: '',
  incomeType: '',
}

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('skillNavigator.theme')
    if (saved) {
      return saved === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [formData, setFormData] = useState(() => {
    try {
      const stored = sessionStorage.getItem('skillNavigator.formData')
      return stored ? JSON.parse(stored) : emptyForm
    } catch {
      return emptyForm
    }
  })

  // Keep result generation isolated so replacing with an API call is straightforward.
  const resultPayload = useMemo(() => {
    if (!formData.skill || !formData.location || !formData.incomeType) {
      return null
    }

    return generateMockResults(formData, t, i18n.language)
  }, [formData, i18n.language, t])

  const handleStart = (values) => {
    setFormData(values)
    sessionStorage.setItem('skillNavigator.formData', JSON.stringify(values))
    navigate('/processing')
  }

  const handleProcessingComplete = () => {
    navigate('/results')
  }

  const handleReset = () => {
    setFormData(emptyForm)
    sessionStorage.removeItem('skillNavigator.formData')
    navigate('/')
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.setItem('skillNavigator.theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <div className="relative min-h-screen overflow-hidden transition-colors">
      <div className="pointer-events-none absolute inset-0">
        <div className="orb-left" />
        <div className="orb-right" />
        <div className="orb-bottom" />
      </div>

      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />

      <main className="relative z-10 px-4 py-8 sm:px-6 sm:py-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={<HomePage onStart={handleStart} initialValues={formData} />}
            />
            <Route
              path="/processing"
              element={
                resultPayload ? (
                  <ProcessingPage onComplete={handleProcessingComplete} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/results"
              element={
                resultPayload ? (
                  <ResultsPage results={resultPayload} onReset={handleReset} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

export default App
