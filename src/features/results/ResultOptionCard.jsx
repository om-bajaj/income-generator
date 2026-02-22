import { motion as Motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import GlassCard from '../../components/ui/GlassCard'

const ResultOptionCard = ({ option, index }) => {
  const { t } = useTranslation()

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 * index, duration: 0.35 }}
    >
      <GlassCard className="h-full">
        <div
          className={`mb-4 rounded-xl bg-gradient-to-r p-4 text-slate-800 dark:text-slate-100 ${option.accent}`}
        >
          <h3 className="text-lg font-semibold">{option.title}</h3>
          <p className="mt-1 text-sm text-slate-700/90 dark:text-slate-100/90">{option.description}</p>
        </div>

        <div className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
          <p>
            <span className="font-semibold">{t('results.timeToStart')}</span> {option.timeToStart}
          </p>
          <p>
            <span className="font-semibold">{t('results.potentialRange')}</span> {option.estimate}
          </p>
          <ul className="mt-3 space-y-2">
            {option.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-slate-500 dark:bg-slate-300" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </GlassCard>
    </Motion.div>
  )
}

export default ResultOptionCard
