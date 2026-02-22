import { motion as Motion } from 'framer-motion'

const ringTransition = {
  ease: 'linear',
  duration: 1.35,
  repeat: Infinity,
}

const Loader = () => {
  return (
    <div className="relative flex h-28 w-28 items-center justify-center">
      <Motion.span
        animate={{ rotate: 360 }}
        transition={ringTransition}
        className="absolute h-28 w-28 rounded-full border-4 border-transparent border-t-pink-400 border-r-orange-400"
      />
      <Motion.span
        animate={{ rotate: -360 }}
        transition={{ ...ringTransition, duration: 1.8 }}
        className="absolute h-20 w-20 rounded-full border-4 border-transparent border-b-sky-400 border-l-cyan-300"
      />
      <Motion.span
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.4, repeat: Infinity }}
        className="h-8 w-8 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300"
      />
    </div>
  )
}

export default Loader
