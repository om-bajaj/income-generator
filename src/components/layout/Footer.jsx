import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="relative z-20 px-4 pb-4 pt-8 sm:px-6 sm:pb-6">
      <div className="mx-auto w-full max-w-6xl rounded-2xl border border-white/40 bg-white/40 px-4 py-4 text-center text-xs text-slate-600 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/35 dark:text-slate-300 sm:text-sm">
        {t('footer.text')}
      </div>
    </footer>
  )
}

export default Footer
