import { motion as Motion } from 'framer-motion'

const GradientButton = ({ children, className = '', ...props }) => {
  return (
    <Motion.button
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 350, damping: 18 }}
      className={`w-full rounded-2xl border border-slate-900/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/15 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:focus:ring-slate-500 ${className}`}
      {...props}
    >
      {children}
    </Motion.button>
  )
}

export default GradientButton
