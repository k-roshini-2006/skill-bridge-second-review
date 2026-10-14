export interface UserProfile {
  id: string
  email: string
  full_name: string
  college: string
  department: string
  qualification: string
  career_interests: string[]
  target_role: string
  industry_preference: string
  learning_hours_per_week: number
  preferred_learning_duration: string
  role: 'student' | 'admin'
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface UserSkill {
  id: string
  user_id: string
  skill_name: string
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced'
  years_experience?: number
  created_at: string
}

export interface JobRole {
  id: string
  title: string
  industry: string
  description: string
  avg_salary_usd?: number
  demand_score: number // 0-100
  growth_rate_percent: number
}

export interface MarketSkillDemand {
  id: string
  job_role_id: string
  skill_name: string
  importance: 'Critical' | 'High' | 'Medium' | 'Nice to have'
  demand_score: number
  category: 'Technical' | 'Soft' | 'Domain'
  source: string
}

export interface SkillGap {
  skill_name: string
  status: 'missing' | 'needs_improvement' | 'matched'
  importance: string
  demand_score: number
  user_proficiency?: string
}

export interface Curriculum {
  id: string
  user_id: string
  title: string
  target_role: string
  objective: string
  match_score: number
  total_hours: number
  duration_weeks: number
  status: 'draft' | 'active' | 'completed'
  created_at: string
  updated_at: string
}

export interface CurriculumModule {
  id: string
  curriculum_id: string
  title: string
  skills: string[]
  objectives: string[]
  prerequisites: string[]
  estimated_hours: number
  week_number: number
  order_index: number
  activities: string[]
  assessment_method: string
  completion_criteria: string
  resources: LearningResource[]
  status: 'locked' | 'available' | 'in_progress' | 'completed'
}

export interface LearningResource {
  id: string
  name: string
  provider: string
  url: string
  skills_covered: string[]
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  estimated_hours: number
  price_category: 'Free' | 'Paid' | 'Freemium'
  resource_type: 'Course' | 'Documentation' | 'Tutorial' | 'Book' | 'Project'
}

export interface LearningProgress {
  id: string
  user_id: string
  module_id: string
  status: 'not_started' | 'in_progress' | 'completed'
  progress_percent: number
  started_at?: string
  completed_at?: string
  last_accessed_at: string
}

export interface Assessment {
  id: string
  module_id: string
  title: string
  type: 'quiz' | 'practical'
  passing_score: number
  time_limit_minutes?: number
  questions: Question[]
}

export interface Question {
  id: string
  text: string
  type: 'mcq' | 'true_false' | 'short_answer'
  options?: string[]
  correct_answer: string
  explanation?: string
}

export interface AssessmentAttempt {
  id: string
  user_id: string
  assessment_id: string
  score: number
  passed: boolean
  answers: Record<string, string>
  attempted_at: string
}

export interface Credential {
  id: string
  user_id: string
  curriculum_id: string
  title: string
  issued_at: string
  credential_type: 'badge' | 'certificate'
  badge_url?: string
}

export interface NavItem {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  adminOnly?: boolean
  badge?: string | number
}
