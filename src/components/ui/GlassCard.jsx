const GlassCard = ({ className = '', children }) => {
  return (
    <div
      className={`rounded-2xl border border-white/40 bg-white/45 p-5 shadow-[0_18px_45px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-white/15 dark:bg-slate-900/45 dark:shadow-[0_20px_45px_-24px_rgba(2,6,23,0.75)] sm:p-6 ${className}`}
    >
      {children}
    </div>
  )
}

export default GlassCard
