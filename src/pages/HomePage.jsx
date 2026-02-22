import { useMemo, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import GlassCard from '../components/ui/GlassCard'
import GradientButton from '../components/ui/GradientButton'
import InputField from '../components/ui/InputField'

const emptyForm = {
  skill: '',
  location: '',
  incomeGoal: '',
}

const HomePage = ({ onStart, initialValues }) => {
  const [formData, setFormData] = useState(initialValues ?? emptyForm)
  const [errors, setErrors] = useState({})

  const subtitle = useMemo(
    () =>
      'Turn your skill into clear income paths with smart next-step guidance.',
    [],
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!formData.skill.trim()) {
      nextErrors.skill = 'Skill is required.'
    }

    if (!formData.location.trim()) {
      nextErrors.location = 'Location is required.'
    }

    if (!formData.incomeGoal.trim()) {
      nextErrors.incomeGoal = 'Income goal is required.'
    } else if (!Number.isFinite(Number(formData.incomeGoal)) || Number(formData.incomeGoal) <= 0) {
      nextErrors.incomeGoal = 'Enter a valid positive number.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    onStart(formData)
  }

  return (
    <Motion.div
      key="home"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="mx-auto w-full max-w-xl"
    >
      <GlassCard>
        <p className="inline-flex rounded-full border border-white/60 bg-white/60 px-3 py-1 text-xs font-medium text-slate-600">
          Skill-to-Income Navigator
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
          Discover your best earning path
        </h1>
        <p className="mt-2 text-sm text-slate-600">{subtitle}</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <InputField
            label="Your Skill"
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            placeholder="e.g. Graphic Design"
            error={errors.skill}
          />

          <InputField
            label="Your Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Austin, TX"
            error={errors.location}
          />

          <InputField
            label="Monthly Income Goal (USD)"
            name="incomeGoal"
            value={formData.incomeGoal}
            onChange={handleChange}
            type="number"
            placeholder="e.g. 3500"
            error={errors.incomeGoal}
          />

          <GradientButton type="submit">Find Income Opportunities</GradientButton>
        </form>
      </GlassCard>
    </Motion.div>
  )
}

export default HomePage
