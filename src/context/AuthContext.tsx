import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase, isDemoMode } from '@/lib/supabase'
import type { UserProfile } from '@/types'

interface AuthUser {
  id: string
  email: string
}

interface AuthContextType {
  user: AuthUser | null
  profile: UserProfile | null
  loading: boolean
  isDemoMode: boolean
  signIn: (email: string, password: string) => Promise<{ error: string | null }>
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

// Demo user for when Supabase is not configured
const DEMO_USER: AuthUser = {
  id: 'demo-user-001',
  email: 'demo@skillbridge.ai',
}

const DEMO_PROFILE: UserProfile = {
  id: 'demo-user-001',
  email: 'demo@skillbridge.ai',
  full_name: 'Demo Student',
  college: 'State University of Technology',
  department: 'Computer Science',
  qualification: "Bachelor's Degree",
  career_interests: ['Full Stack Development', 'Data Engineering'],
  target_role: 'Full Stack Developer',
  industry_preference: 'Technology',
  learning_hours_per_week: 10,
  preferred_learning_duration: '3 months',
  role: 'student',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isDemoMode) {
      // Don't auto-login in demo mode — let user click "Try Demo"
      setLoading(false)
      return
    }

    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({ id: session.user.id, email: session.user.email! })
        fetchProfile(session.user.id)
      }
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          setUser({ id: session.user.id, email: session.user.email! })
          await fetchProfile(session.user.id)
        } else {
          setUser(null)
          setProfile(null)
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  async function fetchProfile(userId: string) {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    if (data) setProfile(data)
  }

  async function refreshProfile() {
    if (isDemoMode && user) {
      setProfile(DEMO_PROFILE)
      return
    }
    if (user) await fetchProfile(user.id)
  }

  async function signIn(email: string, password: string) {
    if (isDemoMode) {
      // Demo login
      if (email === 'demo@skillbridge.ai' && password === 'demo1234') {
        setUser(DEMO_USER)
        setProfile(DEMO_PROFILE)
        return { error: null }
      }
      return { error: 'Demo credentials: demo@skillbridge.ai / demo1234' }
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return { error: error?.message ?? null }
  }

  async function signUp(email: string, password: string, fullName: string) {
    if (isDemoMode) {
      return { error: 'Database not configured. Please set up Supabase credentials.' }
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    })
    return { error: error?.message ?? null }
  }

  async function signOut() {
    if (isDemoMode) {
      setUser(null)
      setProfile(null)
      return
    }
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{
      user, profile, loading, isDemoMode,
      signIn, signUp, signOut, refreshProfile,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
