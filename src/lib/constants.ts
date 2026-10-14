export const APP_NAME = 'SkillBridge AI'
export const APP_TAGLINE = 'Bridge the Gap Between Your Skills and Your Dream Job'

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Market Insights', href: '#market-insights' },
]

export const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Advanced'] as const
export type SkillLevel = typeof SKILL_LEVELS[number]

export const INDUSTRIES = [
  'Technology',
  'Finance & Banking',
  'Healthcare',
  'E-commerce',
  'Data & AI',
  'Cybersecurity',
  'Cloud & DevOps',
  'Product & Design',
]

export const LEARNING_FORMATS = [
  'Video Courses',
  'Reading & Documentation',
  'Hands-on Projects',
  'Mixed',
]
