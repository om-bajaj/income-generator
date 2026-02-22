import { motion as Motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import GlassCard from '../../components/ui/GlassCard'

const StepGuidance = ({ steps }) => {
  const { t } = useTranslation()

  return (
    <GlassCard>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{t('results.stepByStepTitle')}</h3>
      <div className="mt-4 space-y-3">
        {steps.map((step, index) => (
          <Motion.div
            key={`${step}-${index}`}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + index * 0.08, duration: 0.3 }}
            className="flex gap-3 rounded-xl border border-white/50 bg-white/60 p-3 dark:border-white/10 dark:bg-slate-800/60"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white dark:bg-slate-100 dark:text-slate-900">
              {index + 1}
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-200">{step}</p>
          </Motion.div>
        ))}
      </div>
    </GlassCard>
  )
}

export default StepGuidance
