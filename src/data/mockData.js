const optionBlueprints = [
  {
    id: 'quick-income',
    title: 'Quick Income',
    timeToStart: '1-2 weeks',
    estimate: '$400-$1,000 / month',
    bullets: [
      'Start with freelance micro-projects and paid task platforms.',
      'Offer one clear service package with fixed pricing to close faster.',
      'Use social proof snippets in each outreach message.',
    ],
    accent: 'from-pink-400/40 to-rose-300/30',
  },
  {
    id: 'better-income',
    title: 'Better Income',
    timeToStart: '1-3 months',
    estimate: '$1,500-$3,500 / month',
    bullets: [
      'Build a portfolio set with three strong case studies.',
      'Position for recurring retainers instead of one-off tasks.',
      'Create a repeatable lead generation routine each week.',
    ],
    accent: 'from-sky-400/40 to-cyan-300/30',
  },
  {
    id: 'upgrade-path',
    title: 'Upgrade Path',
    timeToStart: '3-6 months',
    estimate: '$4,000+ / month',
    bullets: [
      'Package your expertise into premium offers with clear outcomes.',
      'Add automation and templates so delivery scales without burnout.',
      'Grow authority through content, referrals, and strategic partnerships.',
    ],
    accent: 'from-violet-400/40 to-fuchsia-300/30',
  },
]

const guidanceTemplate = [
  'Define a focused offer around your strongest skill.',
  'Collect market proof by testing your offer with 5-10 prospects.',
  'Refine pricing and messaging based on feedback and conversion rate.',
  'Systemize client onboarding and delivery with reusable templates.',
  'Scale income through referrals, partnerships, and recurring packages.',
]

export const generateMockResults = ({ skill, location, incomeGoal }) => {
  const cleanSkill = skill.trim()
  const cleanLocation = location.trim()

  return {
    profile: {
      skill: cleanSkill,
      location: cleanLocation,
      incomeGoal,
    },
    options: optionBlueprints.map((item) => ({
      ...item,
      description: `${cleanSkill} opportunities in ${cleanLocation} with a path toward $${Number(incomeGoal).toLocaleString()} monthly.`,
    })),
    guidanceSteps: guidanceTemplate.map(
      (step, index) => `${step} Step focus: ${cleanSkill} strategy #${index + 1}.`,
    ),
  }
}
