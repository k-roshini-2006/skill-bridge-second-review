import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, User, TrendingUp, GitBranch, BookOpen,
  Map, Award, Settings, LogOut, ChevronLeft, ChevronRight,
  Brain, Shield, Menu, X
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAuth } from '@/context/AuthContext'

const studentLinks = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'My Profile', href: '/profile', icon: User },
  { label: 'Job Market', href: '/market', icon: TrendingUp },
  { label: 'Skill Gap Analysis', href: '/analysis', icon: GitBranch },
  { label: 'My Curricula', href: '/curriculum', icon: BookOpen },
  { label: 'Learning Roadmap', href: '/roadmap', icon: Map },
  { label: 'Assessments', href: '/assessments', icon: Award },
]

const adminLinks = [
  { label: 'Admin Dashboard', href: '/admin', icon: Shield },
]

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  mobileOpen: boolean
  onMobileClose: () => void
}

export function Sidebar({ collapsed, onToggle, mobileOpen, onMobileClose }: SidebarProps) {
  const { profile, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const links = [...studentLinks, ...(profile?.role === 'admin' ? adminLinks : [])]

  const content = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className={cn(
        'flex items-center gap-3 px-4 py-5 border-b border-gray-100',
        collapsed && 'justify-center px-2'
      )}>
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
          <Brain className="w-5 h-5 text-white" />
        </div>
        {!collapsed && (
          <div>
            <span className="font-bold text-gray-900 text-sm">SkillBridge</span>
            <span className="text-indigo-600 font-bold text-sm"> AI</span>
          </div>
        )}
      </div>

      {/* Nav links */}
      <nav className="flex-1 py-4 px-3 space-y-0.5 overflow-y-auto">
        {links.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            onClick={onMobileClose}
            className={({ isActive }) => cn(
              'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150',
              isActive
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              collapsed && 'justify-center px-2'
            )}
            title={collapsed ? link.label : undefined}
          >
            <link.icon className="w-4.5 h-4.5 shrink-0 w-5 h-5" />
            {!collapsed && <span>{link.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* User + sign out */}
      <div className="border-t border-gray-100 p-3 space-y-0.5">
        <NavLink
          to="/settings"
          onClick={onMobileClose}
          className={({ isActive }) => cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150',
            isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50',
            collapsed && 'justify-center px-2'
          )}
        >
          <Settings className="w-5 h-5 shrink-0" />
          {!collapsed && <span>Settings</span>}
        </NavLink>

        <button
          onClick={handleSignOut}
          className={cn(
            'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium',
            'text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-150',
            collapsed && 'justify-center px-2'
          )}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </button>

        {/* Collapse toggle — desktop only */}
        <button
          onClick={onToggle}
          className={cn(
            'hidden lg:flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm',
            'text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all duration-150 mt-1',
            collapsed && 'justify-center px-2'
          )}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : (
            <>
              <ChevronLeft className="w-4 h-4" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className={cn(
        'hidden lg:flex flex-col bg-white border-r border-gray-100 transition-all duration-300',
        collapsed ? 'w-16' : 'w-60'
      )}>
        {content}
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/30" onClick={onMobileClose} />
          <aside className="relative flex flex-col w-64 bg-white border-r border-gray-100 z-50">
            <button
              onClick={onMobileClose}
              className="absolute top-4 right-4 p-1 rounded-md text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            {content}
          </aside>
        </div>
      )}
    </>
  )
}
