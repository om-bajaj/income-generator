import { motion as Motion } from 'framer-motion'
import GlassCard from '../../components/ui/GlassCard'

const StepGuidance = ({ steps }) => {
  return (
    <GlassCard>
      <h3 className="text-lg font-semibold text-slate-900">Step-by-step guidance</h3>
      <div className="mt-4 space-y-3">
        {steps.map((step, index) => (
          <Motion.div
            key={step}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + index * 0.08, duration: 0.3 }}
            className="flex gap-3 rounded-xl border border-white/50 bg-white/60 p-3"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
              {index + 1}
            </div>
            <p className="text-sm text-slate-700">{step}</p>
          </Motion.div>
        ))}
      </div>
    </GlassCard>
  )
}

export default StepGuidance
