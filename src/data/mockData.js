const optionBlueprints = [
  {
    id: 'quick-income',
    titleKey: 'results.options.quickIncome.title',
    timeToStartKey: 'results.options.quickIncome.timeToStart',
    estimateKey: 'results.options.quickIncome.estimate',
    bulletsKey: 'results.options.quickIncome.bullets',
    accent: 'from-pink-400/40 to-rose-300/30',
  },
  {
    id: 'better-income',
    titleKey: 'results.options.betterIncome.title',
    timeToStartKey: 'results.options.betterIncome.timeToStart',
    estimateKey: 'results.options.betterIncome.estimate',
    bulletsKey: 'results.options.betterIncome.bullets',
    accent: 'from-sky-400/40 to-cyan-300/30',
  },
  {
    id: 'upgrade-path',
    titleKey: 'results.options.upgradePath.title',
    timeToStartKey: 'results.options.upgradePath.timeToStart',
    estimateKey: 'results.options.upgradePath.estimate',
    bulletsKey: 'results.options.upgradePath.bullets',
    accent: 'from-violet-400/40 to-fuchsia-300/30',
  },
]

const guidanceKeys = [
  'results.guidance.step1',
  'results.guidance.step2',
  'results.guidance.step3',
  'results.guidance.step4',
  'results.guidance.step5',
]

export const generateMockResults = ({ skill, location, incomeType }, t) => {
  const cleanSkill = skill.trim()
  const cleanLocation = location.trim()

  return {
    profile: {
      skill: cleanSkill,
      location: cleanLocation,
      incomeType,
    },
    options: optionBlueprints.map((item) => {
      const translatedBullets = t(item.bulletsKey, { returnObjects: true })

      return {
        id: item.id,
        title: t(item.titleKey),
        timeToStart: t(item.timeToStartKey),
        estimate: t(item.estimateKey),
        bullets: Array.isArray(translatedBullets) ? translatedBullets : [],
        accent: item.accent,
        description: t('results.optionDescription', {
          skill: cleanSkill,
          location: cleanLocation,
          incomeType: t(`incomeType.${incomeType}`),
        }),
      }
    }),
    guidanceSteps: guidanceKeys.map((key) =>
      t(key, {
        skill: cleanSkill,
      }),
    ),
  }
}
