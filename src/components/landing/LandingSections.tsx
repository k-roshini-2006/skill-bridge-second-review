import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight, TrendingUp, GitBranch, BookOpen, Award,
  BarChart2, Users, Zap, CheckCircle2, ChevronRight,
  Globe, Clock, Target, Star
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid
} from 'recharts'

// ── Sample / illustrative data (clearly labelled) ──────────────────────────
const SAMPLE_SKILL_DEMAND = [
  { skill: 'Python', demand: 92 },
  { skill: 'React', demand: 88 },
  { skill: 'SQL', demand: 85 },
  { skill: 'Cloud (AWS)', demand: 82 },
  { skill: 'ML / AI', demand: 79 },
  { skill: 'TypeScript', demand: 74 },
]

const SAMPLE_TREND = [
  { month: 'Jan', openings: 12400 },
  { month: 'Feb', openings: 13200 },
  { month: 'Mar', openings: 14100 },
  { month: 'Apr', openings: 15800 },
  { month: 'May', openings: 17200 },
  { month: 'Jun', openings: 18900 },
]

const FEATURES = [
  {
    icon: Globe,
    title: 'Real-Time Job Market Data',
    description: 'Analyze thousands of job postings to surface trending skills and in-demand roles across industries and regions.',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    icon: GitBranch,
    title: 'AI Skill-Gap Analysis',
    description: 'Upload your resume or enter your skills; our AI compares them with employer requirements and calculates your exact match score.',
    color: 'text-indigo-600 bg-indigo-50',
  },
  {
    icon: BookOpen,
    title: 'Personalized Micro-Curricula',
    description: 'AI-generated, week-by-week curricula with ordered modules, practical exercises, mini-projects, and resource links.',
    color: 'text-violet-600 bg-violet-50',
  },
  {
    icon: Award,
    title: 'Micro-Credential Certificates',
    description: 'Complete modules, pass quizzes, and earn platform certificates. Clearly marked as platform-issued, not externally accredited.',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: BarChart2,
    title: 'Interactive Learning Roadmap',
    description: 'Visual, week-by-week roadmap saved to your profile. Mark progress, adjust your schedule, and track completion.',
    color: 'text-green-600 bg-green-50',
  },
  {
    icon: Target,
    title: 'Role-Specific Guidance',
    description: 'Every recommendation ties back to your target job role and explains why each skill and module was selected.',
    color: 'text-red-600 bg-red-50',
  },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Set Up Your Profile',
    description: 'Enter your education, current skills, and career goal. Optionally upload your resume for automatic skill extraction.',
  },
  {
    step: '02',
    title: 'Analyze the Market',
    description: 'Explore what skills employers demand for your target role — broken down by importance, industry, and region.',
  },
  {
    step: '03',
    title: 'Get Your Gap Analysis',
    description: 'Our scoring engine compares your skills to market demand and identifies exactly what to learn next.',
  },
  {
    step: '04',
    title: 'Generate Your Curriculum',
    description: 'AI creates a personalized, ordered curriculum with modules, exercises, projects, assessments, and resources.',
  },
  {
    step: '05',
    title: 'Learn & Earn Credentials',
    description: 'Follow your roadmap, complete assessments, and collect completion certificates for every milestone.',
  },
]

const SAMPLE_ROADMAP = [
  { week: 'Week 1–2', module: 'Python Fundamentals', hours: 12, status: 'completed' },
  { week: 'Week 3–4', module: 'Data Structures & Algorithms', hours: 14, status: 'in_progress' },
  { week: 'Week 5–6', module: 'SQL & Database Design', hours: 10, status: 'locked' },
  { week: 'Week 7–9', module: 'REST APIs with FastAPI', hours: 18, status: 'locked' },
  { week: 'Week 10–12', module: 'Capstone Project', hours: 20, status: 'locked' },
]

// ── Sections ────────────────────────────────────────────────────────────────

