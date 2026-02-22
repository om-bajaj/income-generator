import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import GlassCard from '../components/ui/GlassCard'
import GradientButton from '../components/ui/GradientButton'
import InputField from '../components/ui/InputField'

const emptyForm = {
  skill: '',
  location: '',
  incomeGoal: '',
}

const HomePage = ({ onStart, initialValues }) => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState(initialValues ?? emptyForm)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!formData.skill.trim()) {
      nextErrors.skill = t('home.validation.skillRequired')
    }

    if (!formData.location.trim()) {
      nextErrors.location = t('home.validation.locationRequired')
    }

    if (!formData.incomeGoal.trim()) {
      nextErrors.incomeGoal = t('home.validation.incomeRequired')
    } else if (!Number.isFinite(Number(formData.incomeGoal)) || Number(formData.incomeGoal) <= 0) {
      nextErrors.incomeGoal = t('home.validation.incomeInvalid')
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
        <p className="inline-flex rounded-full border border-white/60 bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/20 dark:bg-slate-800/70 dark:text-slate-200">
          {t('app.brandName')}
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          {t('home.title')}
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t('home.subtitle')}</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <InputField
            label={t('home.skillLabel')}
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            placeholder={t('home.skillPlaceholder')}
            error={errors.skill}
          />

          <InputField
            label={t('home.locationLabel')}
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder={t('home.locationPlaceholder')}
            error={errors.location}
          />

          <InputField
            label={t('home.incomeGoalLabel')}
            name="incomeGoal"
            value={formData.incomeGoal}
            onChange={handleChange}
            type="number"
            placeholder={t('home.incomeGoalPlaceholder')}
            error={errors.incomeGoal}
          />

          <GradientButton type="submit">{t('home.cta')}</GradientButton>
        </form>
      </GlassCard>
    </Motion.div>
  )
}

export default HomePage
