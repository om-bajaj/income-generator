import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProcessingPage from './pages/ProcessingPage'
import ResultsPage from './pages/ResultsPage'
import { generateMockResults } from './data/mockData'

const emptyForm = {
  skill: '',
  location: '',
  incomeGoal: '',
}

function App() {
  const navigate = useNavigate()
  const location = useLocation()
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
    if (!formData.skill || !formData.location || !formData.incomeGoal) {
      return null
    }

    return generateMockResults(formData)
  }, [formData])

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

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="orb-left" />
        <div className="orb-right" />
        <div className="orb-bottom" />
      </div>

      <div className="relative z-10">
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
      </div>
    </main>
  )
}

export default App