function Hero({ navigate }: { navigate: (to: string) => void }) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-4xl mx-auto">
        <Badge variant="default" className="mb-6 text-xs">
          🎓 AI-Powered EdTech Platform · College Project Demo
        </Badge>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Bridge the Gap Between
          <span className="text-indigo-600"> Your Skills</span>
          <br />and Your{' '}
          <span className="text-indigo-600">Dream Job</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          SkillBridge AI analyzes global job-market demands, identifies your exact skill gaps,
          and generates a personalized micro-credential curriculum to make you job-ready — fast.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => navigate('/register')} className="group">
            Get Started Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="secondary" onClick={() => navigate('/login')}>
            Try Demo Dashboard
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 max-w-sm mx-auto sm:max-w-md">
          {[
            { value: '500+', label: 'Job Roles Tracked' },
            { value: '1,200+', label: 'Skills Analyzed' },
            { value: '7-Phase', label: 'Learning Framework' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">How SkillBridge AI Works</h2>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
            From skill assessment to job readiness in five structured steps.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-0.5 bg-indigo-100" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="flex flex-col items-center text-center">
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-indigo-200 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-lg font-bold text-indigo-600">{step.step}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">Everything You Need to Get Job-Ready</h2>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
            A complete platform from market intelligence to credentialed learning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(feature => (
            <Card key={feature.title} hover className="p-6">
              <CardContent className="p-0">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function MarketInsightsSection() {
  return (
    <section id="market-insights" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Sample Job Market Insights</h2>
            <p className="mt-2 text-gray-500">
              Illustrative data — actual dashboards pull from real job-posting sources.
            </p>
          </div>
          <Badge variant="warning">📊 Illustrative Sample Data</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skill demand chart */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-gray-900 mb-1">Top Skills in Demand</h3>
              <p className="text-xs text-gray-400 mb-6">Full Stack Developer · Global · Sample data</p>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={SAMPLE_SKILL_DEMAND} layout="vertical" barSize={14}>
                  <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11 }} tickFormatter={v => `${v}%`} />
                  <YAxis type="category" dataKey="skill" tick={{ fontSize: 12 }} width={90} />
                  <Tooltip formatter={(v) => [`${Number(v)}%`, 'Demand']} />
                  <Bar dataKey="demand" fill="#6366f1" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Job trend chart */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-gray-900 mb-1">Job Openings Trend</h3>
              <p className="text-xs text-gray-400 mb-6">Tech industry · Global · Sample data</p>
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={SAMPLE_TREND}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 11 }} tickFormatter={v => `${(v / 1000).toFixed(0)}k`} />
                  <Tooltip formatter={(v) => [Number(v).toLocaleString(), 'Openings']} />
                  <Line type="monotone" dataKey="openings" stroke="#6366f1" strokeWidth={2.5} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function RoadmapPreview() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="default" className="mb-4">Example Roadmap</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Personalized Learning Roadmap
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              AI generates a structured, week-by-week plan tailored to your current skills,
              target role, and available learning time. Track progress, mark milestones,
              and earn credentials along the way.
            </p>
            <ul className="space-y-3">
              {[
                'Ordered modules with clear prerequisites',
                'Estimated hours per module',
                'Practical exercises and mini-projects',
                'Quiz-based assessments with auto-scoring',
                'Completion certificates per milestone',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Preview card */}
          <Card className="overflow-hidden">
            <div className="px-6 pt-5 pb-4 bg-indigo-600">
              <p className="text-indigo-200 text-xs font-medium mb-1">ILLUSTRATIVE EXAMPLE</p>
              <h3 className="text-white font-semibold text-lg">Full Stack Developer Curriculum</h3>
              <div className="flex items-center gap-4 mt-3">
                <div className="text-center">
                  <p className="text-white font-bold text-xl">74</p>
                  <p className="text-indigo-200 text-xs">Total Hours</p>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-xl">12</p>
                  <p className="text-indigo-200 text-xs">Weeks</p>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-xl">5</p>
                  <p className="text-indigo-200 text-xs">Modules</p>
                </div>
              </div>
            </div>

            <CardContent className="pt-4 space-y-3">
              {SAMPLE_ROADMAP.map(item => (
                <div key={item.module} className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                    item.status === 'completed' ? 'bg-green-500' :
                    item.status === 'in_progress' ? 'bg-indigo-500' : 'bg-gray-200'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm font-medium truncate ${
                        item.status === 'locked' ? 'text-gray-400' : 'text-gray-900'
                      }`}>{item.module}</p>
                      <span className="text-xs text-gray-400 ml-2 shrink-0">{item.hours}h</span>
                    </div>
                    <p className="text-xs text-gray-400">{item.week}</p>
                  </div>
                  {item.status === 'completed' && (
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">SB</span>
              </div>
              <span className="text-white font-semibold">SkillBridge AI</span>
            </div>
            <p className="text-sm leading-relaxed">
              Micro-credential curriculum generation platform driven by real-time global job-market skill demands.
              Built as a college capstone project.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              {['Job Market Dashboard', 'Skill Gap Analysis', 'Curriculum Generator', 'Learning Roadmap', 'Assessments'].map(l => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Tech Stack</h4>
            <ul className="space-y-2 text-sm">
              {['React + TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Google Gemini AI'].map(l => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs">
            © 2024 SkillBridge AI — College Project Demo · All sample data is illustrative
          </p>
          <p className="text-xs">
            Built with React, Supabase & Google Gemini AI
          </p>
        </div>
      </div>
    </footer>
  )
}

// ── Main Landing Page Export ─────────────────────────────────────────────────

export function LandingSections() {
  const navigate = useNavigate()
  return (
    <>
      <Hero navigate={navigate} />
      <HowItWorksSection />
      <FeaturesSection />
      <MarketInsightsSection />
      <RoadmapPreview />
      <Footer />
    </>
  )
}
