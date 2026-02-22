import { motion as Motion } from 'framer-motion'

const GradientButton = ({ children, className = '', ...props }) => {
  return (
    <Motion.button
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 350, damping: 18 }}
      className={`w-full rounded-2xl bg-gradient-to-r from-pink-500 via-orange-400 to-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-10px_rgba(244,114,182,0.65)] transition-opacity hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    >
      {children}
    </Motion.button>
  )
}

export default GradientButton
