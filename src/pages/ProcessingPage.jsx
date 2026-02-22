import { useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import GlassCard from '../components/ui/GlassCard'
import Loader from '../components/ui/Loader'

const ProcessingPage = ({ onComplete }) => {
  const { t } = useTranslation()

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <Motion.div
      key="processing"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="mx-auto flex min-h-[60vh] w-full max-w-xl items-center justify-center"
    >
      <GlassCard className="w-full text-center">
        <div className="flex justify-center">
          <Loader />
        </div>
        <p className="mt-4 text-base font-medium text-slate-700 dark:text-slate-200">
          {t('processing.message')}
        </p>
      </GlassCard>
    </Motion.div>
  )
}

export default ProcessingPage
