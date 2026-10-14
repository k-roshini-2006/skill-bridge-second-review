import React from 'react'
import {
  TrendingUp, BookOpen, Award, Clock, ArrowRight,
  GitBranch, Zap, AlertTriangle, CheckCircle2, ChevronRight,
  Target, BarChart2
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/context/AuthContext'
import { Link } from 'react-router-dom'
import { RadialBarChart, RadialBar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

// ── Illustrative demo data ──────────────────────────────────────────────────
const DEMO_STATS = [
  { label: 'Skill Match Score', value: '64%', icon: Target, color: 'text-indigo-600', bg: 'bg-indigo-50', change: '+8% this week' },
  { label: 'Modules Completed', value: '3 / 12', icon: BookOpen, color: 'text-green-600', bg: 'bg-green-50', change: '25% progress' },
  { label: 'Earned Credentials', value: '2', icon: Award, color: 'text-amber-600', bg: 'bg-amber-50', change: '1 pending' },
  { label: 'Learning Hours', value: '24 hrs', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50', change: 'This month' },
]

const MISSING_SKILLS = [
  { skill: 'Docker & Containers', importance: 'Critical', demand: 88 },
  { skill: 'TypeScript', importance: 'High', demand: 82 },
  { skill: 'PostgreSQL', importance: 'High', demand: 79 },
  { skill: 'System Design', importance: 'Medium', demand: 71 },
  { skill: 'CI/CD Pipelines', importance: 'Medium', demand: 66 },
]

const ACTIVE_MODULES = [
  { title: 'Data Structures & Algorithms', progress: 60, week: 'Week 3–4', dueIn: '4 days' },
  { title: 'React Fundamentals', progress: 100, week: 'Week 1–2', dueIn: 'Completed' },
]

const RECENT_ACTIVITY = [
  { action: 'Completed quiz', detail: 'Python Basics — Score: 90%', time: '2 hrs ago', type: 'success' },
  { action: 'Started module', detail: 'Data Structures & Algorithms', time: '1 day ago', type: 'info' },
  { action: 'Profile updated', detail: 'Added Docker to skills', time: '2 days ago', type: 'info' },
  { action: 'Curriculum generated', detail: 'Full Stack Developer — 12 weeks', time: '3 days ago', type: 'success' },
]

const NEXT_STEPS = [
  { label: 'Complete your profile', href: '/profile', done: true },
  { label: 'Run skill gap analysis', href: '/analysis', done: true },
  { label: 'Generate your curriculum', href: '/curriculum', done: true },
  { label: 'Continue current module', href: '/roadmap', done: false },
  { label: 'Take Week 3 assessment', href: '/assessments', done: false },
]

// ────────────────────────────────────────────────────────────────────────────

export default function StudentDashboard() {
  const { profile } = useAuth()

  const firstName = profile?.full_name?.split(' ')[0] ?? 'there'
  const targetRole = profile?.target_role ?? 'Full Stack Developer'

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome banner */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {firstName} 👋
          </h1>
          <p className="text-gray-500 mt-0.5">
            Career goal:{' '}
            <span className="font-medium text-indigo-600">{targetRole}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <Link to="/analysis">
            <Button variant="secondary" size="sm">
              <GitBranch className="w-4 h-4" /> Skill Analysis
            </Button>
          </Link>
          <Link to="/curriculum">
            <Button size="sm">
              <Zap className="w-4 h-4" /> Generate Curriculum
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {DEMO_STATS.map(stat => (
          <Card key={stat.label} className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{stat.change}</p>
              </div>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.bg}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active modules */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Active Modules</h2>
            <Link to="/roadmap" className="text-sm text-indigo-600 hover:underline flex items-center gap-1">
              View Roadmap <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {ACTIVE_MODULES.map(mod => (
            <Card key={mod.title} className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{mod.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{mod.week}</p>
                  <Progress value={mod.progress} className="mt-3" showLabel />
                </div>
                <div className="text-right shrink-0">
                  <Badge variant={mod.progress === 100 ? 'success' : 'default'}>
                    {mod.progress === 100 ? 'Completed' : `Due ${mod.dueIn}`}
                  </Badge>
                </div>
              </div>
              {mod.progress < 100 && (
                <div className="mt-3 pt-3 border-t border-gray-50">
                  <Link to="/roadmap">
                    <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700 px-0">
                      Continue Learning <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              )}
            </Card>
          ))}

          {/* Missing skills */}
          <div className="flex items-center justify-between mt-6">
            <h2 className="font-semibold text-gray-900">Top Missing Skills</h2>
            <Badge variant="warning" className="text-xs">Based on your target role</Badge>
          </div>

          <Card>
            <CardContent className="pt-4 space-y-4">
              {MISSING_SKILLS.map(item => (
                <div key={item.skill} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-800">{item.skill}</span>
                      <Badge
                        variant={
                          item.importance === 'Critical' ? 'destructive' :
                          item.importance === 'High' ? 'warning' : 'secondary'
                        }
                        className="text-xs"
                      >
                        {item.importance}
                      </Badge>
                    </div>
                    <span className="text-xs text-gray-400">{item.demand}% demand</span>
                  </div>
                  <Progress value={item.demand} color={
                    item.importance === 'Critical' ? 'red' :
                    item.importance === 'High' ? 'amber' : 'indigo'
                  } size="sm" />
                </div>
              ))}
              <Link to="/analysis">
                <Button variant="outline" size="sm" className="mt-2">
                  View Full Analysis <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {/* Next steps */}
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Your onboarding checklist</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {NEXT_STEPS.map(step => (
                <Link key={step.label} to={step.href}>
                  <div className={`flex items-center gap-3 p-2.5 rounded-lg transition-colors ${
                    step.done ? 'opacity-50' : 'hover:bg-gray-50'
                  }`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      step.done ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      {step.done
                        ? <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                        : <div className="w-2 h-2 rounded-full bg-gray-400" />
                      }
                    </div>
                    <span className={`text-sm ${step.done ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                      {step.label}
                    </span>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Recent activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {RECENT_ACTIVITY.map((act, i) => (
                <div key={i} className="flex gap-3">
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                    act.type === 'success' ? 'bg-green-500' : 'bg-indigo-400'
                  }`} />
                  <div>
                    <p className="text-xs font-medium text-gray-700">{act.action}</p>
                    <p className="text-xs text-gray-500 truncate">{act.detail}</p>
                    <p className="text-xs text-gray-300 mt-0.5">{act.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Demo data notice */}
      <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 flex items-start gap-3">
        <AlertTriangle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
        <p className="text-xs text-indigo-700">
          <strong>Demo Mode:</strong> All statistics, module progress, and skill data shown above are illustrative examples.
          Configure Supabase credentials and complete your profile to see real data.
        </p>
      </div>
    </div>
  )
}
