import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()
  const currentLanguage = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0]

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <label className="flex items-center gap-2 rounded-lg border border-white/60 bg-white/70 px-2 py-1.5 text-xs text-slate-700 dark:border-white/20 dark:bg-slate-700/80 dark:text-slate-100 sm:text-sm">
      <span className="font-medium">{t('language.label')}</span>
      <select
        value={currentLanguage}
        onChange={handleLanguageChange}
        className="rounded-md border border-white/70 bg-white/80 px-1.5 py-1 text-xs text-slate-800 outline-none focus:ring-2 focus:ring-sky-300 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100 sm:text-sm"
        aria-label={t('language.label')}
      >
        <option value="en">{t('language.en')}</option>
        <option value="hi">{t('language.hi')}</option>
        <option value="mr">{t('language.mr')}</option>
        <option value="te">{t('language.te')}</option>
        <option value="ta">{t('language.ta')}</option>
      </select>
    </label>
  )
}

export default LanguageSwitcher
