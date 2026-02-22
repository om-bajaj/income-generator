import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const navLinkClass = (active) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition ${
    active
      ? 'bg-white/70 text-slate-900 dark:bg-slate-700/80 dark:text-white'
      : 'text-slate-700 hover:bg-white/55 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-700/60 dark:hover:text-white'
  }`

const Navbar = ({ isDarkMode, onToggleDarkMode }) => {
  const location = useLocation()
  const { t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="relative z-20 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav className="mx-auto w-full max-w-6xl rounded-2xl border border-white/50 bg-white/45 px-4 py-3 shadow-[0_18px_45px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-white/15 dark:bg-slate-900/50 sm:flex sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-center justify-between gap-3 sm:min-w-max">
          <Link to="/" className="text-sm font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-base">
            {t('app.brandName')}
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="rounded-lg border border-white/60 bg-white/70 px-3 py-2 text-sm font-medium text-slate-800 dark:border-white/20 dark:bg-slate-700/80 dark:text-slate-100 sm:hidden"
            aria-label={isMobileMenuOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}
          >
            {isMobileMenuOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}
          </button>
        </div>

        <div
          className={`mt-3 flex w-full flex-col gap-2 sm:mt-0 sm:w-auto sm:flex-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end ${
            isMobileMenuOpen ? 'flex' : 'hidden sm:flex'
          }`}
        >
          <Link to="/" onClick={closeMobileMenu} className={navLinkClass(location.pathname === '/')}>
            {t('navbar.home')}
          </Link>
          <Link to="/results" onClick={closeMobileMenu} className={navLinkClass(location.pathname === '/results')}>
            {t('navbar.results')}
          </Link>

          <LanguageSwitcher />

          <button
            type="button"
            onClick={onToggleDarkMode}
            className="rounded-lg border border-white/60 bg-white/70 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-white dark:border-white/20 dark:bg-slate-700/80 dark:text-slate-100 dark:hover:bg-slate-700"
            aria-label={t('navbar.toggleDarkMode')}
          >
            {isDarkMode ? t('navbar.modeLight') : t('navbar.modeDark')}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
