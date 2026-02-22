import { motion as Motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import GradientButton from '../components/ui/GradientButton'
import GlassCard from '../components/ui/GlassCard'
import ResultOptionCard from '../features/results/ResultOptionCard'
import StepGuidance from '../features/results/StepGuidance'

const ResultsPage = ({ results, onReset }) => {
  const { t, i18n } = useTranslation()
  const numberLocale = i18n.language.includes('-') ? i18n.language : `${i18n.language}-IN`
  const formattedIncomeGoal = new Intl.NumberFormat(numberLocale).format(
    Number(results.profile.incomeGoal),
  )

  return (
    <Motion.div
      key="results"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className="mx-auto w-full max-w-5xl"
    >
      <GlassCard className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{t('results.title')}</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {t('results.summary', {
            skill: results.profile.skill,
            location: results.profile.location,
            incomeGoal: formattedIncomeGoal,
          })}
        </p>
      </GlassCard>

      <div className="grid gap-4 md:grid-cols-3">
        {results.options.map((option, index) => (
          <ResultOptionCard key={option.id} option={option} index={index} />
        ))}
      </div>

      <div className="mt-6">
        <StepGuidance steps={results.guidanceSteps} />
      </div>

      <div className="mx-auto mt-6 max-w-sm">
        <GradientButton onClick={onReset}>{t('results.tryAnotherSkill')}</GradientButton>
      </div>
    </Motion.div>
  )
}

export default ResultsPage
