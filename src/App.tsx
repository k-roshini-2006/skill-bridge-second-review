import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import { ProtectedRoute } from '@/components/layout/ProtectedRoute'
import { AppLayout } from '@/components/layout/AppLayout'

// Pages
import LandingPage from '@/pages/Landing'
import LoginPage from '@/pages/auth/Login'
import RegisterPage from '@/pages/auth/Register'
import StudentDashboard from '@/pages/dashboard/StudentDashboard'
import { PlaceholderPage } from '@/components/ui/PlaceholderPage'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected app routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<StudentDashboard />} />

              {/* Phase 3 — Profile & Skills */}
              <Route path="/profile" element={
                <PlaceholderPage
                  title="Student Profile"
                  description="Enter your education, current skills, career interests, and target job role. Optionally upload your resume for skill extraction."
                  phase="Phase 3"
                />
              } />

              {/* Phase 4 — Job Market */}
              <Route path="/market" element={
                <PlaceholderPage
                  title="Global Job Market Dashboard"
                  description="Interactive charts showing in-demand roles, trending skills, regional comparisons, and emerging skill trends."
                  phase="Phase 4"
                />
              } />

              {/* Phase 5 — Skill Gap & Curriculum */}
              <Route path="/analysis" element={
                <PlaceholderPage
                  title="Skill Gap Analysis"
                  description="AI-powered comparison of your skills vs. employer requirements, with an explainable match score and learning priorities."
                  phase="Phase 5"
                />
              } />
              <Route path="/curriculum" element={
                <PlaceholderPage
                  title="Micro-Credential Curriculum Generator"
                  description="Generate a personalized, module-by-module curriculum with exercises, projects, assessments, and resources."
                  phase="Phase 5"
                />
              } />

              {/* Phase 6 — Roadmap & Assessments */}
              <Route path="/roadmap" element={
                <PlaceholderPage
                  title="Personalized Learning Roadmap"
                  description="Week-by-week visual roadmap with progress tracking, milestone markers, and schedule adjustments."
                  phase="Phase 6"
                />
              } />
              <Route path="/assessments" element={
                <PlaceholderPage
                  title="Assessments & Micro-Credentials"
                  description="Module-based quizzes, practical assessments, auto-scoring, and downloadable completion certificates."
                  phase="Phase 6"
                />
              } />

              {/* Phase 7 — Admin */}
              <Route path="/admin" element={
                <PlaceholderPage
                  title="Administrator Dashboard"
                  description="User management, skill categories, job-market sources, resource management, and platform analytics."
                  phase="Phase 7"
                />
              } />

              <Route path="/settings" element={
                <PlaceholderPage
                  title="Account Settings"
                  description="Manage your account preferences, notification settings, and linked credentials."
                  phase="Phase 3"
                />
              } />
            </Route>
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
