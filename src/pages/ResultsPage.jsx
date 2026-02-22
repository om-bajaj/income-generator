import { motion as Motion } from 'framer-motion'
import GradientButton from '../components/ui/GradientButton'
import GlassCard from '../components/ui/GlassCard'
import ResultOptionCard from '../features/results/ResultOptionCard'
import StepGuidance from '../features/results/StepGuidance'

const ResultsPage = ({ results, onReset }) => {
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
        <h2 className="text-2xl font-bold text-slate-900">Your income roadmap is ready</h2>
        <p className="mt-2 text-sm text-slate-600">
          Based on <strong>{results.profile.skill}</strong> in{' '}
          <strong>{results.profile.location}</strong>, targeting{' '}
          <strong>${Number(results.profile.incomeGoal).toLocaleString()} / month</strong>.
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
        <GradientButton onClick={onReset}>Try Another Skill</GradientButton>
      </div>
    </Motion.div>
  )
}

export default ResultsPage
